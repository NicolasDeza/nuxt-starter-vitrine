import { z } from "zod";
import nodemailer from "nodemailer";

const ContactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(100, "Le nom est trop long"),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Email invalide")
    .max(255, "L'email est trop long"),
  message: z
    .string()
    .trim()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(1000, "Le message est trop long"),
});

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    throw createError({
      statusCode: 400,
      message: "Données invalides",
    });
  }

  const { name, email, message } = parsed.data;
  const config = useRuntimeConfig();

  const transporter = nodemailer.createTransport({
    host: config.smtp.host,
    port: config.smtp.port,
    secure: false, // port 587 = STARTTLS
    auth: {
      user: config.smtp.user,
      pass: config.smtp.pass,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Nicolas" <${config.mail.from}>`,
      to: config.mail.to,
      replyTo: email,
      subject: `Nouveau message de ${name}`,
      text: `Nom : ${name}
Email : ${email}

Message :
${message}`,
      html: `
        <h2>Nouveau message via le site</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Erreur SMTP:", error);
    throw createError({
      statusCode: 500,
      message: "Erreur lors de l'envoi de l'email",
    });
  }
});
