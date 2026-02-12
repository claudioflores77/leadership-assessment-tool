# 🚀 INSTRUCCIONES DE INSTALACIÓN - App Web Leadership Assessment

## ✅ Archivos Creados

Acabamos de crear **4 archivos** que componen tu aplicación web completa:

```
1. index.html       (Página principal con el formulario)
2. styles.css       (Todos los estilos)
3. assessment.js    (Toda la lógica de la aplicación)
4. results.html     (Página de resultados)
```

## 📁 Estructura de Carpetas Requerida

Crea esta estructura EXACTA en tu computadora:

```
leadership-assessment/
├── public/
│   ├── index.html          ← Archivo que te di
│   ├── results.html        ← Archivo que te di
│   ├── css/
│   │   └── styles.css      ← Archivo que te di
│   └── js/
│       └── assessment.js   ← Archivo que te di
```

## 🔧 Paso a Paso de Instalación

### Paso 1: Crear las carpetas

```bash
# En tu terminal (cmd en Windows, terminal en Mac/Linux)
mkdir -p leadership-assessment/public/css
mkdir -p leadership-assessment/public/js
cd leadership-assessment/public
```

### Paso 2: Copiar los archivos

1. **index.html** → Copiar a `public/index.html`
2. **results.html** → Copiar a `public/results.html`
3. **styles.css** → Copiar a `public/css/styles.css`
4. **assessment.js** → Copiar a `public/js/assessment.js`

### Paso 3: Probar localmente (OPCIÓN A - Más simple)

**Método 1: Doble click**
- Simplemente haz doble click en `index.html`
- Se abrirá en tu navegador
- ✅ Ya funciona

**Método 2: Servidor local con Python** (recomendado)
```bash
# Navega a la carpeta public
cd public

# Python 3 (la mayoría de las computadoras lo tienen)
python3 -m http.server 8000

# O si tienes Python 2
python -m SimpleHTTPServer 8000
```

Luego abre tu navegador en: `http://localhost:8000`

**Método 3: Servidor con Node.js**
```bash
# Instalar http-server (solo la primera vez)
npm install -g http-server

# Ejecutar servidor
cd public
http-server
```

Abre tu navegador en: `http://localhost:8080`

### Paso 4: Publicar en Internet (OPCIÓN B - Deploy)

**Opción Recomendada: Vercel (Gratis)**

1. Crea cuenta en https://vercel.com
2. Instala Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Desde la carpeta `public`:
   ```bash
   vercel
   ```
4. Sigue las instrucciones en pantalla
5. ✅ Tu app estará en: `https://tu-proyecto.vercel.app`

**Opción 2: GitHub Pages (Gratis)**

1. Sube el código a GitHub (sigue las instrucciones de GITHUB-UPLOAD-INSTRUCTIONS.md)
2. Ve a Settings → Pages
3. Selecciona branch: main, folder: /public
4. ✅ Tu app estará en: `https://tu-usuario.github.io/leadership-assessment/`

**Opción 3: Netlify (Gratis)**

1. Crea cuenta en https://netlify.com
2. Arrastra la carpeta `public` a Netlify
3. ✅ Tu app estará en: `https://random-name.netlify.app`

## 🧪 Cómo Probar la App

### Test 1: Pantalla de Bienvenida
1. Abre `index.html`
2. Deberías ver:
   - Título "¿Qué tan efectivo es tu liderazgo?"
   - 4 beneficios listados
   - Botón "Comenzar Diagnóstico"

### Test 2: Formulario de Perfil
1. Click en "Comenzar Diagnóstico"
2. Llena:
   - Email (obligatorio)
   - País (obligatorio)
   - Nivel de responsabilidad (obligatorio)
   - Tamaño del equipo (obligatorio)
3. Click "Continuar"

### Test 3: Preguntas
1. Deberías ver las instrucciones
2. Click "Comenzar Evaluación"
3. Responde las 25 preguntas (la barra de progreso avanza)
4. Los botones "Anterior" y "Siguiente" funcionan

### Test 4: Resultados
1. Después de la pregunta 25, se muestra "Analizando..."
2. Luego se redirige a `results.html`
3. Deberías ver:
   - Tu puntaje global (número grande)
   - 5 dimensiones con sus puntajes
   - Tus 2 fortalezas
   - Tus 3 oportunidades

### Test 5: Descargar PDF
1. En la página de resultados, click "Descargar PDF"
2. Se abre el diálogo de impresión
3. Selecciona "Guardar como PDF"
4. ✅ Tienes tu reporte

## 🐛 Solución de Problemas

### Problema 1: Los estilos no se ven
**Causa:** Rutas incorrectas a los archivos CSS
**Solución:**
- Verifica que `styles.css` esté en `public/css/styles.css`
- Abre la consola del navegador (F12) y busca errores

### Problema 2: Las preguntas no aparecen
**Causa:** JavaScript no se cargó
**Solución:**
- Verifica que `assessment.js` esté en `public/js/assessment.js`
- Abre la consola (F12) y busca errores
- Deberías ver: "Leadership Assessment cargado correctamente"

### Problema 3: La página de resultados está vacía
**Causa:** No completaste el assessment
**Solución:**
- Debes completar TODO el assessment primero
- Los datos se guardan en localStorage
- Si borras las cookies/cache, se pierden

### Problema 4: "Archivos bloqueados" en navegador
**Causa:** Restricciones de seguridad CORS
**Solución:**
- NO uses file:// (doble click)
- USA un servidor local (python, http-server, etc.)

## 🎨 Personalización

### Cambiar colores:
Edita `public/css/styles.css`, líneas 6-15 (variables CSS):
```css
:root {
    --primary-color: #2563eb;   /* Cambia este color */
    --secondary-color: #10b981; /* Y este */
}
```

### Cambiar textos:
Edita `public/index.html`, busca los textos que quieres cambiar

### Agregar logo:
En `public/index.html`, antes del `<h1>` en welcome-content:
```html
<img src="images/logo.png" alt="Logo" style="max-width: 200px;">
```

## 📊 Próximos Pasos (Opcional)

### Para Producción Real:

1. **Backend para guardar respuestas**
   - Usa Google Sheets + Apps Script (gratis)
   - O Firebase (gratis hasta cierto límite)
   - O un backend propio (Node.js + MongoDB)

2. **Envío automático de emails**
   - Integra con EmailJS (gratis)
   - O SendGrid (gratis hasta 100 emails/día)
   - O Mailgun

3. **Generación de PDF profesional**
   - Usa jsPDF (JavaScript)
   - O PDFKit
   - O un servicio como DocRaptor

4. **Google Analytics**
   Agrega en `<head>` de ambos HTML:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

## ✅ Checklist Final

Antes de compartir tu app públicamente:

- [ ] Probaste en Chrome
- [ ] Probaste en mobile (responsive)
- [ ] Completaste el assessment de principio a fin
- [ ] Los resultados se muestran correctamente
- [ ] El PDF se puede descargar
- [ ] Personalizaste textos con tu información
- [ ] Agregaste tu logo (opcional)
- [ ] Configuraste Google Analytics (opcional)
- [ ] Publicaste en Vercel/Netlify/GitHub Pages

## 🆘 Ayuda

Si tienes problemas:

1. **Abre la consola del navegador** (F12 en Chrome)
   - Busca mensajes de error en rojo
   - Copia y pega el error completo

2. **Verifica las rutas de archivos**
   - Todos los archivos deben estar en las carpetas correctas

3. **Usa un servidor local**
   - NO uses file:// (doble click directo)
   - Usa Python o http-server

4. **Contacto:**
   - Email: contactofba@gmail.com
   - Incluye: capturas de pantalla, errores de consola

---

**Versión:** 1.0.0  
**Fecha:** Febrero 2026  
**Autor:** Claude + Claudio Flores
