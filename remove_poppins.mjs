import fs from 'fs';
import path from 'path';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.jsx') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.ts')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk('./src');
let changedCount = 0;

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes("font-['Poppins']")) {
        // Remove the specific class and handle trailing/leading spaces properly
        content = content.replace(/\s?font-\['Poppins'\]\s?/g, ' ');
        // Cleanup extra spaces in className
        content = content.replace(/ {2,}/g, ' '); 
        content = content.replace(/\s+"/g, '"');
        // Fix trailing spaces just in case
        fs.writeFileSync(file, content, 'utf8');
        changedCount++;
        console.log(`Updated ${file}`);
    }
}

console.log(`Complete. Modified ${changedCount} files.`);sudo
