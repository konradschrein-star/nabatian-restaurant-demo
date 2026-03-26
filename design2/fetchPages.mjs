import fs from 'fs';
import path from 'path';

const pages = [
  'abhol-und-lieferservice',
  'restaurant',
  'uber-uns',
  'persisches-fruehstueck',
  'gutschein',
  'kontakt',
  'impressum',
  'datenschutz'
];

const basePath = 'https://nabatian.de/';
const outputDir = 'src/pages';

async function fetchAndSavePage(slug) {
  try {
    const url = `${basePath}${slug}/`;
    console.log(`Fetching ${url}...`);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    }
    let html = await response.text();

    // The top matter for astro
    const prepend = `---\n// Auto-generated 1:1 port of ${slug}\n---\n`;

    // 1. Fix CSS/JS assets to use local /assets/ properly (which the earlier pages used)
    // Actually, in index.astro, they were <script src=".//assets/..." or <link href=".//assets/...
    // Let's just fix the URLs from wp-content to point to the live site for images, 
    // but update navigation links to relative routes.
    
    // Replace navigation absolute URLs
    html = html.replace(/href="https:\/\/nabatian\.de\/abhol-und-lieferservice\/"/g, 'href="/abhol-und-lieferservice/"');
    html = html.replace(/href="https:\/\/nabatian\.de\/restaurant\/"/g, 'href="/restaurant/"');
    html = html.replace(/href="https:\/\/nabatian\.de\/uber-uns\/"/g, 'href="/uber-uns/"');
    html = html.replace(/href="https:\/\/nabatian\.de\/persisches-fruehstueck\/"/g, 'href="/persisches-fruehstueck/"');
    html = html.replace(/href="https:\/\/nabatian\.de\/gutschein\/"/g, 'href="/gutschein/"');
    html = html.replace(/href="https:\/\/nabatian\.de\/speisekarte\/"/g, 'href="/speisekarte/"');
    html = html.replace(/href="https:\/\/nabatian\.de\/kontakt\/"/g, 'href="/kontakt/"');
    html = html.replace(/href="https:\/\/nabatian\.de\/impressum\/"/g, 'href="/impressum/"');
    html = html.replace(/href="https:\/\/nabatian\.de\/datenschutz\/"/g, 'href="/datenschutz/"');
    html = html.replace(/href="https:\/\/nabatian\.de\/"/g, 'href="/"');

    // Remove the annoying loading delays or specific inline scripts if they break
    // We optionally keep standard HTML.

    const finalAstroCode = prepend + html;
    
    const filePath = path.join(outputDir, `${slug}.astro`);
    fs.writeFileSync(filePath, finalAstroCode, 'utf8');
    console.log(`Saved ${slug} to ${filePath}`);
    
  } catch (error) {
    console.error(`Error processing ${slug}:`, error);
  }
}

async function main() {
  for (const slug of pages) {
    await fetchAndSavePage(slug);
  }
}

main();
