# Configuración del Formulario de Contacto con Resend

Este documento explica cómo configurar y probar el formulario de contacto que envía emails usando Resend.

## 📋 Requisitos Previos

- Cuenta en [Resend](https://resend.com)
- API Key de Resend

## 🔧 Configuración

### 1. Crear una Cuenta en Resend

1. Ve a [https://resend.com](https://resend.com)
2. Crea una cuenta gratuita (incluye 3,000 emails/mes)
3. Verifica tu email

### 2. Obtener tu API Key

1. Inicia sesión en tu cuenta de Resend
2. Ve a **API Keys** en el menú lateral
3. Haz clic en **Create API Key**
4. Dale un nombre (ej: "Relevant Formulario Contacto")
5. Selecciona los permisos necesarios (Full Access o Sending Access)
6. Copia la API Key (empieza con `re_`)

**⚠️ IMPORTANTE:** Guarda tu API Key en un lugar seguro. Solo se muestra una vez.

### 3. Configurar Variable de Entorno

1. Abre el archivo `.env.local` en la raíz del proyecto
2. Reemplaza `re_your_api_key_here` con tu API Key real:

```bash
RESEND_API_KEY=re_tu_api_key_aqui
```

3. Guarda el archivo

### 4. Reiniciar el Servidor de Desarrollo

Si el servidor ya está corriendo, detenlo y reinícialo para que cargue las nuevas variables de entorno:

```bash
# Detener el servidor (Ctrl+C)
# Iniciar de nuevo
bun run dev
```

## 🚀 Probar el Formulario

### 1. Acceder al Formulario

1. Abre tu navegador en `http://localhost:3000`
2. Desplázate hasta la sección de **Contacto** al final de la página

### 2. Llenar el Formulario

Completa todos los campos:

- **Nombre:** Tu nombre
- **Empresa:** Nombre de la empresa
- **Email:** Tu correo electrónico (válido)
- **Teléfono Celular:** Tu número de teléfono
- **Posiciones a cubrir:** Descripción de las necesidades
- **✓** Marca el checkbox de términos y condiciones

### 3. Enviar el Formulario

1. Haz clic en **"Enviar Mensaje"**
2. El botón mostrará "Enviando..." con un spinner
3. Si todo está correcto, verás un mensaje verde de éxito
4. Si hay un error, verás un mensaje rojo con el problema

### 4. Verificar Recepción

El email se enviará automáticamente a los siguientes correos:

- salvador@trustpeople.company
- digital@trustpeople.company
- gerencia@relevantmx.com
- manuel@topsales.expert

Revisa la bandeja de entrada de estos correos para confirmar la recepción.

## 📧 Formato del Email

El email recibido incluirá:

- Asunto: "Nuevo Contacto desde Relevant - [Nombre del contacto]"
- Formato HTML con diseño profesional
- Todos los datos del formulario
- Fecha y hora del envío
- Reply-To configurado al email del cliente (para responder directamente)

## 🔍 Debugging

### El email no se envía

1. **Verificar API Key:**

   - Asegúrate de que la API Key en `.env.local` sea correcta
   - Verifica que no tenga espacios al inicio o final
   - Debe empezar con `re_`

2. **Verificar el servidor:**

   - Reinicia el servidor después de cambiar `.env.local`
   - Revisa la consola del servidor para ver errores

3. **Verificar Network en el navegador:**
   - Abre DevTools (F12)
   - Ve a la pestaña Network
   - Envía el formulario
   - Busca la petición a `/api/contact`
   - Revisa la respuesta para ver el error específico

### ⚠️ Limitación de Cuenta sin Dominio Verificado

**IMPORTANTE**: Sin un dominio verificado, Resend solo permite enviar emails a tu propia dirección registrada (`desinbakan@gmail.com`).

**Código actual**: Configurado temporalmente para enviar solo a `desinbakan@gmail.com`

**Para enviar a los 4 correos institucionales en producción:**

Lee la guía completa: **[VERIFICAR_DOMINIO_RESEND.md](./VERIFICAR_DOMINIO_RESEND.md)**

Pasos rápidos:

1. Ve a **Domains** en tu panel de Resend
2. Agrega tu dominio `relevantmx.com`
3. Configura los registros DNS (SPF, DKIM, DMARC)
4. Espera verificación (1-72 horas)
5. Actualiza `src/app/api/contact/route.ts`:

```typescript
// Descomentar los emails institucionales
const RECIPIENTS = [
  "salvador@trustpeople.company",
  "digital@trustpeople.company",
  "gerencia@relevantmx.com",
  "manuel@topsales.expert",
];

// Cambiar el remitente
from: "Contacto Relevant <contacto@relevantmx.com>",
```

## 📊 Límites del Plan Gratuito

- **3,000 emails por mes**
- **100 emails por día**
- Suficiente para la mayoría de sitios web pequeños y medianos

## 🔐 Seguridad

- ✅ La API Key nunca se expone al cliente (solo en servidor)
- ✅ Validación en cliente y servidor
- ✅ Variables de entorno protegidas por `.gitignore`
- ✅ Rate limiting automático de Resend

## ✨ Características Implementadas

- ✅ Formulario con validación en tiempo real
- ✅ Mensajes de éxito y error
- ✅ Botón deshabilitado durante envío
- ✅ Spinner de carga
- ✅ Limpieza automática del formulario después de envío exitoso
- ✅ Email HTML con diseño profesional
- ✅ Envío a múltiples destinatarios
- ✅ Reply-To configurado para respuestas directas

## 📝 Próximos Pasos (Opcional)

1. **Verificar dominio personalizado** para emails profesionales
2. **Agregar analytics** para trackear envíos
3. **Implementar webhooks** para notificaciones de entrega
4. **Agregar CAPTCHA** para prevenir spam
5. **Crear templates de email** más complejos con React Email

---

¿Necesitas ayuda? Contacta al equipo de desarrollo.
