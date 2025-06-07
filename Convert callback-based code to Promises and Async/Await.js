// const fs = require('fs');

// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error:', err);
//     return;
//   }
//   console.log('File data:', data);
// });

const fs = require('fs').promises;

async function readFileData() {
  try {
    const data = await fs.readFile('example.txt', 'utf8');
    console.log('File data:', data);
  } catch (err) {
    console.error('Error:', err);
  }
}

readFileData();