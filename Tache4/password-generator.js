const generatePassword = require('generate-password');

const password = generatePassword.generate({
  length: 12,
  numbers: true,
  symbols: true,
});

console.log('Generated Password:', password);
