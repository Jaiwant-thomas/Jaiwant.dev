import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(200),
  subject: z.string().trim().min(1).max(150),
  message: z.string().trim().min(1).max(2000),
}); 

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  // NOTE: no email/CRM provider is wired up yet — replace with a real
  // integration (e.g. Resend, SMTP, or a webhook) before relying on this
  // form in production.
  console.log("New contact form submission:", parsed.data);
try {
  const info = await transporter.sendMail({
    from: '"Jaiwant Thomas" <jaiwantthomas69@gmail.com>', // sender address
    to: "jaiwantthomas69@gmail.com, jaiwantamrsofttech@gmail.com", // list of recipients
    subject: "Hello", // subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // HTML body
  });

  console.log("Message sent: %s", info.messageId);
  // Preview URL is only available when using an Ethereal test account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
} catch (err) {
  console.error("Error while sending mail:", err);
}
  return NextResponse.json({ success: true });
}
