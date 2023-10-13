const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('File "welcome.txt" created and content written.');
  }
});


fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
    } else {
      console.log('Data from "welcome.txt":', data);
    }
  });
  