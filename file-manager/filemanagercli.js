const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'data');
const filePath = path.join(folderPath, 'notes.txt');

const command = process.argv[2];
const content = process.argv[3];

if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath);

switch (command) {
  case 'create':
    fs.writeFile(filePath, content || '', (err) => {
      if (err) throw err;
      console.log('File created.');
    });
    break;

  case 'append':
    fs.appendFile(filePath, `\n${content}`, (err) => {
      if (err) throw err;
      console.log('Content appended.');
    });
    break;

  case 'read':
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) throw err;
      console.log('File contents:\n', data);
    });
    break;

  case 'stats':
    fs.stat(filePath, (err, stats) => {
      if (err) throw err;
      console.log('Stats:', stats);
    });
    break;

  case 'delete':
    fs.unlink(filePath, (err) => {
      if (err) throw err;
      console.log('File deleted.');
    });
    break;

  default:
    console.log('Usage: node fileManagerCLI.js [create|append|read|stats|delete] "text if any"');
}