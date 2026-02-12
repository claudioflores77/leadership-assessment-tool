# Guía de Configuración en Typeform

Esta guía te lleva paso a paso para montar el Leadership Assessment en Typeform sin necesidad de programar.

---

## Paso 1: Crear cuenta y nuevo formulario

1. Ve a [typeform.com](https://typeform.com) y crea cuenta (plan gratuito permite hasta 10 respuestas/mes)
2. Click en **"Create a new typeform"**
3. Selecciona **"Start from scratch"**
4. Nombra tu typeform: **"Diagnóstico de Efectividad en Liderazgo"**

---

## Paso 2: Configurar pantalla de bienvenida

1. Click en la primera pantalla (Welcome screen)
2. **Título:** "Diagnóstico Gratuito: ¿Qué tan efectivo es tu liderazgo?"
3. **Descripción:**
Descubre en 8 minutos tus fortalezas como líder y las áreas clave donde puedes mejorar para multiplicar el impacto de tu equipo.

Este diagnóstico evalúa las 5 competencias que más diferencian a los mandos medios y altos efectivos.

Al finalizar, recibirás:
✅ Tu perfil de liderazgo con puntaje por dimensión
✅ Interpretación personalizada de tus resultados
✅ 3 recomendaciones específicas de desarrollo

Tus respuestas son confidenciales. ⏱️ Tiempo estimado: 8-10 minutos
4. **Botón:** Cambiar texto a "Comenzar diagnóstico"
5. Sube una imagen de fondo profesional (opcional)

---

## Paso 3: Crear sección de perfil demográfico

### Pregunta 1: Nombre (opcional)
- **Tipo:** Short text
- **Pregunta:** "¿Cuál es tu nombre? (opcional)"
- **Settings:** 
- Desmarcar "Required"
- Placeholder: "Tu nombre"

### Pregunta 2: Email (obligatorio)
- **Tipo:** Email
- **Pregunta:** "¿Cuál es tu email?"
- **Description:** "Te enviaremos tus resultados a este correo"
- **Settings:** 
- Marcar "Required"
- Email validation: On

### Pregunta 3: País
- **Tipo:** Dropdown
- **Pregunta:** "¿En qué país trabajas actualmente?"
- **Opciones:**
Argentina
Bolivia
Chile
Colombia
Costa Rica
Cuba
Ecuador
El Salvador
España
Estados Unidos
Guatemala
Honduras
México
Nicaragua
Panamá
Paraguay
Perú
Puerto Rico
República Dominicana
Uruguay
Venezuela
Otro
- **Settings:** Required

### Pregunta 4: Nivel de responsabilidad
- **Tipo:** Multiple choice
- **Pregunta:** "¿Cuál es tu nivel de responsabilidad actual?"
- **Opciones:**
Gerente / Jefe de Área (gestiono un equipo)
Director / Gerente Senior (gestiono a otros gerentes)
C-Level / Alta Dirección (CEO, COO, CFO, etc.)
Dueño / Fundador de empresa
Otro
- **Settings:** Required

### Pregunta 5: Tamaño del equipo
- **Tipo:** Multiple choice
- **Pregunta:** "¿Cuántas personas reportan directa o indirectamente a ti?"
- **Opciones:**
1-5 personas
6-15 personas
16-50 personas
51-100 personas
Más de 100 personas
- **Settings:** Required

---

## Paso 4: Crear pantalla de instrucciones

- **Tipo:** Statement
- **Título:** "Evaluación de Competencias"
- **Descripción:**
A continuación, encontrarás 25 afirmaciones sobre comportamientos de liderazgo.

Para cada una, indica con qué FRECUENCIA describes este comportamiento en tu rol actual:

1 = Nunca o casi nunca
2 = Rara vez
3 = A veces
4 = Frecuentemente
5 = Siempre o casi siempre

💡 Consejo: Sé honesto/a. No hay respuestas correctas o incorrectas.
Esto es sobre autoconocimiento, no sobre una calificación.

- **Botón:** "Comenzar evaluación"

---

## Paso 5: Crear las 25 preguntas de evaluación

**Para CADA una de las 25 preguntas del `assessment-questions.json`:**

### Configuración estándar:
- **Tipo:** Opinion Scale
- **Scale type:** Numbers (1 to 5)
- **Labels:**
- Start label (1): "Nunca"
- Middle label (3): "A veces"
- End label (5): "Siempre"
- **Settings:** Required

### Organización por dimensiones:

**📊 DIMENSIÓN 1: Comunicación y Alineamiento Estratégico**

**Pregunta D1Q1:**
- **Question:** "Explico claramente el 'por qué' detrás de las decisiones y cambios importantes."

**Pregunta D1Q2:**
- **Question:** "Me aseguro de que mi equipo entienda cómo su trabajo contribuye a los objetivos estratégicos de la organización."

**Pregunta D1Q3:**
- **Question:** "Comunico expectativas de desempeño de manera específica y medible."

**Pregunta D1Q4:**
- **Question:** "Comparto información relevante con mi equipo de manera oportuna, incluso cuando las noticias no son positivas."

**Pregunta D1Q5:**
- **Question:** "Adapto mi estilo de comunicación según la audiencia (equipo, pares, superiores)."

---

**📊 DIMENSIÓN 2: Desarrollo de Talento y Coaching**

**Pregunta D2Q1:**
- **Question:** "Dedico tiempo regular (semanal o quincenal) a conversaciones 1-a-1 con los miembros de mi equipo."

**Pregunta D2Q2:**
- **Question:** "Identifico activamente oportunidades de crecimiento y desarrollo para cada persona de mi equipo."

**Pregunta D2Q3:**
- **Question:** "Delego tareas desafiantes que permiten a mi equipo desarrollar nuevas habilidades."

**Pregunta D2Q4:**
- **Question:** "Hago preguntas que ayudan a mi equipo a encontrar soluciones en lugar de simplemente dar respuestas."

**Pregunta D2Q5:**
- **Question:** "Celebro los logros y el progreso de las personas de mi equipo de manera específica y auténtica."

---

**📊 DIMENSIÓN 3: Gestión de Conflictos y Feedback**

**Pregunta D3Q1:**
- **Question:** "Abordo los conflictos y desacuerdos de manera directa en lugar de evitarlos."

**Pregunta D3Q2:**
- **Question:** "Doy feedback correctivo de manera específica, oportuna y constructiva."

**Pregunta D3Q3:**
- **Question:** "Mantengo la calma y la objetividad en situaciones de alta tensión o presión."

**Pregunta D3Q4:**
- **Question:** "Escucho diferentes puntos de vista antes de tomar decisiones que afectan al equipo."

**Pregunta D3Q5:**
- **Question:** "Admito mis errores y los uso como oportunidades de aprendizaje para el equipo."

---

**📊 DIMENSIÓN 4: Delegación y Empoderamiento**

**Pregunta D4Q1:**
- **Question:** "Delego decisiones y responsabilidades en lugar de controlar todos los detalles."

**Pregunta D4Q2:**
- **Question:** "Confío en mi equipo para resolver problemas sin necesidad de mi intervención constante."

**Pregunta D4Q3:**
- **Question:** "Defiendo a mi equipo y les doy autonomía para experimentar y aprender de los errores."

**Pregunta D4Q4:**
- **Question:** "Establezco límites claros de autoridad para que mi equipo sepa cuándo puede decidir y cuándo debe consultarme."

**Pregunta D4Q5:**
- **Question:** "Me enfoco en los resultados que espero en lugar de controlar cómo se logran."

---

**📊 DIMENSIÓN 5: Visión Estratégica y Gestión del Cambio**

**Pregunta D5Q1:**
- **Question:** "Mantengo una visión clara de hacia dónde debe ir mi área/equipo en los próximos 6-12 meses."

**Pregunta D5Q2:**
- **Question:** "Anticipo obstáculos y oportunidades que pueden afectar a mi área antes de que se conviertan en crisis."

**Pregunta D5Q3:**
- **Question:** "Priorizo iniciativas y proyectos según su impacto estratégico, no solo según su urgencia."

**Pregunta D5Q4:**
- **Question:** "Comunico los cambios organizacionales de manera que mi equipo entienda el contexto y la necesidad."

**Pregunta D5Q5:**
- **Question:** "Ayudo a mi equipo a adaptarse al cambio gestionando sus preocupaciones y resistencias de manera empática."

---

## Paso 6: Configurar lógica de cálculo (Calculator)

**⚠️ NOTA:** Esta funcionalidad requiere plan PAID de Typeform (Plus o superior). Si usas plan gratuito, salta al Paso 7 alternativo.

### En plan PAID:

1. Ve a **Logic** → **Calculator**
2. Crea las siguientes variables:

D1_score = (D1Q1 + D1Q2 + D1Q3 + D1Q4 + D1Q5) / 5
D2_score = (D2Q1 + D2Q2 + D2Q3 + D2Q4 + D2Q5) / 5
D3_score = (D3Q1 + D3Q2 + D3Q3 + D3Q4 + D3Q5) / 5
D4_score = (D4Q1 + D4Q2 + D4Q3 + D4Q4 + D4Q5) / 5
D5_score = (D5Q1 + D5Q2 + D5Q3 + D5Q4 + D5Q5) / 5
Global_score = (D1_score + D2_score + D3_score + D4_score + D5_score) / 5

3. Crea variables de interpretación usando **Logic → Conditional**:

IF D1_score >= 4.5 THEN D1_level = "Excepcional"
ELSE IF D1_score >= 3.8 THEN D1_level = "Efectivo"
ELSE IF D1_score >= 3.0 THEN D1_level = "En desarrollo"
ELSE IF D1_score >= 2.0 THEN D1_level = "Oportunidad crítica"
ELSE D1_level = "Riesgo alto"

Repetir para D2, D3, D4, D5.

---

## Paso 7: Configurar pantalla de resultados

### Pantalla de resultados dinámica:

**Título dinámico basado en Global_score:**

Si Global_score >= 4.5:
"¡Felicitaciones! Tu liderazgo está en nivel excepcional"

Si Global_score >= 3.8:
"Tu liderazgo es efectivo. Aquí están tus áreas de mejora"

Si Global_score >= 3.0:
"Tu liderazgo está en desarrollo. Identifica tus prioridades"

Si Global_score < 3.0:
"Has identificado áreas críticas. Es momento de actuar"

**Cuerpo de resultados:**

Tu Puntaje Global de Liderazgo: {{Global_score}} / 5.0

Tu nivel: {{Global_level}}

📊 TUS RESULTADOS POR COMPETENCIA:

Comunicación y Alineamiento: {{D1_score}} / 5.0 ({{D1_level}})

Desarrollo de Talento: {{D2_score}} / 5.0 ({{D2_level}})

Gestión de Conflictos: {{D3_score}} / 5.0 ({{D3_level}})

Delegación y Empoderamiento: {{D4_score}} / 5.0 ({{D4_level}})

Visión Estratégica: {{D5_score}} / 5.0 ({{D5_level}})

📧 RECIBIRÁS TU REPORTE COMPLETO POR EMAIL

En los próximos 5 minutos recibirás en {{email}} tu reporte en PDF con:
✅ Interpretación detallada de cada dimensión
✅ 3 recomendaciones específicas de desarrollo
✅ Plan de acción para los próximos 30 días

(Revisa spam si no lo ves en tu bandeja principal)

🎯 ¿QUIERES DAR EL SIGUIENTE PASO?

Los líderes más efectivos complementan su autoconocimiento con feedback 360°: descubren cómo los ve su jefe, pares y equipo.

Opciones disponibles:

📊 Diagnóstico 360° Completo
Evaluación confidencial + sesión de interpretación de 90 min + plan de desarrollo

🎯 Sesión Estratégica Gratuita (30 min)
Revisamos juntos tus resultados y diseñamos las 3 acciones de mayor impacto

👉 Envíame un mensaje mencionando "Diagnóstico de Liderazgo":
Email: [tu-email]
LinkedIn: [tu-perfil]
O agenda aquí: [link-calendly]


---

## Paso 7 ALTERNATIVO (Plan gratuito - sin Calculator)

Si usas plan gratuito de Typeform, NO podrás calcular scores en tiempo real. Alternativa:

### Pantalla de cierre simple:

¡Gracias por completar el diagnóstico! 🎯

En los próximos 15 minutos recibirás tu reporte completo con:

✅ Tu puntaje global de liderazgo
✅ Desglose por las 5 competencias
✅ Interpretación personalizada
✅ 3 recomendaciones específicas

📧 Lo enviaremos a: {{email}}

Mientras tanto:

¿Quieres profundizar con un Diagnóstico 360°?
Envíame un mensaje a [tu-email] o LinkedIn mencionando "360 Liderazgo"

O agenda una Sesión Estratégica gratuita de 30 min:
[link-calendly]

**Luego:** Exporta las respuestas a Google Sheets o Excel y calcula los scores manualmente o con script (ver `scoring-logic.js`).

---

## Paso 8: Configurar integraciones (Email automation)

### Opción A: Typeform + Zapier/Make

1. Conecta Typeform con tu email service (Gmail, Mailchimp, etc.)
2. Crea automation:
   - **Trigger:** Nueva respuesta en Typeform
   - **Action 1:** Calcular scores (usando `scoring-logic.js` adaptado)
   - **Action 2:** Generar PDF de reporte
   - **Action 3:** Enviar email con resultados

### Opción B: Typeform + Google Sheets + Apps Script

1. Conecta Typeform → Google Sheets (automático en Typeform)
2. Crea Google Apps Script que:
   - Lee nueva fila en Sheets
   - Calcula scores
   - Genera PDF
   - Envía email

Ver ejemplos de código en carpeta `/examples/apps-script/`

### Opción C: Typeform nativo (Plan Business)

1. Ve a **Connect** → **Email notifications**
2. Activa "Send email to respondent"
3. Personaliza email con variables de resultados
4. Adjunta PDF template con resultados

---

## Paso 9: Testear antes de lanzar

### Checklist de QA:

- [ ] Todas las 30 preguntas están cargadas correctamente
- [ ] Las escalas 1-5 funcionan en todas las preguntas de assessment
- [ ] Email se captura correctamente
- [ ] Responde tú mismo el formulario completo (10 min)
- [ ] Verifica que recibes email de confirmación
- [ ] Calcula manualmente los scores de tu prueba y verifica lógica
- [ ] Revisa que el flujo sea fluido (sin saltos raros)
- [ ] Testea en mobile (50%+ de respuestas serán desde celular)
- [ ] Verifica ortografía y gramática en todas las pantallas
- [ ] Comparte link de prueba con 2-3 personas de confianza

---

## Paso 10: Configurar seguimiento y analytics

### En Typeform:

1. Ve a **Connect** → **Google Analytics**
2. Agrega tu tracking ID
3. Configura eventos personalizados:
   - Formulario iniciado
   - Sección de perfil completada
   - Assessment completado
   - Tasa de abandono por pregunta

### Métricas clave a trackear:

- **Tasa de inicio:** % de personas que hacen click en "Comenzar"
- **Tasa de finalización:** % que llegan hasta el final
- **Tiempo promedio:** Debería estar entre 8-12 minutos
- **Punto de abandono:** ¿En qué pregunta se van?
- **Conversión a CTA:** % que agenda sesión o escribe email

**Objetivo:**
- Tasa de finalización >70%
- Conversión a CTA: 15-25%

---

## Paso 11: Publicar y compartir

### URL personalizada:

1. Ve a **Share**
2. Personaliza tu URL: `typeform.com/to/diagnostico-liderazgo-[tu-nombre]`
3. Copia link para compartir

### Opciones de embedding:

**Para landing page:**
```html
<div data-tf-widget="[tu-form-id]" style="width:100%;height:500px;"></div>
<script src="//embed.typeform.com/next/embed.js"></script>
Para popup:

xml
<button data-tf-popup="[tu-form-id]">Hacer diagnóstico</button>
<script src="//embed.typeform.com/next/embed.js"></script>
Para slide-in (cuando scroll):

xml
<div data-tf-slider="[tu-form-id]" style="width:100%;height:500px;"></div>
<script src="//embed.typeform.com/next/embed.js"></script>
Mejoras futuras (Post-MVP)
 Personalización visual: Branding completo con colores de tu marca

 Progress bar: Mostrar "40% completado" durante assessment

 Comparación con benchmarks: "Tu puntaje vs promedio de tu industria"

 Reporte PDF automatizado: Con gráficos de radar por dimensión

 Secuencia de emails: Día 1 (resultados) → Día 3 (recordatorio) → Día 7 (oferta 360°)

 Segmentación: Diferentes CTAs según nivel de puntaje

Recursos adicionales
Typeform Documentation

Zapier + Typeform Integration

Make (Integromat) Scenarios

Soporte
Si necesitas ayuda con la configuración:

Email: [tu-email]

Issues en este repo: [link-a-issues]

Tiempo estimado de setup: 3-4 horas (primera vez), 1 hora (con experiencia en Typeform)

