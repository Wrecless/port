"""Build editable CVs and export PDFs using a real, isolated Microsoft Word instance.
Run: uv run --with python-docx --with pymupdf --with pywin32 python docs/cv/generate_cvs.py
Writes only docs/cv, named public CV PDFs and the compatibility public/Profile.pdf.
"""
from pathlib import Path
import hashlib
import json
import os
import re
import shutil
import zipfile
from xml.etree import ElementTree as ET

import pymupdf
import win32com.client
from docx import Document
from docx.enum.style import WD_STYLE_TYPE
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Mm, Pt, RGBColor

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[1]
PUBLIC = ROOT / 'public'
BACKUP = ROOT.parent / '_backups' / 'portfolio-cv-original.pdf'
SCRATCH = Path(os.environ.get('HERMES_CV_SCRATCH', 'C:/Users/ninta/AppData/Local/hermes/profiles/webdev/cache/scratch/cv-validation'))
SCRATCH.mkdir(parents=True, exist_ok=True)
DATA = json.loads((HERE / 'cv-content.json').read_text(encoding='utf-8'))
NAVY = '15364A'
GREY = '4F5F6B'
BODY_SIZE = 10.5


def sha(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def normal(text):
    return re.sub(r'\s+', '', text).replace('•', '').replace('\u200b', '')


def link(paragraph, text, url, size: float = 9):
    from docx.opc.constants import RELATIONSHIP_TYPE as RT
    h = OxmlElement('w:hyperlink')
    h.set(qn('r:id'), paragraph.part.relate_to(url, RT.HYPERLINK, is_external=True))
    run = OxmlElement('w:r')
    props = OxmlElement('w:rPr')
    colour = OxmlElement('w:color'); colour.set(qn('w:val'), NAVY); props.append(colour)
    font_size = OxmlElement('w:sz'); font_size.set(qn('w:val'), str(int(size * 2))); props.append(font_size)
    run.append(props)
    value = OxmlElement('w:t'); value.text = text; run.append(value)
    h.append(run); paragraph._p.append(h)


def configure(doc, variant):
    section = doc.sections[0]
    section.page_width = Mm(210); section.page_height = Mm(297)
    section.top_margin = Mm(16); section.bottom_margin = Mm(16)
    section.left_margin = Mm(18); section.right_margin = Mm(18)
    section.header_distance = Mm(7); section.footer_distance = Mm(8)
    base = doc.styles['Normal']
    base.font.name = 'Arial'; base.font.size = Pt(BODY_SIZE)
    base.font.color.rgb = RGBColor.from_string('202C35')
    base.paragraph_format.line_spacing = Pt(12.4)
    base.paragraph_format.space_after = Pt(3)
    base.paragraph_format.widow_control = True
    for name, size, colour, before, after, bold, keep in [
        ('CV Name', 25, NAVY, 0, 3, True, True),
        ('CV Tagline', 11.5, NAVY, 0, 6, False, True),
        ('CV Contact', 9.5, GREY, 0, 2, False, True),
        ('CV Section', 10.5, NAVY, 9, 5, True, True),
        ('CV Entry', 10.5, NAVY, 6, 1, True, True),
        ('CV Meta', 9, GREY, 0, 2, False, True),
        ('CV Link', 9, NAVY, 0, 2, False, True),
        ('CV Bullet', BODY_SIZE, '202C35', 0, 2, False, False),
    ]:
        style = doc.styles.add_style(name, WD_STYLE_TYPE.PARAGRAPH)
        style.base_style = base
        style.font.size = Pt(size); style.font.bold = bold
        style.font.color.rgb = RGBColor.from_string(colour)
        fmt = style.paragraph_format
        fmt.space_before = Pt(before); fmt.space_after = Pt(after)
        fmt.line_spacing = Pt(size + 1.8)
        fmt.keep_with_next = keep; fmt.keep_together = True
    bullet = doc.styles['CV Bullet'].paragraph_format
    bullet.left_indent = Mm(3.3); bullet.first_line_indent = Mm(-3.3)
    heading = doc.styles['CV Section']
    ppr = heading.element.get_or_add_pPr()
    borders = OxmlElement('w:pBdr')
    bottom = OxmlElement('w:bottom')
    for key, value in {'val':'single','sz':'5','space':'3','color':'CBD6DE'}.items():
        bottom.set(qn('w:' + key), value)
    borders.append(bottom); ppr.append(borders)
    footer = section.footer.paragraphs[0]
    footer.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    footer.paragraph_format.space_after = Pt(0)
    r = footer.add_run(f"Bruno Mata | {variant['title']} | ")
    r.font.size = Pt(8); r.font.color.rgb = RGBColor.from_string(GREY)
    field = OxmlElement('w:fldSimple'); field.set(qn('w:instr'), 'PAGE'); footer._p.append(field)
    doc.core_properties.title = f"Bruno Mata — {variant['title']}"
    doc.core_properties.author = 'Bruno Mata'
    doc.core_properties.subject = 'Curriculum vitae'
    doc.core_properties.keywords = 'CV, Bruno Mata, ' + variant['id']


def add_block(doc, block):
    kind = block['type']
    if kind == 'section':
        doc.add_paragraph(block['text'].upper(), 'CV Section')
    elif kind == 'paragraph':
        p = doc.add_paragraph(block['text'])
        p.paragraph_format.keep_together = True
    elif kind in ('skill', 'compact'):
        p = doc.add_paragraph()
        p.paragraph_format.keep_together = True
        if kind == 'skill':
            p.add_run(block['label'] + ': ').bold = True
            p.add_run(block['text'])
        else:
            p.add_run(block['label']).bold = True
            p.add_run('\n' + block['text'])
            p.paragraph_format.space_before = Pt(3)
            p.paragraph_format.space_after = Pt(4)
    elif kind == 'bullet':
        doc.add_paragraph('• ' + block['text'], 'CV Bullet')
    elif kind == 'entry':
        p = doc.add_paragraph(block['title'], 'CV Entry')
        if block.get('meta'):
            doc.add_paragraph(block['meta'], 'CV Meta')
        if block.get('url'):
            p = doc.add_paragraph(style='CV Link')
            link(p, block['url'].removeprefix('https://'), block['url'])
        bullets = block.get('bullets', [])
        if not bullets:
            p.paragraph_format.keep_with_next = False
        for index, text in enumerate(bullets):
            p = doc.add_paragraph('• ' + text, 'CV Bullet')
            p.paragraph_format.keep_with_next = index < len(bullets) - 1
    else:
        raise ValueError(kind)


def build_docx(variant):
    doc = Document()
    configure(doc, variant)
    doc.add_paragraph(DATA['name'], 'CV Name')
    doc.add_paragraph(variant['title'], 'CV Tagline')
    doc.add_paragraph(DATA['contact'], 'CV Contact')
    p = doc.add_paragraph(style='CV Contact')
    link(p, DATA['portfolio'].removeprefix('https://'), DATA['portfolio'], 9.5)
    for index, blocks in enumerate(variant['pages']):
        if index:
            p = doc.add_paragraph('BRUNO MATA | ' + variant['title'].upper(), 'CV Meta')
            p.paragraph_format.page_break_before = True
            p.paragraph_format.space_after = Pt(5)
        for block in blocks:
            add_block(doc, block)
    path = HERE / f"Bruno-Mata-{variant['id']}-CV.docx"
    doc.save(path)
    return path


def expected_text(blocks):
    result = []
    for block in blocks:
        for key in ('text', 'label', 'title', 'meta'):
            if block.get(key):
                result.append(block[key].upper() if key == 'text' and block['type'] == 'section' else block[key])
        if block.get('url'):
            result.append(block['url'].removeprefix('https://'))
        result.extend(block.get('bullets', []))
    return result


def validate_docx(path, variant):
    with zipfile.ZipFile(path) as archive:
        assert archive.testzip() is None, 'DOCX CRC failure'
        required = ['[Content_Types].xml','_rels/.rels','word/document.xml','word/styles.xml']
        assert all(name in archive.namelist() for name in required)
        for name in archive.namelist():
            if name.endswith('.xml') or name.endswith('.rels'):
                ET.fromstring(archive.read(name))
        xml = ET.fromstring(archive.read('word/document.xml'))
        text = '\n'.join(node.text or '' for node in xml.iter(qn('w:t')))
    expected = [DATA['name'], DATA['contact'], DATA['portfolio'].removeprefix('https://')]
    for blocks in variant['pages']:
        expected.extend(expected_text(blocks))
    missing = [item for item in expected if normal(item) not in normal(text)]
    assert not missing, missing
    assert 'Present' not in text
    return {'zip_crc':'PASS','xml_parse':'PASS','required_parts':'PASS',
            'expected_strings_checked':len(expected),'missing_strings':missing,
            'explicit_page_breaks':len(xml.findall('.//' + qn('w:pageBreakBefore')))}


def validate_pdf(path, variant):
    report = []
    with pymupdf.open(path) as pdf:
        assert len(pdf) == 2, f'{path.name}: expected 2 pages, got {len(pdf)}'
        all_text = ''
        for index, page in enumerate(pdf):
            text = page.get_text()
            all_text += text
            expected = expected_text(variant['pages'][index])
            missing = [item for item in expected if normal(item) not in normal(text)]
            assert not missing, f'Wrong-page/missing content on page {index+1}: {missing}'
            assert text.strip(), 'Blank page'
            outside = []
            content_bottom = 0
            for block in page.get_text('dict')['blocks']:
                for line in block.get('lines', []):
                    for span in line['spans']:
                        x0,y0,x1,y1 = span['bbox']
                        if x0 < 0 or y0 < 0 or x1 > page.rect.width + 0.5 or y1 > page.rect.height + 0.5:
                            outside.append(span['text'])
                        if y0 < 790:
                            content_bottom = max(content_bottom, y1)
            assert not outside, outside
            image = SCRATCH / f'{path.stem}-page-{index+1}.png'
            page.get_pixmap(matrix=pymupdf.Matrix(1.5,1.5), alpha=False).save(image)
            report.append({'page':index+1,'expected_strings_checked':len(expected),
                           'missing_strings':missing,'out_of_page_spans':outside,
                           'content_bottom_pt':round(content_bottom,2), 'render':str(image.resolve())})
        assert DATA['contact'] in all_text
        assert 'Present' not in all_text
        (HERE / f'{path.stem}-extracted.txt').write_text(all_text, encoding='utf-8')
    return {'page_count':2,'pages':report}


def main():
    original = PUBLIC / 'Profile.pdf'
    if not BACKUP.exists():
        BACKUP.parent.mkdir(parents=True,exist_ok=True)
        shutil.copy2(original,BACKUP)
    paths = [(variant, build_docx(variant)) for variant in DATA['versions']]
    word = win32com.client.DispatchEx('Word.Application')
    word.Visible = False
    word.DisplayAlerts = 0
    report = {'renderer':'Microsoft Word ' + word.Version,
              'source':str((HERE/'cv-content.json').resolve()),
              'original_backup':str(BACKUP.resolve()),'original_backup_sha256':sha(BACKUP),
              'versions':[]}
    try:
        for variant, docx in paths:
            doc = word.Documents.Open(str(docx.resolve()), ReadOnly=False, AddToRecentFiles=False)
            try:
                doc.Repaginate()
                page_count = doc.ComputeStatistics(2)
                pdf = PUBLIC / f"Bruno-Mata-{variant['id']}-CV.pdf"
                doc.ExportAsFixedFormat(str(pdf.resolve()), 17, OpenAfterExport=False)
                doc.Save()
            finally:
                doc.Close(False)
            package = validate_docx(docx, variant)
            pdf_report = validate_pdf(pdf, variant)
            assert page_count == pdf_report['page_count'] == 2
            report['versions'].append({'version':variant['id'], 'docx':str(docx.resolve()),
                'pdf':str(pdf.resolve()),'word_rendered_page_count':page_count,
                'docx_validation':package, 'pdf_validation':pdf_report,
                'docx_sha256':sha(docx),'pdf_sha256':sha(pdf)})
    finally:
        word.Quit()
    software_pdf = PUBLIC / 'Bruno-Mata-Software-CV.pdf'
    shutil.copy2(software_pdf, original)
    assert sha(original) == sha(software_pdf)
    report['compatibility_copy'] = {'path':str(original.resolve()),
                                  'sha256':sha(original),'matches_software_pdf':True}
    report['status'] = 'PASS'
    (HERE / 'validation-report.json').write_text(json.dumps(report,indent=2),encoding='utf-8')
    print(json.dumps(report,indent=2))


if __name__ == '__main__':
    main()
