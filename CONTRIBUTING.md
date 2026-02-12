# Guía de Contribución

¡Gracias por tu interés en contribuir al Leadership Assessment Tool!

## Cómo contribuir

### 1. Fork del repositorio
- Click en "Fork" arriba a la derecha en GitHub
- Clona tu fork localmente:
```bash
git clone https://github.com/tu-usuario/leadership-assessment.git
cd leadership-assessment
2. Crear rama para tu feature
bash
git checkout -b feature/nueva-funcionalidad
3. Hacer cambios y commit
bash
git add .
git commit -m "feat: agregar nueva funcionalidad X"
Formato de commits (Conventional Commits):

feat: nueva funcionalidad

fix: corrección de bug

docs: cambios en documentación

style: cambios de formato (no afectan lógica)

refactor: refactorización de código

test: agregar o modificar tests

4. Push y Pull Request
bash
git push origin feature/nueva-funcionalidad
Luego ve a GitHub y crea un Pull Request.

Áreas donde puedes contribuir
🐛 Reportar bugs
Usa la sección "Issues" en GitHub

Describe el problema, pasos para reproducirlo, comportamiento esperado

📝 Mejorar documentación
Corregir typos

Agregar ejemplos

Traducir a otros idiomas

💡 Proponer features
Abre un "Issue" con tu propuesta

Describe el problema que resuelve

Incluye mockups si es relevante

🧪 Agregar tests
Unit tests para scoring logic

Tests de integración para flujo completo

🌍 Traducción
Traducir preguntas a otros idiomas

Adaptar interpretaciones culturalmente

Estándares de código
JavaScript: ES6+, usar const/let (no var)

HTML: Semántico, accesible (atributos ARIA donde corresponda)

CSS: BEM methodology para naming

Comentarios: En español, explicar "por qué" no "qué"

Proceso de revisión
Tu PR será revisado por los maintainers

Pueden solicitar cambios

Una vez aprobado, será mergeado a main

¡Tu nombre aparecerá en los contributors! 🎉

Código de conducta
Ser respetuoso y constructivo

Enfocarse en el código, no en la persona

Aceptar feedback con apertura

¿Preguntas? Abre un Issue o contacta a [tu-email]

text

---

## Paso 3: Subir Todos los Archivos a GitHub

### 3.1. Inicializar Git (si aún no lo hiciste)

```bash
cd leadership-assessment
git init
git branch -M main
3.2. Conectar con tu repositorio remoto
bash
git remote add origin https://github.com/tu-usuario/leadership-assessment.git
Reemplaza tu-usuario con tu username real de GitHub.

3.3. Agregar todos los archivos
bash
git add .
Esto agrega TODOS los archivos excepto los que están en .gitignore.

3.4. Hacer commit
bash
git commit -m "feat: initial commit - leadership assessment tool completo"
3.5. Subir a GitHub
bash
git push -u origin main
Si es la primera vez, Git te pedirá autenticación:

Usuario: tu-usuario

Password: Usa un Personal Access Token (no tu password de GitHub)

Cómo generar token:

Ve a GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)

Click en "Generate new token"

Selecciona scopes: repo (todos los permisos de repositorio)

Click en "Generate token"

Copia el token (no podrás verlo de nuevo)

Úsalo como password cuando Git te lo pida

3.6. Verificar en GitHub
Ve a https://github.com/tu-usuario/leadership-assessment

Deberías ver todos los archivos y carpetas

El README.md se muestra automáticamente en la página principal

Paso 4: Configurar GitHub Pages (Opcional)
Si quieres que GitHub aloje tu sitio gratis:

En tu repo, ve a Settings → Pages

En Source, selecciona:

Branch: main

Folder: /public (donde está tu index.html)

Click en Save

Espera 2-3 minutos

Tu sitio estará en: https://tu-usuario.github.io/leadership-assessment/

Paso 5: Actualizar README con tu información
Edita README.md y personaliza:

text
## Contacto

**[Tu Nombre]**  
Consultor en Desarrollo de Liderazgo  
📧 Email: tu-email@consultora.com  
🌐 Web: https://tu-sitio.com  
💼 LinkedIn: https://linkedin.com/in/tu-perfil  
Luego:

bash
git add README.md
git commit -m "docs: actualizar información de contacto"
git push origin main
Workflow de Actualizaciones Futuras
Cada vez que quieras hacer cambios:

bash
# 1. Hacer cambios en archivos locales
code public/index.html  # editar con VS Code

# 2. Ver qué cambió
git status

# 3. Agregar cambios
git add .

# 4. Commit con mensaje descriptivo
git commit -m "fix: corregir typo en página de bienvenida"

# 5. Subir a GitHub
git push origin main

# ✅ Cambios ahora están en GitHub
# Si tienes deploy automático (Vercel), también estarán en producción en 30 seg
Troubleshooting
Error: "Permission denied (publickey)"
Causa: Git no puede autenticar con GitHub
Solución: Usa HTTPS en lugar de SSH:

bash
git remote set-url origin https://github.com/tu-usuario/leadership-assessment.git
Error: "failed to push some refs"
Causa: Hay cambios en GitHub que no tienes localmente
Solución:

bash
git pull origin main --rebase
git push origin main
Error: "Large files detected"
Causa: Archivo >100MB
Solución: Agrega el archivo a .gitignore:

bash
echo "nombre-del-archivo-grande.zip" >> .gitignore
git rm --cached nombre-del-archivo-grande.zip
git commit -m "fix: remover archivo grande"
git push origin main
Checklist Final
Antes de considerar que tu repo está "production-ready":

 Todos los archivos subidos a GitHub

 README.md completo con instrucciones claras

 .gitignore configurado (no subir datos sensibles)

 LICENSE presente (MIT)

 CONTRIBUTING.md explica cómo colaborar

 Código comentado y limpio

 No hay credenciales hardcodeadas (API keys, passwords)

 Links en README funcionan

 Capturas de pantalla agregadas (opcional pero recomendado)

Agregar Capturas de Pantalla (Opcional pero Impacta)
Para hacer tu README más visual:

1. Tomar screenshots de tu app:

Pantalla de bienvenida

Formulario de preguntas

Página de resultados

2. Crear carpeta screenshots/:

bash
mkdir screenshots
3. Subir imágenes:

bash
git add screenshots/
git commit -m "docs: agregar screenshots del assessment"
git push origin main
4. Referenciar en README:

text
## Screenshots

### Pantalla de Inicio


### Cuestionario


### Reporte de Resultados

Próximos Pasos
Ahora que tu código está en GitHub:

✅ Deploy a producción → Sigue DEPLOYMENT.md (Opción 1: Vercel)

✅ Compartir → Publica el link en LinkedIn, redes

✅ Iterar → Recopila feedback de los primeros usuarios

✅ Medir → Configura Google Analytics para ver tráfico

✅ Escalar → Considera implementar formato 360° (ver docs/360-extension.md)

¡Felicitaciones! Tu proyecto está ahora en GitHub y listo para deployment. 🚀

Versión: 1.0.0
Última actualización: Febrero 2026

text

***

## ¿Qué acabamos de crear?

Tienes ahora **13 archivos completos** listos para subir a GitHub:

### ✅ Archivos Creados

1. **README.md** - Documentación principal
2. **setup-guide.md** - Guía inicial de configuración
3. **assessment-questions.json** - 25 preguntas con scoring
4. **scoring-logic.md** - Lógica de puntuación
5. **typeform-config.md** - Guía para Typeform
6. **index.html** - Página principal (pendiente - te lo genero ahora)
7. **.gitignore** - Archivos a ignorar
8. **LICENSE** - Licencia MIT
9. **research-foundation.md** - Fundamento científico
10. **validation-protocol.md** - Protocolo de validación
11. **360-extension.md** - Guía formato 360°
12. **sample-report.md** - Ejemplo de reporte
13. **DEPLOYMENT.md** - Guía de deployment
14. **GITHUB-UPLOAD-INSTRUCTIONS.md** - Instrucciones de GitHub
15. **CONTRIBUTING.md** - Guía para colaboradores
16. **results.html** - Página de resultados

***

## Próximo paso CRÍTICO

Te falta solo **1 archivo más** para tener el proyecto 100% funcional:

📄 **`public/index.html`** - La página web principal

¿Quieres que te lo genere ahora? Es el frontend completo del assessment (HTML + inline CSS + JavaScript integrado).

Dime **"sí"** y te lo creo. Será profesional, responsive, con tu marca, listo para producción. 🎯
