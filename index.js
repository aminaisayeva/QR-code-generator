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
  // generate qr Code
  const qrCode = qr.image(answers.url, { type: 'png' });
  
  // writable stream to a file
  const output = fs.createWriteStream('qr_img.png');
  
  // forward qr Code to  file
  qrCode.pipe(output);
  
  // save  URL in a txt file
  fs.writeFile('URL.txt', answers.url, err => {
    if(err) {
      console.error('Error writing to file', err);
    } else {
      console.log('URL saved to URL.txt');
    }
  });
});
