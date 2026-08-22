const fs = require('fs');

let file = 'src/app/page.js';
let text = fs.readFileSync(file, 'utf8');

text = text.replace(/<style>\s*\.btn-premium-orange \{[\s\S]*?<\/style>/, function(match) {
  return "<style dangerouslySetInnerHTML={{ __html: `" + match.replace(/<style>|<\/style>/g, '') + "` }} />";
});

fs.writeFileSync(file, text);
