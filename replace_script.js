const fs = require('fs');
const path = require('path');

const walk = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      if (!file.includes('node_modules') && !file.includes('.git') && !file.includes('.next')) {
        results = results.concat(walk(file));
      }
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.json') || file.endsWith('.md')) {
        results.push(file);
      }
    }
  });
  return results;
};

const files = walk('/Users/realsamogb/Downloads/Harrington ecobuild');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // 1. Package name
  if (file.endsWith('package.json') || file.endsWith('package-lock.json')) {
    content = content.replace(/stitch_contact_pillarvolt_energy/g, 'stitch_contact_harrington_ecobuild_energy');
  }

  // 2. URLs and Emails (lowercase pillarvolt)
  content = content.replace(/pillarvolt-energy\.com/g, 'harrington-ecobuild-energy.com');
  content = content.replace(/pillarvolt\.com/g, 'harringtonecobuild.com');

  // 3. Normal text variants
  content = content.replace(/PillarVolt/g, 'Harrington ecobuild');
  content = content.replace(/Pillarvolt/g, 'Harrington ecobuild');
  
  // Any remaining lowercase pillarvolt
  content = content.replace(/pillarvolt/g, 'harrington ecobuild');

  // Any uppercase
  content = content.replace(/PILLARVOLT/g, 'HARRINGTON ECOBUILD');

  // Fix up title strings and alt texts to have proper capitalization if they got lowercase 'harrington ecobuild'
  // Actually, wait, let's let the text be as they are, but if the original was PillarVolt it will be Harrington ecobuild proper.

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated: ' + file);
  }
});
