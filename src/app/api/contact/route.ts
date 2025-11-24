import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

// Configurar transportador SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: parseInt(process.env.SMTP_PORT || "587") === 465, // true para 465, false para otros puertos
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Correos institucionales destinatarios
const RECIPIENTS = [
  "salvador@trustpeople.company",
  "digital@trustpeople.company",
  "gerencia@relevantmx.com",
  "manuel@topsales.expert",
];

interface ContactFormData {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  mensaje: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validación de campos requeridos
    const { nombre, empresa, email, telefono, mensaje } = body;

    if (!nombre || !empresa || !email || !telefono || !mensaje) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    // Validación básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    // Crear fecha y hora actual
    const fechaEnvio = new Date().toLocaleString("es-MX", {
      timeZone: "America/Mexico_City",
      dateStyle: "full",
      timeStyle: "short",
    });

    // Crear contenido HTML del email
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #0C2055;
              background-color: #ffffff;
              max-width: 600px;
              margin: 0 auto;
              padding: 0;
            }
            .container {
              background-color: #ffffff;
              padding: 40px 32px;
            }
            .header {
              border-bottom: 3px solid #0C2055;
              padding-bottom: 24px;
              margin-bottom: 32px;
            }
            .header h1 {
              margin: 0;
              font-size: 28px;
              font-weight: 600;
              color: #0C2055;
              letter-spacing: -0.5px;
            }
            .header p {
              margin: 8px 0 0 0;
              font-size: 14px;
              color: #6c757d;
              font-weight: 400;
            }
            .field {
              margin-bottom: 24px;
              padding-bottom: 24px;
              border-bottom: 1px solid #e8e9ea;
            }
            .field:last-of-type {
              border-bottom: none;
            }
            .field-label {
              font-weight: 600;
              color: #0C2055;
              font-size: 11px;
              text-transform: uppercase;
              letter-spacing: 0.8px;
              margin-bottom: 8px;
              display: block;
            }
            .field-value {
              color: #0C2055;
              font-size: 16px;
              line-height: 1.5;
            }
            .field-value a {
              color: #00bf63;
              text-decoration: none;
              font-weight: 500;
            }
            .field-value a:hover {
              text-decoration: underline;
            }
            .mensaje {
              white-space: pre-wrap;
              word-wrap: break-word;
              line-height: 1.7;
            }
            .footer {
              margin-top: 40px;
              padding-top: 24px;
              border-top: 1px solid #e8e9ea;
              text-align: center;
            }
            .footer p {
              margin: 4px 0;
              color: #6c757d;
              font-size: 12px;
            }
            .footer-text {
              color: #6c757d;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Nuevo Contacto desde Relevant</h1>
              <p>Formulario de contacto web</p>
            </div>
            
            <div class="field">
              <span class="field-label">Nombre</span>
              <div class="field-value">${nombre}</div>
            </div>
            
            <div class="field">
              <span class="field-label">Empresa</span>
              <div class="field-value">${empresa}</div>
            </div>
            
            <div class="field">
              <span class="field-label">Email</span>
              <div class="field-value">
                <a href="mailto:${email}">${email}</a>
              </div>
            </div>
            
            <div class="field">
              <span class="field-label">Teléfono</span>
              <div class="field-value">
                <a href="tel:${telefono}">${telefono}</a>
              </div>
            </div>
            
            <div class="field">
              <span class="field-label">Posiciones a cubrir</span>
              <div class="field-value mensaje">${mensaje}</div>
            </div>
            
            <div class="footer">
              <p class="footer-text">Enviado el: ${fechaEnvio}</p>
              <p class="footer-text">Este mensaje fue enviado desde el formulario de contacto de Relevant</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // 1. Enviar email a los correos institucionales
    const fromEmail = process.env.SMTP_FROM || "contacto@relevantmx.com";
    
    try {
      const info = await transporter.sendMail({
        from: `Relevant Contacto <${fromEmail}>`,
        to: RECIPIENTS.join(", "), // Nodemailer acepta string separado por comas
        replyTo: email, // Responder directamente al cliente
        subject: `Nuevo Contacto desde Relevant - ${nombre}`,
        html: emailHtml,
      });

      console.log("Email enviado a institucionales:", info.messageId);
    } catch (error) {
      console.error("Error enviando email a institucionales:", error);
      return NextResponse.json(
        { error: "Error al enviar el mensaje. Por favor intenta de nuevo." },
        { status: 500 }
      );
    }

    // 2. Enviar email de confirmación al usuario
    const confirmacionHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #0C2055;
              background-color: #ffffff;
              max-width: 600px;
              margin: 0 auto;
              padding: 0;
            }
            .container {
              background-color: #ffffff;
              padding: 40px 32px;
            }
            .header {
              text-align: center;
              padding-bottom: 32px;
              border-bottom: 3px solid #00bf63;
              margin-bottom: 32px;
            }
            .logo-container {
              display: inline-block;
              margin-bottom: 20px;
              background-color: transparent !important;
              background: transparent !important;
            }
            .logo {
              max-width: 180px;
              height: auto;
              display: block;
              background-color: transparent !important;
              background: transparent !important;
              border: none;
              outline: none;
            }
            .header h1 {
              margin: 0 0 8px 0;
              font-size: 28px;
              font-weight: 600;
              color: #0C2055;
              letter-spacing: -0.5px;
            }
            .header p {
              margin: 0;
              font-size: 14px;
              color: #6c757d;
              font-weight: 400;
            }
            .content {
              margin-bottom: 32px;
            }
            .greeting {
              font-size: 18px;
              font-weight: 600;
              color: #0C2055;
              margin-bottom: 20px;
            }
            .message-text {
              font-size: 16px;
              line-height: 1.7;
              color: #0C2055;
              margin-bottom: 16px;
            }
            .message-text strong {
              color: #0C2055;
              font-weight: 600;
            }
            .cta-section {
              text-align: center;
              margin: 32px 0;
              padding: 32px 0;
              border-top: 1px solid #e8e9ea;
              border-bottom: 1px solid #e8e9ea;
            }
            .cta-text {
              font-size: 14px;
              color: #6c757d;
              margin-bottom: 20px;
            }
            .cta-button {
              display: inline-block;
              background-color: #00bf63;
              color: #0C2055;
              padding: 14px 32px;
              text-decoration: none;
              border-radius: 8px;
              font-weight: 600;
              font-size: 15px;
              transition: background-color 0.2s;
            }
            .cta-button:hover {
              background-color: #02C565;
              color: #0C2055;
            }
            .summary {
              background-color: #f8f9fa;
              padding: 24px;
              border-radius: 8px;
              margin-top: 32px;
              border: 1px solid #e8e9ea;
            }
            .summary h3 {
              margin: 0 0 16px 0;
              font-size: 15px;
              font-weight: 600;
              color: #0C2055;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .summary ul {
              margin: 0;
              padding-left: 20px;
              list-style: none;
            }
            .summary li {
              margin-bottom: 8px;
              color: #0C2055;
              font-size: 14px;
            }
            .summary li strong {
              color: #0C2055;
              font-weight: 600;
            }
            .footer {
              margin-top: 40px;
              padding-top: 24px;
              border-top: 1px solid #e8e9ea;
              text-align: center;
            }
            .footer p {
              margin: 4px 0;
              color: #6c757d;
              font-size: 12px;
            }
            .footer strong {
              color: #0C2055;
              font-weight: 600;
            }
            .footer a {
              color: #00bf63;
              text-decoration: none;
            }
            .footer a:hover {
              text-decoration: underline;
            }
            .footer-note {
              margin-top: 16px;
              padding-top: 16px;
              border-top: 1px solid #e8e9ea;
              font-size: 11px;
              color: #9ca3af;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>¡Gracias por contactarnos!</h1>
              <p>Hemos recibido tu mensaje correctamente</p>
            </div>
            
            <div class="content">
              <div class="greeting">Hola ${nombre},</div>
              <p class="message-text">
                Gracias por ponerte en contacto con <strong>Relevant</strong>. 
                Hemos recibido tu solicitud y nuestro equipo de especialistas en reclutamiento 
                está revisando tu mensaje.
              </p>
              <p class="message-text">
                Nos pondremos en contacto contigo a la brevedad para ayudarte a encontrar 
                el talento que tu empresa necesita.
              </p>
            </div>

            <div class="cta-section">
              <p class="cta-text">Mientras tanto, conoce más sobre nosotros:</p>
              <a href="https://relevantmx.com" class="cta-button">Visitar nuestro sitio web</a>
            </div>

            <div class="summary">
              <h3>Resumen de tu solicitud</h3>
              <ul>
                <li><strong>Empresa:</strong> ${empresa}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Teléfono:</strong> ${telefono}</li>
              </ul>
            </div>

            <div class="footer">
              <p><strong>Relevant - Headhunting Especializado</strong></p>
              <p>Conectando el mejor talento TI y C-Level con las empresas líderes</p>
              <p style="margin-top: 12px;">
                <a href="mailto:relevantmx@gmail.com">relevantmx@gmail.com</a>
              </p>
              <p class="footer-note">
                Este es un email automático de confirmación. Por favor no respondas a este mensaje.
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    // No bloqueamos si falla el email de confirmación, solo lo registramos
    try {
      const confirmacionInfo = await transporter.sendMail({
        from: `Relevant <${fromEmail}>`,
        to: email, // Email del usuario
        subject: "✅ Hemos recibido tu mensaje - Relevant",
        html: confirmacionHtml,
      });

      console.log("Email de confirmación enviado:", confirmacionInfo.messageId);
    } catch (confirmacionError) {
      console.error("Error enviando email de confirmación:", confirmacionError);
      // Continuamos de todos modos ya que el email principal sí se envió
    }

    return NextResponse.json(
      {
        success: true,
        message: "Mensaje enviado correctamente",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en API route:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
