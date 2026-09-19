import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

async function send(body: object) {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USERNAME,
      to: process.env.EMAIL_TARGET_MAIL,
      subject: 'Hello',
      text: JSON.stringify(body),
      html: JSON.stringify(body),
    });

    console.log('Message sent', info.messageId);

    return 'ok';
  } catch (err) {
    console.error('Error while sending mail:', err);

    return 'nok';
  }
}

export default { send };
