import * as jose from "jose";

export async function sendWelcomeEmail(params) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
    auth: {
      user: process.env.email,
      pass: "323232",
    },
  });

  try {
    const info = await transporter.sendMail({
      from: '"Example Team" <team@example.com>', // sender address
      to: "alice@example.com, bob@example.com", // list of recipients
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
}

export async function createToken(userKaData) {
  const secret = new TextEncoder().encode(process.env.SESSION_SECRET);

  const alg = "HS256";

  const token = await new jose.SignJWT(userKaData)
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setIssuer("urn:example:issuer")
    .setAudience("urn:example:audience")
    .setExpirationTime("2h")
    .sign(secret);

  return token;
}
