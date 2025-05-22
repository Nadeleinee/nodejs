const fs = require('fs');
const path = require('path');

// Set folder and file paths
const folderPath = path.join(__dirname, 'data');
const filePath = path.join(folderPath, 'sample.txt');

// 1. Create a folder if it doesn't exist
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath, { recursive: true });
  console.log('✅ Folder created:', folderPath);
}

// 2. Write to a file
fs.writeFile(filePath, 'This is the first line.\n', (err) => {
  if (err) throw err;
  console.log('✅ File written:', filePath);

  // 3. Append more content
  fs.appendFile(filePath, 'This is an appended line.\n', (err) => {
    if (err) throw err;
    console.log('✅ Content appended.');

    // 4. Read the file
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) throw err;
      console.log('📖 File content:\n', data);

      // 5. Get file stats
      fs.stat(filePath, (err, stats) => {
        if (err) throw err;
        console.log('📊 File Stats:', stats);

        // 6. Read all files in the folder
        fs.readdir(folderPath, (err, files) => {
          if (err) throw err;
          console.log('📂 Files in folder:', files);

          // 7. Optionally delete file and folder (cleanup)
          /*
          fs.unlink(filePath, (err) => {
            if (err) throw err;
            console.log('🗑️ File deleted.');

            fs.rmdir(folderPath, (err) => {
              if (err) throw err;
              console.log('🗑️ Folder deleted.');
            });
          });
          */
        });
      });
    });
  });
});