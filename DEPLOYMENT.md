# Guía de Deployment - Leadership Assessment Tool

Esta guía te explica cómo publicar tu aplicación web en producción para que esté accesible públicamente.

---

## Opción 1: Vercel (Recomendada - Gratis)

Vercel es la opción más simple para proyectos HTML estáticos. Deploy en 5 minutos.

### Prerrequisitos
- Cuenta en GitHub (ya la tienes)
- Cuenta en Vercel (crear en https://vercel.com - gratis)

### Pasos

**1. Subir código a GitHub**
```bash
# Ya lo hiciste siguiendo setup-guide.md
# Tu repo está en: https://github.com/tu-usuario/leadership-assessment
2. Conectar Vercel con GitHub

Ve a https://vercel.com/login

Click en "Continue with GitHub"

Autoriza a Vercel acceso a tus repos

3. Importar proyecto

Click en "Add New Project"

Busca tu repo leadership-assessment

Click en "Import"

4. Configurar proyecto

Framework Preset: Selecciona "Other" (es HTML estático)

Root Directory: Deja vacío (usa raíz del repo)

Build Command: Deja vacío (no hay build, es HTML puro)

Output Directory: public (donde está tu index.html)

Click en "Deploy"

5. ¡Listo!
En 30-60 segundos tu sitio estará live en:
https://leadership-assessment.vercel.app
(Vercel asigna automáticamente un dominio)

Dominio personalizado (Opcional)
Si tienes tu propio dominio (ej: diagnostico.tuconsultora.com):

En dashboard de Vercel, click en tu proyecto

Ve a Settings → Domains

Click en "Add"

Ingresa tu dominio: diagnostico.tuconsultora.com

Vercel te dará instrucciones DNS para configurar en tu proveedor de dominio

En tu proveedor (ej: GoDaddy, Namecheap), agrega registro CNAME:

text
Type: CNAME
Name: diagnostico
Value: cname.vercel-dns.com
Espera propagación DNS (5-30 minutos)

✅ Tu sitio estará en https://diagnostico.tuconsultora.com

Opción 2: GitHub Pages (Gratis, sin dominio custom fácil)
GitHub Pages sirve sitios estáticos directamente desde tu repo.

Pasos
1. Preparar estructura

Mueve index.html a la raíz del repo (ya debería estar ahí):

text
leadership-assessment/
├── index.html          ← Debe estar aquí
├── css/
│   └── styles.css
├── js/
│   └── assessment.js
└── ...
2. Activar GitHub Pages

Ve a tu repo en GitHub

Click en Settings

En sidebar izquierdo, click en Pages

En Source, selecciona:

Branch: main

Folder: /root (o /docs si tu index.html está ahí)

Click en Save

3. Esperar deployment

GitHub Pages tarda 2-5 minutos en publicar

Verás mensaje: "Your site is published at https://tu-usuario.github.io/leadership-assessment/"

4. Acceder
Tu sitio estará en:

text
https://tu-usuario.github.io/leadership-assessment/
Limitación: No puedes usar dominio custom gratis (solo con GitHub Pro).

Opción 3: Netlify (Similar a Vercel)
Netlify es otra alternativa gratuita muy popular.

Pasos
1. Crear cuenta

Ve a https://netlify.com

Sign up con GitHub

2. Nuevo sitio desde Git

Click en "Add new site" → "Import an existing project"

Selecciona GitHub

Busca tu repo leadership-assessment

3. Configurar

Build command: Deja vacío

Publish directory: public

Click en "Deploy"

4. Listo
Tu sitio estará en:

text
https://random-name-12345.netlify.app
Puedes cambiar el nombre en Site settings → Change site name.

Dominio custom: Similar a Vercel, Netlify te da instrucciones DNS.

Opción 4: Firebase Hosting (Google, Gratis)
Firebase Hosting es ideal si ya usas otros servicios de Firebase (Firestore, Auth, etc.).

Prerrequisitos
Node.js instalado

Firebase CLI instalado: npm install -g firebase-tools

Pasos
1. Iniciar sesión en Firebase

bash
firebase login
2. Inicializar proyecto

bash
cd leadership-assessment
firebase init hosting
Responde:

"Use an existing project" → Selecciona tu proyecto Firebase (o crea uno nuevo en console.firebase.google.com)

"What do you want to use as your public directory?" → public

"Configure as a single-page app?" → No

"Set up automatic builds?" → No

3. Deploy

bash
firebase deploy --only hosting
4. Listo
Tu sitio estará en:

text
https://tu-proyecto-id.web.app
Dominio custom: En Firebase Console → Hosting → Add custom domain.

Comparación de Opciones
Aspecto	Vercel	GitHub Pages	Netlify	Firebase
Facilidad	⭐⭐⭐⭐⭐	⭐⭐⭐⭐	⭐⭐⭐⭐⭐	⭐⭐⭐
Velocidad deploy	30 seg	2-5 min	1 min	1 min
Dominio custom gratis	✅	❌ (solo Pro)	✅	✅
SSL automático	✅	✅	✅	✅
Analytics	✅	❌	✅	✅
Límites free tier	Generosos	Generosos	Generosos	Generosos
Mejor para	Proyectos simples	Demos, open source	Proyectos medianos	Ecosistema Google
Mi recomendación: Vercel para este proyecto. Es la más simple y rápida.

Configuración Post-Deployment
1. Configurar variables de entorno (si usas backend)
Si tu app necesita conectarse a APIs o servicios externos:

Vercel:

Dashboard → Settings → Environment Variables

Agrega variables como API_KEY, DATABASE_URL, etc.

Netlify:

Site settings → Build & deploy → Environment variables

Firebase:
Usa firebase functions:config:set (para Functions) o variables de entorno en tu código.

2. Configurar dominio y SSL
Todos los proveedores mencionados incluyen SSL automático (HTTPS).

Si usas dominio custom:

Proveedor te dará valores DNS (CNAME o A records)

Configurar en tu registrador de dominios (GoDaddy, Namecheap, etc.)

Esperar propagación (5 minutos a 48 horas)

SSL se activa automáticamente

3. Configurar Analytics (Opcional)
Para trackear visitas y conversiones:

Google Analytics 4:

xml
<!-- Agregar en <head> de index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
Vercel Analytics:

Activar en Dashboard → Analytics → Enable

Trackea pageviews, tiempo en sitio, etc. automáticamente

4. Configurar formulario submission
Tu assessment envía datos a Google Sheets (via Apps Script) o a tu backend.

Verificar en producción:

Completa el formulario en tu sitio en vivo

Verifica que los datos lleguen a tu Google Sheet

Si falla:

Revisa CORS en tu Apps Script

Verifica que la URL del endpoint sea la de producción (no localhost)

Script de Apps Script debe permitir CORS:

javascript
function doPost(e) {
  // Headers para permitir requests desde tu dominio
  const output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent(JSON.stringify({status: 'success'}));
  
  // Esto es crítico para que funcione desde tu dominio
  return output;
}
Automatización de Deployments
Continuous Deployment (CD)
Con Vercel/Netlify/Firebase, cada vez que pushes a GitHub, se deployea automáticamente:

bash
# Hacer cambios en código local
code index.html

# Commit y push
git add .
git commit -m "Actualizar copy de bienvenida"
git push origin main

# ✅ En 30-60 segundos, cambios están LIVE automáticamente
Preview deployments:

Cada pull request genera un preview único

Puedes testear cambios antes de mergear a main

Monitoreo y Mantenimiento
1. Uptime monitoring
Herramientas gratuitas:

UptimeRobot (https://uptimerobot.com) - monitorea cada 5 minutos, alerta si el sitio cae

Pingdom (free tier)

Setup:

Crear cuenta en UptimeRobot

Agregar monitor: URL de tu sitio

Configurar alertas por email/SMS si hay downtime

2. Performance monitoring
Google PageSpeed Insights:

Ve a https://pagespeed.web.dev/

Ingresa tu URL

Revisa score (objetivo: >90)

Implementa recomendaciones

Vercel Analytics (si usas Vercel):

Dashboard → Analytics

Métricas de Web Vitals (LCP, FID, CLS)

3. Error tracking (Si tienes JavaScript complejo)
Sentry (free tier: 5,000 errores/mes):

xml
<!-- Agregar en <head> -->
<script src="https://browser.sentry-cdn.com/7.x.x/bundle.min.js"></script>
<script>
  Sentry.init({
    dsn: 'TU_SENTRY_DSN',
    environment: 'production'
  });
</script>
Troubleshooting Común
Problema 1: Sitio no carga después de deploy
Causa: Ruta incorrecta a archivos CSS/JS
Solución: Verificar que rutas sean relativas:

xml
<!-- ✅ Correcto -->
<link rel="stylesheet" href="css/styles.css">

<!-- ❌ Incorrecto -->
<link rel="stylesheet" href="/css/styles.css">  <!-- falla en subdirectorios -->
Problema 2: Formulario no envía datos
Causa: CORS bloqueado en backend
Solución: Configurar headers CORS en tu Apps Script o backend:

javascript
// Apps Script
function doPost(e) {
  return ContentService
    .createTextOutput(JSON.stringify({status: 'ok'}))
    .setMimeType(ContentService.MimeType.JSON);
}
Problema 3: Cambios no se reflejan después de push
Causa: Cache del browser
Solución:

Hard refresh: Ctrl + Shift + R (Windows) o Cmd + Shift + R (Mac)

O versionar tus assets:

xml
<link rel="stylesheet" href="css/styles.css?v=2">
<script src="js/assessment.js?v=2"></script>
Problema 4: Dominio custom no resuelve
Causa: Propagación DNS incompleta
Solución:

Verificar configuración DNS en tu registrador

Usar herramienta: https://dnschecker.org/

Esperar hasta 48 horas (típicamente <2 horas)

Checklist Pre-Launch
Antes de compartir tu sitio públicamente:

 Testear en Chrome, Firefox, Safari

 Testear en mobile (responsive design)

 Verificar que formulario envía datos correctamente

 Revisar textos (sin typos, links funcionan)

 SSL activo (candado verde en browser)

 Analytics configurado

 Dominio custom configurado (si aplica)

 Tiempo de carga <3 segundos (testear con PageSpeed)

 Agregar favicon (ícono en tab del browser)

 Meta tags para SEO y social sharing:

xml
<head>
  <title>Diagnóstico Gratuito de Liderazgo | Tu Consultora</title>
  <meta name="description" content="Descubre en 10 minutos tus fortalezas como líder y áreas de mejora. Assessment científicamente validado.">
  
  <!-- Open Graph (para compartir en redes) -->
  <meta property="og:title" content="Diagnóstico de Liderazgo Gratuito">
  <meta property="og:description" content="Evalúa tu efectividad como líder en 5 dimensiones clave">
  <meta property="og:image" content="https://tu-dominio.com/og-image.jpg">
  <meta property="og:url" content="https://tu-dominio.com">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Diagnóstico de Liderazgo">
  <meta name="twitter:description" content="Assessment gratuito de efectividad en liderazgo">
  <meta name="twitter:image" content="https://tu-dominio.com/twitter-card.jpg">
</head>
Costos Estimados
Escenario 1: Solo sitio estático (HTML)

Hosting: $0/mes (Vercel/Netlify free tier)

Dominio custom: $12-15/año (opcional)

SSL: $0 (incluido)

Total: $0-15/año

Escenario 2: Con backend simple (Google Sheets)

Hosting: $0/mes

Google Apps Script: $0/mes

Google Sheets: $0/mes (hasta 10M celdas)

Total: $0-15/año

Escenario 3: Con backend robusto (Firebase/Supabase)

Hosting: $0/mes

Firebase Firestore: $0-25/mes (free tier generoso)

Firebase Functions: $0-10/mes

Total: $0-35/mes

Próximo paso: Sigue las instrucciones de la Opción 1 (Vercel) para deployar tu sitio ahora mismo. Tarda solo 5 minutos.

bash
# 1. Asegúrate de tener cambios en GitHub
git status
git push origin main

# 2. Ve a vercel.com e importa tu repo
# 3. Click en "Deploy"
# 4. ¡Listo! 🚀
Versión: 1.0.0
Última actualización: Febrero 2026
