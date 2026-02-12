# Leadership Assessment Tool 🎯

**Diagnóstico de Efectividad en Liderazgo para Mandos Medios y Altos**

Instrumento validado de autoevaluación y 360° para evaluar las 5 competencias críticas que diferencian a los líderes efectivos de aquellos que luchan por generar resultados.

## 🎯 Propósito

Este repositorio contiene la estructura completa de un assessment de liderazgo diseñado para:

- Mandos medios y altos en organizaciones de habla hispana
- Evaluación de 5 dimensiones críticas de liderazgo
- Formato self-assessment (25 preguntas, 8-10 minutos)
- Extensible a formato 360° con evaluadores múltiples

## 📊 Dimensiones Evaluadas

1. **Comunicación y Alineamiento Estratégico**
   - Claridad en el "por qué"
   - Conexión estrategia-operación
   - Gestión de expectativas

2. **Desarrollo de Talento y Coaching**
   - 1-a-1 efectivos
   - Identificación de oportunidades de crecimiento
   - Delegación para desarrollo

3. **Gestión de Conflictos y Feedback**
   - Conversaciones difíciles
   - Feedback constructivo
   - Gestión de desacuerdos

4. **Delegación y Empoderamiento**
   - Autonomía del equipo
   - Confianza y autoridad clara
   - Enfoque en resultados vs. control

5. **Visión Estratégica y Gestión del Cambio**
   - Anticipación y priorización
   - Comunicación de cambios
   - Adaptabilidad organizacional

## 🏗️ Estructura del Repositorio
leadership-assessment-tool/
├── README.md # Este archivo
├── LICENSE # Licencia MIT
├── .gitignore # Archivos ignorados por Git
├── assessment-questions.json # 30 preguntas estructuradas (25 assessment + 5 perfil)
├── scoring-logic.js # Lógica de cálculo y scoring
├── interpretations.md # Interpretaciones y recomendaciones por dimensión
├── typeform-config.md # Guía de configuración en Typeform
├── email-templates.md # Templates de emails automatizados
├── docs/
│ ├── research-foundation.md # Base científica del instrumento
│ ├── validation-protocol.md # Protocolo de validación
│ └── 360-extension.md # Extensión a formato 360°
└── examples/
├── sample-report.md # Ejemplo de reporte de resultados
└── sample-debrief-script.md # Script para sesión de debrief


## 🚀 Implementación Rápida

### Opción A: Typeform (Recomendado - No Code)

1. Crea cuenta en [Typeform](https://typeform.com)
2. Sigue la guía en `typeform-config.md`
3. Importa preguntas desde `assessment-questions.json`
4. Configura lógica de scoring desde `scoring-logic.js`
5. Conecta email automation con plantillas de `email-templates.md`

### Opción B: Custom Development

1. Backend: Node.js/Express o Python/Flask
2. Frontend: React/Vue para UI del assessment
3. Base de datos: PostgreSQL/MongoDB para almacenar respuestas
4. Email: SendGrid/Mailgun para automatización

### Opción C: Google Forms + Apps Script (Gratuito)

1. Crea formulario desde `assessment-questions.json`
2. Usa Google Apps Script para calcular scoring
3. Envía resultados por email automático

## 📈 Sistema de Puntuación

**Escala:** 1-5 (Nunca → Siempre)

**Por dimensión:**
- Puntaje = Promedio de 5 preguntas
- Rango: 1.0 - 5.0

**Interpretación:**
- 4.5-5.0: Excepcional (Top 10%)
- 3.8-4.4: Efectivo
- 3.0-3.7: En desarrollo
- 2.0-2.9: Oportunidad crítica
- 1.0-1.9: Riesgo alto

**Puntaje Global:** Promedio de las 5 dimensiones

## 🎓 Fundamento Científico

Este instrumento está basado en:

- **Multifactor Leadership Questionnaire (MLQ)** - Bass & Avolio
- **Benchmarks® 360** - Center for Creative Leadership
- **20+ años de investigación** en liderazgo organizacional
- **Adaptación transcultural** para mercado hispanohablante

Ver `docs/research-foundation.md` para referencias completas.

## 🌍 Mercado Objetivo

- **Geografía:** Hispanohablantes (América Latina, España, EEUU hispano, Europa)
- **Sectores:** Todos (Tech, Servicios, Manufactura, Retail, Salud)
- **Tamaño empresa:** Startups a empresas medianas (10-500 empleados)
- **Roles:** Gerentes, Directores, C-Level, Fundadores

## 📋 Próximos Pasos

### Fase 1: MVP Self-Assessment (Semanas 1-2)
- [ ] Montar en Typeform
- [ ] Configurar email automation
- [ ] Testear con 10 usuarios piloto
- [ ] Iterar según feedback

### Fase 2: Lead Magnet (Semanas 3-4)
- [ ] Crear landing page
- [ ] Integrar con CRM
- [ ] Lanzar campaña LinkedIn/Instagram
- [ ] Medir tasa de conversión

### Fase 3: 360° Extension (Mes 2)
- [ ] Diseñar flujo multi-evaluador
- [ ] Crear reporte comparativo
- [ ] Desarrollar protocolo debrief
- [ ] Testear con 3-5 clientes pagos

### Fase 4: Validación y Normas (Mes 3+)
- [ ] Recolectar 100+ respuestas
- [ ] Análisis estadístico (Cronbach's alpha, correlaciones)
- [ ] Crear normas por región/industria/tamaño
- [ ] Publicar white paper con resultados

## 🤝 Contribuciones

Este proyecto está abierto a contribuciones. Si quieres mejorar:

- Ítems de preguntas
- Traducciones a otros idiomas
- Integraciones con plataformas
- Análisis de datos

Por favor abre un Issue o Pull Request.

## 📄 Licencia

MIT License - Ver `LICENSE` para detalles

## 📧 Contacto

Para consultas sobre implementación, validación o uso comercial:

- Email: contactofba@gmail.com
- LinkedIn: https://linkedin.com/in/claudioflores-coach
- Web: https://coachingempresario.lovable.app/


**Versión:** 1.0.0  
**Última actualización:** Febrero 2026  
**Idioma:** Español (Internacional)

