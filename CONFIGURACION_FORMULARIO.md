# Configuración del Formulario de Contacto con Nodemailer

Este documento explica cómo configurar y probar el formulario de contacto que envía emails usando Nodemailer con SMTP.

## 📋 Requisitos Previos

- Credenciales SMTP de un proveedor de correo (Gmail, Outlook, SendGrid, etc.)
- Servidor SMTP configurado y accesible

## 🔧 Configuración

### 1. Obtener Credenciales SMTP

Necesitas las credenciales SMTP de tu proveedor de correo electrónico. Aquí algunos ejemplos:

**Gmail / Google Workspace:**
- Host: `smtp.gmail.com`
- Puerto: `587` (TLS) o `465` (SSL)
- Usuario: Tu email (Gmail personal o Google Workspace como `tech@trustpeople.company`)
- Contraseña: Contraseña de aplicación (requiere autenticación de 2 factores)
- **Nota:** Google Workspace usa la misma configuración SMTP que Gmail personal

**Outlook/Office365:**
- Host: `smtp.office365.com`
- Puerto: `587`
- Usuario: Tu email de Outlook
- Contraseña: Tu contraseña de Outlook

**SendGrid:**
- Host: `smtp.sendgrid.net`
- Puerto: `587`
- Usuario: `apikey`
- Contraseña: Tu API Key de SendGrid

**Servidor SMTP Personalizado:**
- Host: Tu servidor SMTP
- Puerto: `587` (TLS) o `465` (SSL) o `25` (sin encriptación)
- Usuario: Tu usuario SMTP
- Contraseña: Tu contraseña SMTP

### 2. Configurar Variables de Entorno

1. Abre el archivo `.env.local` en la raíz del proyecto
2. Agrega las siguientes variables con tus credenciales SMTP:

```bash
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=tu_usuario@example.com
SMTP_PASS=tu_contraseña
SMTP_FROM=contacto@relevantmx.com
```

**Ejemplo para Gmail personal:**
```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=relevantmx@gmail.com
SMTP_PASS=tu_contraseña_de_aplicacion_generada
SMTP_FROM=relevantmx@gmail.com
```

**Ejemplo para Google Workspace (correo corporativo):**
```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tech@trustpeople.company
SMTP_PASS=tu_contraseña_de_aplicacion_generada
SMTP_FROM=tech@trustpeople.company
```

---

## 📧 Configuración Detallada para Gmail / Google Workspace

**Nota:** Esta configuración funciona tanto para Gmail personal (`@gmail.com`) como para Google Workspace (correos corporativos como `@trustpeople.company`, `@tudominio.com`, etc.).

### Paso 1: Habilitar Verificación en 2 Pasos (Requerido)

Tanto Gmail como Google Workspace requieren que tengas habilitada la verificación en 2 pasos para generar contraseñas de aplicación.

1. Ve a tu cuenta de Google: [https://myaccount.google.com](https://myaccount.google.com)
2. En el menú lateral izquierdo, haz clic en **"Seguridad"**
3. Busca la sección **"Acceso a Google"**
4. Si no tienes activada la verificación en 2 pasos, haz clic en **"Verificación en 2 pasos"**
5. Sigue las instrucciones para configurarla:
   - Ingresa tu número de teléfono
   - Recibirás un código por SMS
   - Ingresa el código para confirmar
   - Guarda los códigos de respaldo en un lugar seguro

**⚠️ IMPORTANTE:** Este paso es obligatorio. Sin la verificación en 2 pasos, no podrás generar contraseñas de aplicación.

### Paso 2: Generar Contraseña de Aplicación

Una vez que tengas la verificación en 2 pasos activada:

1. Asegúrate de estar logueado en la cuenta correcta:
   - Para Gmail personal: tu cuenta `@gmail.com`
   - Para Google Workspace: tu cuenta corporativa (`tech@trustpeople.company`)

2. Ve a la página de Contraseñas de aplicaciones: [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
   
   Si el enlace directo no funciona:
   - Ve a [https://myaccount.google.com](https://myaccount.google.com)
   - Haz clic en **"Seguridad"** en el menú lateral
   - Busca **"Verificación en 2 pasos"** y haz clic
   - Al final de la página, busca **"Contraseñas de aplicaciones"** y haz clic

   **⚠️ Para Google Workspace:** Si no ves la opción de "Contraseñas de aplicaciones", puede que tu administrador la haya deshabilitado. Contacta a tu administrador para habilitarla.

2. En la página de Contraseñas de aplicaciones:
   - Selecciona **"Correo"** en el menú desplegable **"Seleccionar aplicación"**
   - Selecciona **"Otro (nombre personalizado)"** en el menú desplegable **"Seleccionar dispositivo"**
   - Escribe: **"Relevant Formulario Contacto"** (o cualquier nombre que prefieras)
   - Haz clic en **"Generar"**

3. Google te mostrará una contraseña de 16 caracteres que se ve así:
   ```
   xxxx xxxx xxxx xxxx
   ```
   **⚠️ IMPORTANTE:** Copia esta contraseña inmediatamente. Solo se muestra una vez y no podrás verla de nuevo.

4. Usa esta contraseña (sin espacios) en tu archivo `.env.local` como `SMTP_PASS`

### Paso 3: Configurar Variables de Entorno

Crea o edita el archivo `.env.local` en la raíz de tu proyecto con estos valores:

**Para Gmail personal:**
```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=relevantmx@gmail.com
SMTP_PASS=xxxxxxxxxxxxxxxx
SMTP_FROM=relevantmx@gmail.com
```

**Para Google Workspace (correo corporativo):**
```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tech@trustpeople.company
SMTP_PASS=xxxxxxxxxxxxxxxx
SMTP_FROM=tech@trustpeople.company
```

**Reemplaza:**
- El `SMTP_USER` con tu correo real (ya sea `@gmail.com` o `@tudominio.com` para Google Workspace)
- `xxxxxxxxxxxxxxxx` con la contraseña de aplicación de 16 caracteres que generaste (sin espacios)
- `SMTP_FROM` debe ser el mismo correo que `SMTP_USER` o un alias autorizado

**Ejemplo real para Google Workspace:**
```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tech@trustpeople.company
SMTP_PASS=abcd efgh ijkl mnop
SMTP_FROM=tech@trustpeople.company
```

**Nota:** 
- En `SMTP_PASS` puedes dejar los espacios o quitarlos, ambos funcionan. Pero generalmente se copian sin espacios.
- Para Google Workspace, el host SMTP sigue siendo `smtp.gmail.com` (no cambia)
- Asegúrate de estar logueado en la cuenta correcta (`tech@trustpeople.company`) cuando generes la contraseña de aplicación

### Paso 4: Reiniciar el Servidor

1. Si el servidor de desarrollo está corriendo, deténlo con `Ctrl+C`
2. Inicia el servidor nuevamente:
   ```bash
   bun run dev
   ```

### Paso 5: Probar el Formulario

1. Ve a `http://localhost:3000`
2. Navega a la sección de contacto
3. Llena y envía el formulario
4. Verifica en los correos destinatarios que recibieron el email
5. Verifica en el correo del usuario que recibió el email de confirmación

Si todo funciona correctamente, verás un mensaje de éxito y los emails llegarán a sus destinatarios.

---

## 🔧 Solución de Problemas para Gmail / Google Workspace

### Error: "Invalid login" o "Authentication failed"

**Causa:** Usaste tu contraseña normal en lugar de una contraseña de aplicación.

**Solución:**
- Asegúrate de usar una **contraseña de aplicación** generada (16 caracteres)
- NO uses tu contraseña normal (ni de Gmail ni de Google Workspace)
- Vuelve al Paso 2 y genera una nueva contraseña de aplicación
- **Para Google Workspace:** Asegúrate de estar logueado en la cuenta correcta (`tech@trustpeople.company`) cuando generes la contraseña

### Error: "Please log in via your web browser"

**Causa:** La verificación en 2 pasos no está habilitada o Google bloqueó el acceso.

**Solución:**
1. Verifica que tengas la verificación en 2 pasos activada en tu cuenta (Gmail o Google Workspace)
2. Asegúrate de usar una contraseña de aplicación, no tu contraseña normal
3. **Para Google Workspace:** Si tu administrador ha restringido el acceso, puede que necesites permiso para usar aplicaciones externas

### Error: "Access Denied" o "App password not available" (Google Workspace)

**Causa:** Tu administrador de Google Workspace puede haber deshabilitado las contraseñas de aplicación.

**Solución:**
1. Contacta a tu administrador de Google Workspace
2. Solicita que habilite las "Contraseñas de aplicaciones" para tu cuenta
3. O solicita acceso SMTP a través de otras opciones si están disponibles en tu organización

### Error: "Connection timeout"

**Causa:** Problemas de firewall o puerto bloqueado.

**Solución:**
- Verifica que el puerto 587 no esté bloqueado por tu firewall
- Prueba con el puerto 465 (SSL):
  ```bash
  SMTP_PORT=465
  ```
  Nota: El código ya está configurado para usar SSL automáticamente cuando el puerto es 465.

---

## 🔐 Seguridad

- ✅ Las credenciales SMTP nunca se exponen al cliente (solo en servidor)
- ✅ Validación en cliente y servidor
- ✅ Variables de entorno protegidas por `.gitignore`
- ✅ Conexión SMTP encriptada (TLS/SSL)

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

1. **Configurar SPF/DKIM/DMARC** para mejorar la entrega de emails
2. **Agregar analytics** para trackear envíos
3. **Implementar colas de email** para mejor rendimiento
4. **Agregar CAPTCHA** para prevenir spam
5. **Crear templates de email** más complejos con Handlebars o similar

---

¿Necesitas ayuda? Contacta al equipo de desarrollo.
