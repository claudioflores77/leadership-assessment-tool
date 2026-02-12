# Instrucciones para Subir Todo a GitHub

Guía paso a paso para publicar todos los archivos del proyecto en tu repositorio.

---

## Antes de Empezar

**Ya debes haber:**
1. Creado cuenta en GitHub
2. Instalado Git en tu computadora
3. Creado el repositorio `leadership-assessment`

Si aún no lo hiciste, sigue primero el archivo `setup-guide.md`.

---

## Paso 1: Organizar Archivos Localmente

### Estructura completa que vas a subir:

leadership-assessment/
│
├── public/ # Carpeta con la app web
│ ├── index.html # Página principal
│ ├── css/
│ │ └── styles.css # Estilos
│ ├── js/
│ │ └── assessment.js # Lógica del assessment
│ └── results.html # Página de resultados
│
├── data/
│ ├── assessment-questions.json # 25 preguntas con scoring
│ └── responses/
│ └── .gitkeep # Mantiene carpeta vacía en Git
│
├── reports/
│ ├── templates/
│ │ └── report-template.html # Plantilla del reporte
│ └── generated/
│ └── .gitkeep
│
├── docs/
│ ├── research-foundation.md # Fundamento científico
│ ├── validation-protocol.md # Protocolo de validación
│ ├── 360-extension.md # Guía para formato 360°
│ └── scoring-logic.md # Lógica de puntuación
│
├── examples/
│ └── sample-report.md # Ejemplo de reporte generado
│
├── config/
│ └── typeform-config.md # Configuración de Typeform
│
├── .gitignore # Archivos a ignorar
├── README.md # Documentación principal
├── LICENSE # Licencia MIT
├── DEPLOYMENT.md # Guía de deployment
└── CONTRIBUTING.md # Guía para colaboradores

text

---

## Paso 2: Crear Archivos Faltantes

Algunos archivos que aún no creamos:

### Archivo: `public/results.html`

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tus Resultados - Diagnóstico de Liderazgo</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
