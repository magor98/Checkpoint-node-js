const nodemailer = require('nodemailer');

// Create a transporter with your email service provider's settings
const transporter = nodemailer.createTransport({
  service: 'email-services-magor',
  auth: {
    user: 'magorsene@gmail.com',
    pass: 'Papelayesene1998.',
  },
});

const mailOptions = {
  from: 'magorsene@gmail.com',
  to: 'Abdoulayemagorsene.com',
  subject: 'Test Email',
  text: 'This is a test email sent from Node.js',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
