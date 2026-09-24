import nodemailer from 'nodemailer';
import type { ContactData } from '../types/contact-data.model';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

async function send(body: ContactData) {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USERNAME,
      to: process.env.EMAIL_TARGET_MAIL,
      subject: 'Hello',
      text: `
name: ${body.name}
email: ${body.email}
company: ${body.company || '-'}
message: ${body.message}
----`,
      html: `
<p>name: ${body.name}</p>
<p>email: ${body.email}</p>
<p>company: ${body.company || '-'}</p>
<p>message: ${body.message}</p>
----`
    });

    console.log('Message sent', info.messageId);

    return 'ok';
  } catch (err) {
    console.error('Error while sending mail:', err);

    return 'nok';
  }
}

export default { send };
