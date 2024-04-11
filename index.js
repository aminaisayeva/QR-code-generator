const inquirer = require('inquirer');
const qr = require('qr-image');
const fs = require('fs');

inquirer.prompt([
  {
    type: 'input',
    name: 'url',
    message: 'What URL would you like to generate a QR code for?',
  },
]).then(answers => {
  // Generate QR Code
  const qrCode = qr.image(answers.url, { type: 'png' });
  
  // Create a writable stream to a file
  const output = fs.createWriteStream('qr_img.png');
  
  // Pipe the QR Code to the file
  qrCode.pipe(output);
  
  // Save the URL in a text file
  fs.writeFile('URL.txt', answers.url, err => {
    if(err) {
      console.error('Error writing to file', err);
    } else {
      console.log('URL saved to URL.txt');
    }
  });
});
