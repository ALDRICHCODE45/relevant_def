import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

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
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 30px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .content {
              background: #f8f9fa;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .field {
              margin-bottom: 20px;
              background: white;
              padding: 15px;
              border-radius: 8px;
              border-left: 4px solid #667eea;
            }
            .field-label {
              font-weight: 600;
              color: #667eea;
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 5px;
            }
            .field-value {
              color: #333;
              font-size: 15px;
            }
            .mensaje {
              white-space: pre-wrap;
              word-wrap: break-word;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              padding-top: 20px;
              border-top: 1px solid #dee2e6;
              color: #6c757d;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">Nuevo Contacto desde Relevant</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Formulario de contacto web</p>
          </div>
          
          <div class="content">
            <div class="field">
              <div class="field-label">Nombre</div>
              <div class="field-value">${nombre}</div>
            </div>
            
            <div class="field">
              <div class="field-label">Empresa</div>
              <div class="field-value">${empresa}</div>
            </div>
            
            <div class="field">
              <div class="field-label">Email</div>
              <div class="field-value">
                <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">
                  ${email}
                </a>
              </div>
            </div>
            
            <div class="field">
              <div class="field-label">Teléfono</div>
              <div class="field-value">
                <a href="tel:${telefono}" style="color: #667eea; text-decoration: none;">
                  ${telefono}
                </a>
              </div>
            </div>
            
            <div class="field">
              <div class="field-label">Posiciones a cubrir</div>
              <div class="field-value mensaje">${mensaje}</div>
            </div>
            
            <div class="footer">
              <p>Enviado el: ${fechaEnvio}</p>
              <p>Este mensaje fue enviado desde el formulario de contacto de Relevant</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // 1. Enviar email a los correos institucionales
    const { data, error } = await resend.emails.send({
      from: "Relevant Contacto <contacto@relevantmx.com>",
      to: RECIPIENTS,
      replyTo: email, // Responder directamente al cliente
      subject: `Nuevo Contacto desde Relevant - ${nombre}`,
      html: emailHtml,
    });

    if (error) {
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
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 40px 30px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .content {
              background: #f8f9fa;
              padding: 40px 30px;
              border-radius: 0 0 10px 10px;
            }
            .message {
              background: white;
              padding: 25px;
              border-radius: 8px;
              margin-bottom: 20px;
              border-left: 4px solid #667eea;
            }
            .cta-button {
              display: inline-block;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 14px 30px;
              text-decoration: none;
              border-radius: 8px;
              font-weight: 600;
              margin: 20px 0;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #dee2e6;
              color: #6c757d;
              font-size: 14px;
            }
            .check-icon {
              width: 60px;
              height: 60px;
              background: #28a745;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 20px;
              font-size: 30px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="check-icon">✓</div>
            <h1 style="margin: 0; font-size: 28px;">¡Gracias por contactarnos!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 16px;">Hemos recibido tu mensaje correctamente</p>
          </div>
          
          <div class="content">
            <div class="message">
              <h2 style="margin-top: 0; color: #667eea;">Hola ${nombre},</h2>
              <p style="font-size: 16px; line-height: 1.8;">
                Gracias por ponerte en contacto con <strong>Relevant</strong>. 
                Hemos recibido tu solicitud y nuestro equipo de especialistas en reclutamiento 
                está revisando tu mensaje.
              </p>
              <p style="font-size: 16px; line-height: 1.8;">
                Nos pondremos en contacto contigo a la brevedad para ayudarte a encontrar 
                el talento que tu empresa necesita.
              </p>
            </div>

            <div style="text-align: center;">
              <p style="font-size: 14px; color: #6c757d; margin-bottom: 10px;">
                Mientras tanto, conoce más sobre nosotros:
              </p>
              <a href="https://relevantmx.com" class="cta-button" style="color: white;">
                Visitar nuestro sitio web
              </a>
            </div>

            <div style="background: white; padding: 20px; border-radius: 8px; margin-top: 20px;">
              <h3 style="margin-top: 0; font-size: 16px; color: #667eea;">📋 Resumen de tu solicitud:</h3>
              <ul style="padding-left: 20px; color: #6c757d;">
                <li><strong>Empresa:</strong> ${empresa}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Teléfono:</strong> ${telefono}</li>
              </ul>
            </div>

            <div class="footer">
              <p style="margin: 5px 0;">
                <strong>Relevant - Headhunting Especializado</strong>
              </p>
              <p style="margin: 5px 0;">
                Conectando el mejor talento TI y C-Level con las empresas líderes
              </p>
              <p style="margin: 15px 0 5px 0;">
                📧 <a href="mailto:contacto@relevantmx.com" style="color: #667eea; text-decoration: none;">contacto@relevantmx.com</a>
              </p>
              <p style="margin: 5px 0; font-size: 12px; color: #999;">
                Este es un email automático de confirmación. Por favor no respondas a este mensaje.
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    const { error: confirmacionError } = await resend.emails.send({
      from: "Relevant <contacto@relevantmx.com>",
      to: email, // Email del usuario
      subject: "✅ Hemos recibido tu mensaje - Relevant",
      html: confirmacionHtml,
    });

    // No bloqueamos si falla el email de confirmación, solo lo registramos
    if (confirmacionError) {
      console.error("Error enviando email de confirmación:", confirmacionError);
      // Continuamos de todos modos ya que el email principal sí se envió
    }

    return NextResponse.json(
      {
        success: true,
        message: "Mensaje enviado correctamente",
        emailId: data?.id,
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
