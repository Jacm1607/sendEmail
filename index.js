const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

app.use(express.json());

const transporter = nodemailer.createTransport({
 pool: true,
  host: "mail.hauscenter.com.bo",
  port: 465,
  secure: true, // upgrade later with STARTTLS
  auth: {
    user: "noreply@hauscenter.com.bo",
    pass: "Markas2023*",
  },
});

app.post('/api/send-email', async (req, res) => {
  const { to, subject, text } = req.body;

  const mailOptions = {
    from: 'ecommerce@hauscenter.com.bo',
    to: 'ecommerce@hauscenter.com.bo',
    subject: 'NUEVO PEDIDO HAUSCENTER',
    text: 'HAUSCENTER',
  };

 transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error al enviar el correo:', error);
  } else {
    console.log('Correo electrónico enviado:', info.response);
  }
});
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
