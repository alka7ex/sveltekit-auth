import sgMail from '@sendgrid/mail';
import { SENDGRID_API_KEY, FROM_EMAIL } from '$env/static/private';

export default async function sendEmail(
  email,
  subject,
  bodyHtml,
  bodyText
) {
  sgMail.setApiKey(SENDGRID_API_KEY);

  const msg = {
    to: email,
    from: FROM_EMAIL, // Replace this with your SendGrid verified sender
    subject: subject,
    text: bodyText,
    html: bodyHtml,
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent successfully!');
    return {
      statusCode: 200,
      message: 'Email sent successfully.',
    };
  } catch (error) {
    throw new Error(`Error sending email: ${error}`);
  }
}
