import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Classroom Tools — Bruno Mata',
  description: 'Computer science classroom games for practising algorithms, binary, logic, and computational maths.',
  alternates: { canonical: '/more-projects' },
};

export default function ClassroomToolsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
