import fs from 'fs';

let content = fs.readFileSync('src/pages/index.astro', 'utf8');

// Replace .//assets/ with /assets/
let newContent = content.replace(/\.\/\/assets\//g, '/assets/');
fs.writeFileSync('src/pages/index.astro', newContent, 'utf8');

console.log("Replaced .//assets/ with /assets/");

// Search for menu strings
const strings = ["full-menu", "Karte", "Vollst", "Speisekarte", "#"];
for (const s of strings) {
    const idx = newContent.toLowerCase().indexOf(s.toLowerCase());
    if (idx !== -1) {
        console.log(`Found ${s} at index ${idx}. Context:`);
        console.log(newContent.substring(Math.max(0, idx - 50), Math.min(newContent.length, idx + 50)));
    }
}
