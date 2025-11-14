# 🌐 Guía: Verificar Dominio en Resend para Envío a Múltiples Destinatarios

## ¿Por qué necesito verificar un dominio?

Resend en modo de prueba (sin dominio verificado) solo permite enviar emails a tu propia dirección de correo. Para enviar a los 4 correos institucionales necesitas verificar un dominio propio.

## 📝 Requisitos Previos

- Acceso al panel de administración DNS de tu dominio
- Dominio propio (parece que tienes: `relevantmx.com`)
- Cuenta activa en Resend

---

## 🚀 Pasos para Verificar tu Dominio

### 1. Acceder a Resend Dashboard

1. Ve a [https://resend.com](https://resend.com)
2. Inicia sesión con tu cuenta
3. En el menú lateral, haz clic en **"Domains"**

### 2. Agregar tu Dominio

1. Haz clic en el botón **"Add Domain"**
2. Ingresa tu dominio: `relevantmx.com` (o el que uses)
3. Selecciona la región (recomendado: **US East** para México)
4. Haz clic en **"Add"**

### 3. Obtener Registros DNS

Resend te proporcionará varios registros DNS que debes configurar:

#### Registros que necesitarás agregar:

```
1. SPF (TXT Record)
   Nombre: relevantmx.com
   Tipo: TXT
   Valor: v=spf1 include:resend.com ~all
   TTL: 3600

2. DKIM (CNAME Record)
   Nombre: resend._domainkey.relevantmx.com
   Tipo: CNAME
   Valor: [valor proporcionado por Resend]
   TTL: 3600

3. DMARC (TXT Record) - Opcional pero recomendado
   Nombre: _dmarc.relevantmx.com
   Tipo: TXT
   Valor: v=DMARC1; p=none; rua=mailto:dmarc@relevantmx.com
   TTL: 3600
```

### 4. Configurar DNS en tu Proveedor

Dependiendo de dónde esté alojado tu dominio:

#### GoDaddy

1. Ve a tu panel de GoDaddy
2. Domains → My Domains → DNS Management
3. Agrega los registros proporcionados por Resend

#### Cloudflare

1. Ve a tu panel de Cloudflare
2. Selecciona tu dominio
3. DNS → Records
4. Agrega cada registro (⚠️ Desactiva el proxy naranja para DKIM)

#### Namecheap

1. Ve a Domain List
2. Manage → Advanced DNS
3. Agrega los registros

#### Google Domains / otros

1. Busca la sección de DNS/Nameservers
2. Agrega los registros TXT y CNAME proporcionados

### 5. Verificar la Configuración

1. Después de agregar los registros DNS, espera entre **15 minutos y 72 horas**
   - Típicamente: 1-2 horas
   - Máximo: 72 horas
2. Regresa al panel de Resend
3. Haz clic en **"Verify"** junto a tu dominio
4. Si todo está correcto, verás un ✅ verde

### 6. Actualizar el Código

Una vez verificado tu dominio, actualiza el archivo `src/app/api/contact/route.ts`:

```typescript
// Cambiar el remitente a tu dominio verificado
from: "Contacto <contacto@relevantmx.com>", // O el que prefieras

// Descomentar los correos institucionales
const RECIPIENTS = [
  "salvador@trustpeople.company",
  "digital@trustpeople.company",
  "gerencia@relevantmx.com",
  "manuel@topsales.expert",
];
```

---

## 🔍 Verificar que los Registros DNS estén Correctos

Puedes usar estas herramientas en línea:

1. **MXToolbox**: https://mxtoolbox.com/SuperTool.aspx

   - Verifica SPF, DKIM, y DMARC

2. **DNS Checker**: https://dnschecker.org/

   - Verifica propagación global de DNS

3. **Comando de terminal**:

   ```bash
   # Verificar SPF
   dig TXT relevantmx.com

   # Verificar DKIM
   dig CNAME resend._domainkey.relevantmx.com
   ```

---

## ⚠️ Problemas Comunes

### El dominio no se verifica

- **Espera más tiempo**: La propagación DNS puede tardar hasta 72 horas
- **Revisa los valores**: Copia/pega exactamente como Resend lo proporciona
- **Sin espacios**: Asegúrate de no tener espacios al inicio o final
- **Cloudflare**: Desactiva el proxy (nube naranja) para registros DKIM

### Los emails van a spam

- **Verifica DMARC**: Agrega el registro DMARC
- **Warming up**: Los primeros emails pueden ir a spam, es normal
- **Contenido**: Evita palabras spam como "gratis", "urgente", etc.

### Error de "from" address

- El email del remitente debe usar tu dominio verificado
- ✅ Correcto: `contacto@relevantmx.com`
- ❌ Incorrecto: `onboarding@resend.dev` (solo pruebas)

---

## 📊 Ventajas de Verificar tu Dominio

✅ **Enviar a cualquier dirección** (no solo la tuya)
✅ **Mayor deliverability** (menos probabilidad de spam)
✅ **Marca profesional** (emails desde @relevantmx.com)
✅ **Múltiples destinatarios** (como los 4 correos institucionales)
✅ **Mayor límite de envíos** (3,000 emails/mes plan gratuito)

---

## 🎯 Dominios Recomendados para Email

Basándome en tus correos institucionales, parece que tienes:

1. `relevantmx.com` ← **Recomendado para verificar**
2. Posiblemente: `trustpeople.company`
3. Posiblemente: `topsales.expert`

**Recomendación**: Verifica `relevantmx.com` ya que es tu dominio principal y usarás emails como `contacto@relevantmx.com` o `info@relevantmx.com`

---

## 🔐 Seguridad: Qué hacen estos registros DNS

- **SPF**: Autoriza a Resend a enviar emails desde tu dominio
- **DKIM**: Firma digital que garantiza que el email no fue alterado
- **DMARC**: Política de cómo manejar emails que fallan SPF/DKIM

Estos registros **mejoran la entrega** y **previenen suplantación** de identidad.

---

## 📞 ¿Necesitas Ayuda?

- **Documentación de Resend**: https://resend.com/docs/dashboard/domains/introduction
- **Soporte de Resend**: support@resend.com
- **Video tutorial**: Busca "Resend verify domain" en YouTube

---

## ⏱️ Resumen Rápido

1. ✅ Agregar dominio en Resend (2 minutos)
2. ⏳ Copiar registros DNS (1 minuto)
3. ⚙️ Configurar DNS en tu proveedor (5 minutos)
4. ⏱️ Esperar propagación (1-72 horas)
5. ✅ Verificar en Resend (1 minuto)
6. 💻 Actualizar código (2 minutos)

**Total**: ~10 minutos + tiempo de espera de DNS
