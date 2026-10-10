import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { jsPDF } from 'jspdf';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');

const jobs = [
  ['eduskills-offer-letter.png', 'eduskills-offer-letter.pdf', 'l'],
  ['eduskills-certificate.png', 'eduskills-certificate.pdf', 'l'],
  ['certificates/aws-foundation.png', 'certificates/aws-foundation.pdf', 'l'],
  ['certificates/aws-architecture.png', 'certificates/aws-architecture.pdf', 'l'],
  ['certificates/sih-hackathon.png', 'certificates/sih-hackathon.pdf', 'l'],
  ['certificates/leetcode-50-days.png', 'certificates/leetcode-50-days.pdf', 'p']
];

for (const [srcRel, outRel, orient] of jobs) {
  const src = join(root, srcRel);
  const out = join(root, outRel);
  if (!existsSync(src)) {
    console.warn('Missing', srcRel);
    continue;
  }
  const data = readFileSync(src).toString('base64');
  const img = `data:image/png;base64,${data}`;
  const doc = new jsPDF({ orientation: orient, unit: 'pt', format: 'a4' });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  doc.addImage(img, 'PNG', 0, 0, pageW, pageH);
  writeFileSync(out, Buffer.from(doc.output('arraybuffer')));
  console.log('Wrote', outRel);
}
