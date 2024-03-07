import nodemailer from "nodemailer";

const { SMTP_PASSWORD, SMTP_EMAIL } = process.env;

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: SMTP_EMAIL,
    pass: SMTP_PASSWORD,
  },
});

export const sendVerificationEmail = async ({
  to,
  token,
}: {
  to: string;
  token: string;
}) => {
  try {
    const confirmLink = `${process.env.NEXTAUTH_URL}/new-verification?token=${token}`;

    await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject: "Confirm your email",
      html: `<p>Confirm your email by <a href="${confirmLink}">link</a></p>`,
    });
  } catch {
    return null;
  }
};
