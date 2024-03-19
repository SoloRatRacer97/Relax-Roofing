import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import logo from '../../../public/logo/main-logo.svg';

const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

const handleRequest = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('Running the backend');

  async function validateHuman(token: string, userIp: string): Promise<{ success: boolean; score?: number }> {
    console.log('Running the validate human');
    const secretCaptchaKey = process.env.RECAPTCHA_SECRET_KEY_V3;
    console.log('Here is the token we are working with:', token);

    console.log('And this is the userIp:', userIp);

    const response = await axios.get(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretCaptchaKey}&response=${token}&remoteip=${userIp}`
    );

    const data = response.data;
    console.log(data);

    return { success: data.success, score: data.score };
  }

  const body = req.body;

  // console.log("This si the form data captcha:", body.captcha);

  const userIp = Array.isArray(req.headers['x-forwarded-for'])
    ? req.headers['x-forwarded-for'][0]
    : req.headers['x-forwarded-for'] || req.connection.remoteAddress || '';

  console.log('Here is the body.captcha:', body.token);

  const { success, score } = await validateHuman(body.token, userIp);

  console.log('Here is the score:', score);
  console.log('Here os tje success message:', success);

  if (!success || (score !== undefined && score < 0.5)) {
    res.status(400).json({ error: 'reCAPTCHA validation failed' });
    return;
  }

  if (req.body) {
    console.log('this is the req.body:', req.body);

    if (!body.fullName || !body.email || !body.businessName || !body.message) {
      res.status(400).json({ message: 'Inputs must be filled out' });
      return;
    }
    if (
      body.fullName.length > 150 ||
      body.email.length > 254 ||
      body.businessName.length > 254 ||
      body.message.length > 1000
    ) {
      res.status(400).json({ message: 'An input field is too long' });
      return;
    }

    const message = `
    <div style="font-family: 'Arial', sans-serif; border: 2px solid #2D3F92; padding: 30px; max-width: 600px; margin: auto; background-color: #E7E9EF; border-radius: 12px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <h2 style="color: #2C2665; margin-top: 0; border-bottom: 2px solid #2D3F92; padding-bottom: 10px;">New Customer Outreach</h2>
        </div>
        <p style="font-size: 16px; line-height: 1.5; color: #425CA7;"><strong style="color: #2D3F92;">Name:</strong> ${body.fullName}</p>
        <p style="font-size: 16px; line-height: 1.5; color: #425CA7;"><strong style="color: #2D3F92;">Email:</strong> ${body.email}</p>
        <p style="font-size: 16px; line-height: 1.5; color: #425CA7;"><strong style="color: #2D3F92;">Phone Number:</strong> ${body.businessName}</p>
        <p style="font-size: 16px; line-height: 1.5; color: #425CA7;"><strong style="color: #2D3F92;">Message:</strong> ${body.message}</p>
    </div>
    `;
    console.log("We are getting to the messages beign sent");

    const data = {
      // TODO: add in email for client
      to: 'johnrobert@relaxroofing.com',
      from: 'customer-inquiry@cascadewebsolutions.co',
      subject: 'Customer Outreach Message',
      text: message,
      html: message.replace(/\r\n/g, '<br>'),
    };

    try {
      await mail.send(data);
      console.log('Mail sent successfully');
    } catch (error) {
      console.error('Error sending mail:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
  } else {
    console.log('No body received');
  }

  res.status(200).json({ status: 'OK' });
};

export default handleRequest;