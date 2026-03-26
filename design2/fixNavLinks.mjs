import fs from 'fs';

const files = ['src/pages/index.astro', 'src/pages/speisekarte.astro'];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Replace absolute navigation paths to local relative ones
  content = content.replace(/href="https:\/\/nabatian\.de\/abhol-und-lieferservice\/"/g, 'href="/abhol-und-lieferservice/"');
  content = content.replace(/href="https:\/\/nabatian\.de\/restaurant\/"/g, 'href="/restaurant/"');
  content = content.replace(/href="https:\/\/nabatian\.de\/uber-uns\/"/g, 'href="/uber-uns/"');
  content = content.replace(/href="https:\/\/nabatian\.de\/persisches-fruehstueck\/"/g, 'href="/persisches-fruehstueck/"');
  content = content.replace(/href="https:\/\/nabatian\.de\/gutschein\/"/g, 'href="/gutschein/"');
  content = content.replace(/href="https:\/\/nabatian\.de\/speisekarte\/"/g, 'href="/speisekarte/"');
  content = content.replace(/href="https:\/\/nabatian\.de\/kontakt\/"/g, 'href="/kontakt/"');

  // Homepage links
  content = content.replace(/href="https:\/\/nabatian\.de\/"/g, 'href="/"');
  
  // Clean up any remaining hash links just in case
  content = content.replace(/href="https:\/\/nabatian\.de\/#"/g, 'href="/#"');
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated navigation links in ${file}`);
  }
}
