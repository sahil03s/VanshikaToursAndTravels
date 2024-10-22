import nodemailer from 'nodemailer';
//import {google} from 'googleapis';

/*const oAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
);
*/

/*if (!process.env.REFRESH_TOKEN) {
    console.error('Refresh token is missing');
    console.log(process.env.REFRESH_TOKEN);
    throw new Error('Missing refresh token');
}
*/

/*oAuth2Client.setCredentials({refresh_token: process.env.REFRESH_TOKEN});

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
*/
// POST method to send email
export async function POST(req) {
  try {
    //const accessToken = await getAccessToken();

    // Parse request body for email data
    let { fname, lname, name, phone, email, traveldate, duration, passengers, comment } = await req.json();
    if(!name)
        name = fname + ' ' + lname;


    // Set up Nodemailer transporter with your email service (e.g., Gmail, SMTP)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        //type: 'OAuth2',
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
        //clientId: process.env.CLIENT_ID,
        //clientSecret: process.env.CLIENT_SECRET,
        //refreshToken: process.env.REFRESH_TOKEN,
        //accessToken: accessToken,
      },
    });

    // Build the HTML content dynamically based on the existence of fields
    let htmlContent = `<div>
                      <p>Hi Manish, You have a query from below person. Please reach out as soon as possible.</p>
                            <h4>Name : ${name}</h4>
                            <h4>Phone: ${phone}</h4>`;

    if (email)
        htmlContent += `<h4>Email: ${email}</h4>`;


    if (traveldate) {
    htmlContent += `<h4>Start Date of Journey : ${new Date(traveldate).toLocaleDateString()}</h4>`;
    }

    if (duration) {
    htmlContent += `<h4>Duration of Stay (in days): ${duration}</h4>`;
    }

    if (passengers) {
    htmlContent += `<h4>No. of Passengers: ${passengers}</h4>`;
    }

    if (comment) {
    htmlContent += `<h4>Comment:</h4> <p> ${comment} </p>`;
    }

    htmlContent += `<h4>Form filled at: ${new Date().toLocaleString()}</h4></div>`;

    // Define the email options
    const mailOptions = {
      from: process.env.EMAIL,  // Sender address
      to: 'vanshika.travelinfo@gmail.com',     // Recipient's email address (Business owner's email)
      subject: `New Query Received from ${name}`,  // Subject line
      html : htmlContent,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

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
