import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USERNAME, // generated ethereal user
        pass: process.env.SMTP_PASSWORD, // generated ethereal password
      },
    });

    // Send mail to the user
    let info = await transporter.sendMail({
      from: `"${process.env.EMAIL_FROM}" <${process.env.SMTP_USERNAME}>`, // sender address
      to: email, // list of receivers
      subject: `Thanks for Contacting ${process.env.COMPANY_NAME}!`, // Subject line (replace with your company name)
      text: `
Dear ${name},

Thank you for reaching out to ${process.env.COMPANY_NAME}. We appreciate you taking the time to contact us with your message:

> ${message}

Our team will review your message and respond to you as soon as possible. 

In the meantime, you can find more information about ${process.env.COMPANY_NAME} on our website: ${process.env.WEBSITE_URL}.

Sincerely,

The ${process.env.COMPANY_NAME} Team
`, // plain text body (replace with your company details)
    });

    console.log("Message sent to user: %s", info.messageId);

    // Send notification email to yourself
    info = await transporter.sendMail({
      from: `"${process.env.EMAIL_FROM}" <${process.env.SMTP_USERNAME}>`, // sender address
      to: process.env.NOTIFICATION_EMAIL, // list of receivers
      subject: `New Contact Form Submission: ${name}`, // Subject line
      text: `
A new message has been submitted through the contact form on the website.

**Details:**

* Name: ${name}
* Email: ${email}
* Message:

> ${message}

`, // plain text body
    });

    console.log("Notification email sent: %s", info.messageId);

    res
      .status(200)
      .json({ status: "success", message: "Emails sent successfully" });
  } else {
    res.status(405).json({ status: "error", message: "Method not allowed" });
  }
}
