# Bruno Mata — CV deliverables

## Files

| Version | PDF | Editable Word document | Verified pages |
|---|---|---|---|
| Software / full-stack | `E:/wrekals/port/public/Bruno-Mata-Software-CV.pdf` | `E:/wrekals/port/docs/cv/Bruno-Mata-Software-CV.docx` | 2 in each format |
| Computing teaching / curriculum leadership | `E:/wrekals/port/public/Bruno-Mata-Teaching-CV.pdf` | `E:/wrekals/port/docs/cv/Bruno-Mata-Teaching-CV.docx` | 2 in each format |

`E:/wrekals/port/public/Profile.pdf` is a byte-identical compatibility copy of the software PDF.

The original CV was backed up before replacement to `E:/wrekals/_backups/portfolio-cv-original.pdf`; its SHA-256 is `feed87215f88d843f89a4094e23268df4c6e9a1c435ee7e1829ac3229787e11d`.

## Factual scope

- Original qualifications, contact details, previous roles and training came from the original `Profile.pdf`.
- Abbotsholme employment was corrected to January 2025–June 2026, as confirmed by the user.
- Current employment is deliberately listed only as `Chilwell School | Current role`. Exact title, start date, location and duties were not supplied and have not been invented.
- Freelance work remains September 2022–September 2025. Later personal projects are not presented as paid freelance work.
- Project details use the checked project information supplied for this task. There are no invented adoption, outcome, revenue, test-count, privacy or clinical-effectiveness claims.
- Couples Mediation is identified as a personal prototype under development and non-clinical. SoulSupport is identified as non-clinical wellbeing resources.
- AWS/Azure expertise and current DBS validity are not asserted.
- No app source/configuration files were edited. No git commit, push or deployment was performed.

## Rebuild

From `E:/wrekals/port`, run:

```bash
uv run --with python-docx --with pymupdf --with pywin32 python docs/cv/generate_cvs.py
```

Edit `cv-content.json` to change the factual content. `generate_cvs.py` builds both DOCX files, exports the PDFs with an isolated Microsoft Word COM instance, checks actual pagination/content, renders evidence and updates the compatibility copy only after both versions validate.

PDFs are actual Microsoft Word exports of the editable DOCX files, not independently reconstructed PDFs. Microsoft Word 16.0 was available and used; LibreOffice was not installed. Rebuilding requires Windows and Microsoft Word. Other Word versions, fonts or editors may repaginate the editable documents after changes.

## Validation

- `validation-report.json`: actual Word renderer version, exact page counts, paths, SHA-256 hashes and per-page PDF/content checks.
- `validation-health.json`: DOCX package-health helper results and recorded visual review.
- `Bruno-Mata-Software-CV-extracted.txt` and `Bruno-Mata-Teaching-CV-extracted.txt`: text re-extracted from the delivered PDFs.
- Both native Word page counts and PyMuPDF PDF page counts returned **2**.
- Software DOCX: **72** expected strings checked; teaching DOCX: **60**; no missing strings.
- PDF per-page content checks returned `missing_strings: []` and `out_of_page_spans: []` on every page. Every complete bullet was checked on its intended page.
- DOCX ZIP CRC, XML parsing and required-package-part checks passed for both documents.
- Full DOCX package helper returned `{"ok": true, "issues": []}` for both files, exit code 0. This is a package health check, not a formal XSD certification.
- All four PDF pages were visually inspected: no clipping, overlap or split/orphan bullets observed; consistent single-column hierarchy and readable text.
- Render evidence is in `C:/Users/ninta/AppData/Local/hermes/profiles/webdev/cache/scratch/cv-validation/` and may be pruned by the normal scratch retention policy.
