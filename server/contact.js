import { Resend } from 'resend';

export async function sendContactEmail(input) {
  const { name, email, subject, message } = input ?? {};
  const fields = [name, email, subject, message];

  if (
    !fields.every((field) => typeof field === 'string') ||
    name.trim().length < 1 ||
    name.trim().length > 100 ||
    email.trim().length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
    subject.trim().length < 1 ||
    subject.trim().length > 150 ||
    message.trim().length < 1 ||
    message.trim().length > 5000 ||
    [name, email, subject].some((field) => /[\r\n]/.test(field))
  ) {
    return { status: 400, body: { error: 'Please check the form fields and try again.' } };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CONTACT_RECEIVER_EMAIL;

  if (!apiKey || !from || !to) {
    console.error('Contact email is not configured. Set RESEND_API_KEY, RESEND_FROM_EMAIL, and CONTACT_RECEIVER_EMAIL.');
    return { status: 503, body: { error: 'The contact form is not configured yet. Please try again later.' } };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email.trim(),
      subject: `Portfolio contact: ${subject.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\nSubject: ${subject.trim()}\n\n${message.trim()}`,
    });

    if (error) {
      console.error('Resend rejected a portfolio contact message:', error);
      return { status: 502, body: { error: 'Email could not be sent right now. Please try again later.' } };
    }
  } catch (error) {
    console.error('Failed to send a portfolio contact email:', error);
    return { status: 502, body: { error: 'Email could not be sent right now. Please try again later.' } };
  }

  return { status: 200, body: { message: 'Your message was sent successfully.' } };
}
