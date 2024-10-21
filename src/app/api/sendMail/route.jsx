import nodemailer from 'nodemailer';
import {google} from 'googleapis';

const oAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
);

if (!process.env.REFRESH_TOKEN) {
    console.error('Refresh token is missing');
    console.log(process.env.REFRESH_TOKEN);
    throw new Error('Missing refresh token');
}

oAuth2Client.setCredentials({refresh_token: process.env.REFRESH_TOKEN});

const getAccessToken = async () => {
    try {
        const accessToken = await oAuth2Client.getAccessToken();
        return accessToken.token;
    }
    catch(error) {
        console.error('Error getting access token:', error);
        throw error;
    }
}

// POST method to send email
export async function POST(req) {
  try {
    const accessToken = await getAccessToken();

    // Parse request body for email data
    const { fname, lname, phone, email, traveldate, duration, passengers, comment } = await req.json();
    const name = fname + ' ' + lname;


    // Set up Nodemailer transporter with your email service (e.g., Gmail, SMTP)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: "smtp.gmail.com",
port: 465,
secure: true,
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    console.log(process.env.EMAIL);
    console.log(process.env.CLIENT_ID);
    console.log(process.env.CLIENT_SECRET);
    console.log(process.env.REFRESH_TOKEN);
    console.log(accessToken);

    // Define the email options
    const mailOptions = {
      from: process.env.EMAIL,  // Sender address
      to: 'vanshika.travelinfo@gmail.com',     // Recipient's email address (Business owner's email)
      subject: 'New Contact Form Submission',  // Subject line
      text: `You have a new message from ${name} (${email}):\n\n`, // Email body
      // html : `<div>
      //           <h1>Name : ${name}</h1>
      //           <h1>Phone: ${phone}</h1>
      //           <h1>Email: ${email}</h1>
      //           <h1>Start Date of Journey : ${traveldate}</h1>
      //           <h1>Duration of Stay (in days): ${duration}</h1>
      //           <h1>No. of Passengers: ${passengers}</h1>
      //           <h1>Comment: ${comment}</h1>
      //           <h1>Form filled at: ${Date.now()}</h1>
      //       </div>`,
    };

    // Send the email
    console.log('1');
    await transporter.sendMail(mailOptions);
    console.log('2');

    // Return a success response
    return new Response(JSON.stringify({ success: true, message: 'Email sent successfully!' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false, message: 'Error sending email' }), {
      status: 500,
    });
  }
}