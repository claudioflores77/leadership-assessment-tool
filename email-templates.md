```markdown
# Email Templates - Leadership Assessment

Plantillas de emails automatizados para el flujo completo del assessment.

---

## Email 1: Resultados del Assessment (Envío inmediato)

**Trigger:** Usuario completa el assessment  
**Timing:** Inmediato (0-5 minutos después)

### Subject lines (A/B test):

**Opción A (directo):**
Tu Diagnóstico de Liderazgo está listo | Puntaje: {{Global_score}}/5.0

text

**Opción B (beneficio):**
{{nombre}}, descubre tus fortalezas de liderazgo + 3 acciones inmediatas

text

**Opción C (curiosidad):**
Tus resultados están listos. Una sorpresa en la dimensión #3...

text

### Email body:

Asunto: Tu Diagnóstico de Liderazgo está listo | {{Global_score}}/5.0

Hola {{nombre}},

Gracias por tomarte el tiempo de completar el Diagnóstico de Efectividad en Liderazgo.

🎯 TU PUNTAJE GLOBAL: {{Global_score}} / 5.0
Nivel: {{Global_level}}

Esto te coloca en el {{percentil}}% de los líderes evaluados.

📊 TUS RESULTADOS POR DIMENSIÓN:

Comunicación y Alineamiento: {{D1_score}}/5.0 ({{D1_level}})

Desarrollo de Talento: {{D2_score}}/5.0 ({{D2_level}})

Gestión de Conflictos: {{D3_score}}/5.0 ({{D3_level}})

Delegación y Empoderamiento: {{D4_score}}/5.0 ({{D4_level}})

Visión Estratégica: {{D5_score}}/5.0 ({{D5_level}})

💪 TUS TOP 2 FORTALEZAS:

{{top_strength_1}}
{{top_strength_2}}

Estas son competencias donde ya estás generando impacto significativo. Continúa apalancándolas y considera cómo puedes modelarlas para tu equipo.

🎯 TUS TOP 3 OPORTUNIDADES DE DESARROLLO:

{{top_opportunity_1}}
{{top_opportunity_2}}
{{top_opportunity_3}}

Estas son las áreas donde invertir en desarrollo tendrá el mayor retorno en tu efectividad como líder.

📥 DESCARGA TU REPORTE COMPLETO

Adjunto encontrarás tu reporte en PDF con:
✅ Interpretación detallada de cada dimensión
✅ 3 recomendaciones específicas que puedes implementar esta semana
✅ Marco de desarrollo para los próximos 90 días

[Botón: Descargar Reporte PDF]

🚀 PRÓXIMOS PASOS SUGERIDOS

{{if Global_score < 4.0}}
Tu puntaje indica áreas importantes de desarrollo. Te recomiendo dar el siguiente paso con un Diagnóstico 360° donde descubres cómo te ven tu jefe, pares y equipo.

La investigación muestra que líderes se califican a sí mismos ~40% más positivamente que sus equipos. El 360° cierra esa brecha de autopercepción y acelera tu desarrollo.
{{endif}}

Opciones disponibles:

📊 Diagnóstico 360° Completo
Evaluación confidencial con múltiples evaluadores + sesión de interpretación de 90 min + plan de desarrollo personalizado.

🎯 Sesión Estratégica (30 min, sin costo)
Revisamos juntos tus resultados y diseñamos las 3 acciones de mayor impacto que puedes implementar en los próximos 30 días.

Para cualquiera de las dos opciones:
👉 Responde a este email mencionando "Próximo paso"
👉 O agenda directamente aquí: [link-calendly]

Mientras tanto, comienza a implementar las recomendaciones de tu reporte. En 30 días, vuelve a hacer este diagnóstico para medir tu progreso.

¡Éxito en tu desarrollo como líder!

Un abrazo,
[Tu nombre]
[Tu título]
[Tu empresa]

P.D. Si tienes preguntas sobre tu reporte o quieres profundizar en alguna dimensión específica, responde a este email. Leo personalmente cada respuesta.

[Logo de tu empresa]
[Redes sociales]
[Unsubscribe]

text

---

## Email 2: Recordatorio (Día 3)

**Trigger:** No ha agendado sesión ni respondido  
**Timing:** 3 días después del Email 1

### Subject line:

{{nombre}}, una pregunta sobre tu diagnóstico de liderazgo

text

### Email body:

Hola {{nombre}},

Hace 3 días recibiste los resultados de tu Diagnóstico de Liderazgo.

Te vi una rápida pregunta: ¿Cuál fue tu mayor insight al ver tus resultados?

Muchas personas me dicen que el ejercicio más valioso no es solo ver los números, sino reflexionar sobre:

¿Por qué puntué así en cada dimensión?

¿Qué comportamientos específicos explican esos scores?

¿Qué pasaría si mejorara mi dimensión más baja?

Si te interesa profundizar, tengo disponibles algunas sesiones estratégicas de 30 minutos esta semana donde podemos:

Revisar tus resultados juntos

Identificar las 2-3 palancas de mayor impacto para ti

Diseñar un plan de acción específico para los próximos 30 días

Sin costo, sin compromiso. Solo 30 minutos de conversación útil.

¿Te suma? Responde a este email o agenda aquí: [link-calendly]

Saludos,
[Tu nombre]

P.D. Si ya empezaste a trabajar en alguna recomendación del reporte, me encantaría saber cómo va. Responde y cuéntame.

text

---

## Email 3: Valor + Oferta (Día 7)

**Trigger:** No ha agendado sesión  
**Timing:** 7 días después del Email 1

### Subject line:

El gap que los autoevaluaciones no pueden medir

text

### Email body:

Hola {{nombre}},

Hace una semana completaste el diagnóstico de liderazgo y obtuviste un puntaje de {{Global_score}}/5.0.

Eso te da una fotografía útil de tu autopercepción como líder.

Pero hay un gap que ninguna autoevaluación puede capturar:

Cómo te VE tu equipo vs. cómo TE VES tú.

Estudios de CCL (Center for Creative Leadership) muestran que:

Los líderes se califican ~40% más positivamente que sus equipos

Los "puntos ciegos" (áreas donde crees que estás bien pero tu equipo no lo percibe así) son la causa #1 de fracaso en roles de liderazgo

Líderes que reciben feedback 360° mejoran su efectividad 2.3x más rápido que aquellos que solo hacen autoevaluación

Por eso el siguiente paso natural después del self-assessment es un Diagnóstico 360°.

📊 ¿QUÉ INCLUYE EL 360° COMPLETO?

Evaluación multifuente confidencial

Tu jefe evalúa las mismas 5 dimensiones

2-3 pares evalúan

3-5 miembros de tu equipo evalúan

Tú te autoevalúas (nuevamente)

Reporte comparativo

Gráficos de radar: "Cómo me veo vs. cómo me ven"

Identificación de puntos ciegos y fortalezas ocultas

Comentarios cualitativos anónimos

Sesión de interpretación (90 min)

Revisamos los resultados sin defensividad

Identificamos las 3 prioridades de desarrollo

Co-creamos tu plan de acción de 90 días

{{if Global_score < 3.5}}
Dado que tu autoevaluación mostró oportunidades importantes de desarrollo en {{lowest_dimension}}, el 360° te daría claridad sobre:

¿Mi equipo percibe esto igual que yo?

¿Es realmente mi prioridad #1 o hay algo que no estoy viendo?

¿Qué comportamientos específicos debo cambiar primero?
{{endif}}

¿TE INTERESA EXPLORAR EL 360°?

Respondeme a este email con "360" y te envío:

Detalles del proceso completo

Inversión y timeline

Casos de éxito de líderes en situaciones similares a la tuya

O si prefieres, agendemos una llamada de 20 minutos donde te explico cómo funciona y vemos si tiene sentido para ti: [link-calendly]

Saludos,
[Tu nombre]

P.D. El 360° no es para todos. Funciona mejor para líderes que:

Ya tienen autocrítica y capacidad de reflexión (✓ completaste el self-assessment)

Están dispuestos a recibir feedback sin ponerse defensivos

Quieren resultados medibles en 90 días

Si esto eres tú, hablemos.

text

---

## Email 4: Última oportunidad / Caso de éxito (Día 14)

**Trigger:** No ha agendado ni respondido  
**Timing:** 14 días después del Email 1

### Subject line:

[Caso real] De 2.8 a 4.3 en "Delegación" en 90 días

text

### Email body:

Hola {{nombre}},

Te comparto un caso real que creo te puede interesar.

Situación inicial:

Martín, Director Comercial de una empresa mediana en México, hizo el mismo diagnóstico que tú hace 6 meses.

Su puntaje global: 3.2/5.0

Su dimensión más baja: Delegación y Empoderamiento (2.8/5.0)

Síntomas visibles:

Trabajaba 60+ horas/semana, siempre "apagando incendios"

Su equipo dependía de él para todo

Había perdido a 2 buenos colaboradores en el último año ("quiero más autonomía")

El proceso:

Hizo un 360° completo → descubrió que su equipo lo percibía incluso PEOR de lo que él creía (promedio de equipo: 2.1/5.0 en Delegación)

En la sesión de debrief identificamos 3 comportamientos clave a cambiar:

Definir "niveles de autoridad" claros (qué pueden decidir sin consultarle)

Dejar de revisar cada email/documento antes de que salga

Sostener 1-a-1 semanales enfocados en coaching, no en control

Implementó esos 3 cambios durante 90 días con seguimiento mensual

Resultados (3 meses después):

Puntaje en Delegación: subió de 2.8 a 4.3

Percepción del equipo: subió de 2.1 a 4.0

Horas de trabajo semanales: bajaron de 60 a 45

Su equipo cerró 2 proyectos importantes sin su intervención

Cero renuncias en el trimestre

Su frase literal:
"El 360° me dio el espejo que necesitaba. Yo creía que 'estar encima' era liderar. Mi equipo sentía que no confiaba en ellos. Cambiar esos 3 comportamientos cambió todo."

{{nombre}}, no sé si tu situación es similar a la de Martín.

Pero si tu puntaje de {{Global_score}} y tus áreas de oportunidad resuenan con esto...

...y si estás dispuesto/a a invertir 90 días en desarrollo real (no solo en "leer sobre liderazgo")...

...tengo 2 espacios disponibles para Diagnóstico 360° + Programa de Desarrollo este mes.

¿Hablamos? Responde a este email o agenda aquí: [link-calendly]

Saludos,
[Tu nombre]

P.D. Este es mi último email sobre este tema. Si no es el momento, está perfecto. Guarda tu reporte del self-assessment y vuelve a revisarlo en 6 meses. Ese ejercicio por sí solo ya tiene valor.

text

---

## Email 5: Nurturing - Contenido de valor (Mensual)

**Trigger:** No convirtió a cliente pero está en lista  
**Timing:** Mensual

### Subject line (rotar cada mes):

Mes 1: "3 señales de que tu equipo necesita más autonomía"
Mes 2: "El framework de feedback que usan los mejores líderes"
Mes 3: "Por qué tu estrategia no se ejecuta (y cómo arreglarlo)"

text

### Email body (ejemplo Mes 1):

Hola {{nombre}},

¿Tu equipo tiene autonomía real o solo autonomía de papel?

Muchos líderes dicen "mi equipo puede decidir"... pero en la práctica, todo termina pasando por ellos.

3 señales de que tu equipo necesita más autonomía:

🚩 Señal 1: El "te consulto por las dudas"
Tu equipo viene a preguntarte cosas que objetivamente podrían decidir solos. No es porque no sepan... es porque no están seguros de si "pueden".

➡️ Solución: Define por escrito "niveles de autoridad". Qué pueden decidir sin avisarte. Qué requiere avisarte después. Qué requiere aprobación previa.

🚩 Señal 2: Nada avanza cuando no estás
Vacaciones, día libre, reunión larga → todo se frena. Vuelves y tienes 47 mensajes de "necesito que decidas X".

➡️ Solución: Nombra un "decisor temporal" antes de ausentarte. Esa persona tiene tu autoridad completa en tu ausencia. Esto fuerza delegación real.

🚩 Señal 3: Tu equipo dice "como tú digas"
En reuniones, proponen ideas pero terminan con "aunque obviamente si vos preferís otra cosa...". Lenguaje de inseguridad.

➡️ Solución: En próxima reunión, NO opines primero. Pregunta "¿Cuál es tu recomendación?" y luego "¿Por qué?" Si es razonable, di "Adelante, es tu decisión". Aunque no sea lo que tú harías.

El liderazgo efectivo no es "estar encima de todo".

Es construir un equipo que pueda funcionar sin ti.

Si esta es una de tus áreas de desarrollo (lo viste en tu diagnóstico de hace unas semanas), y querés trabajarlo con un plan estructurado, responde a este email.

Sino, guarda estos 3 tips y empieza a aplicarlos esta semana.

Saludos,
[Tu nombre]

P.D. ¿Cuál de las 3 señales te resonó más? Responde y cuéntame.

text

---

## Template variables disponibles:

{{nombre}} - Nombre del usuario
{{email}} - Email del usuario
{{Global_score}} - Puntaje global (ej: 3.7)
{{Global_level}} - Nivel (Excepcional, Efectivo, etc.)
{{percentil}} - Percentil comparativo (si tienes data)
{{D1_score}} - Score Dimensión 1
{{D1_level}} - Nivel Dimensión 1
[...repetir para D2, D3, D4, D5...]
{{top_strength_1}} - Nombre de dimensión más alta
{{top_strength_2}} - Nombre de segunda dimensión más alta
{{top_opportunity_1}} - Nombre de dimensión más baja
{{top_opportunity_2}} - Segunda dimensión más baja
{{top_opportunity_3}} - Tercera dimensión más baja
{{lowest_dimension}} - Nombre de la dimensión con menor score

text

---

## Métricas de email a trackear:

- **Open rate:** >30% es bueno, >40% es excelente
- **Click rate:** >10% es bueno, >15% es excelente  
- **Reply rate:** >5% es excelente para B2B
- **Conversión a sesión agendada:** 15-25% del total de respuestas

---

**Versión:** 1.0.0  
**Idioma:** Español (Internacional)
