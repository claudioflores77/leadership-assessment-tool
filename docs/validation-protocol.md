# Protocolo de Validación del Instrumento

## Objetivo

Establecer metodología rigurosa para validar las propiedades psicométricas del Leadership Assessment Tool en población hispanohablante.

---

## Fase 1: Validación de Contenido

### Objetivo
Confirmar que los ítems representan adecuadamente las dimensiones teóricas.

### Método: Panel de Expertos

**Participantes:** 5-7 expertos en liderazgo organizacional
- Académicos con PhD en Psicología Organizacional / Comportamiento Organizacional
- Consultores con 10+ años en desarrollo de liderazgo
- Profesionales de RRHH en organizaciones >500 empleados

**Proceso:**
1. Cada experto recibe:
   - Definición conceptual de cada dimensión
   - Lista de 5 ítems por dimensión
   - Escala de relevancia 1-4 (1=no relevante, 4=muy relevante)

2. Calcular **Content Validity Ratio (CVR)** por ítem:
CVR = (ne - N/2) / (N/2)

donde:
ne = número de expertos que califican el ítem como "esencial" (3 o 4)
N = número total de expertos

3. **Criterio de retención:** CVR ≥ 0.75 (para N=6 expertos)

4. Ítems con CVR < 0.75 → revisar o eliminar

**Timeline:** Semanas 1-2

---

## Fase 2: Validación de Constructo

### 2.1 Análisis Factorial Exploratorio (AFE)

**Objetivo:** Confirmar estructura de 5 dimensiones

**Muestra requerida:** n ≥ 150 (ratio 6:1 respecto a 25 ítems)

**Método:**
1. Aplicar instrumento a muestra diversa de líderes hispanohablantes
2. Verificar supuestos:
- KMO (Kaiser-Meyer-Olkin) ≥ 0.70
- Test de Bartlett significativo (p < 0.05)
3. Extraer factores (método: Componentes Principales)
4. Rotación Varimax (o Oblimin si se espera correlación entre factores)

**Criterios de éxito:**
- 5 factores explican ≥60% de varianza total
- Cada ítem carga ≥0.50 en su factor teórico
- Cargas cruzadas <0.30

**Timeline:** Semanas 3-8

---

### 2.2 Análisis Factorial Confirmatorio (AFC)

**Objetivo:** Validar modelo teórico de 5 dimensiones

**Muestra requerida:** n ≥ 200 (distinta a la de AFE)

**Método:**
1. Especificar modelo teórico (5 factores latentes, 5 ítems observados cada uno)
2. Estimar modelo usando SEM (Structural Equation Modeling)
3. Evaluar ajuste del modelo:

**Índices de bondad de ajuste:**
- χ²/df < 3.0 (aceptable) o < 2.0 (bueno)
- CFI (Comparative Fit Index) ≥ 0.90 (aceptable) o ≥ 0.95 (bueno)
- TLI (Tucker-Lewis Index) ≥ 0.90
- RMSEA (Root Mean Square Error) ≤ 0.08 (aceptable) o ≤ 0.06 (bueno)
- SRMR (Standardized Root Mean Square Residual) ≤ 0.08

**Si ajuste es pobre:**
- Revisar índices de modificación
- Considerar eliminar ítems problemáticos
- Re-especificar modelo si es teóricamente justificable

**Timeline:** Semanas 9-12

---

## Fase 3: Confiabilidad

### 3.1 Consistencia Interna

**Objetivo:** Medir homogeneidad de ítems dentro de cada dimensión

**Método:** Calcular Cronbach's Alpha

**Fórmula:**
α = (k / k-1) × (1 - Σσ²ᵢ / σ²ₜ)

donde:
k = número de ítems
σ²ᵢ = varianza del ítem i
σ²ₜ = varianza total

**Criterios de aceptación:**
- α ≥ 0.70 (aceptable para investigación)
- α ≥ 0.80 (bueno para uso práctico)
- α ≥ 0.90 (excelente)

**Si α < 0.70:**
- Revisar correlación ítem-total corregida (debe ser >0.30)
- Eliminar ítems que reducen alpha significativamente

**Timeline:** Semana 10 (paralelo a AFC)

---

### 3.2 Confiabilidad Test-Retest

**Objetivo:** Evaluar estabilidad temporal del instrumento

**Método:**
1. Aplicar instrumento a n=50 participantes
2. Re-aplicar el mismo instrumento 2-4 semanas después
3. Calcular correlación de Pearson entre T1 y T2

**Criterio de aceptación:** r ≥ 0.70

**Consideraciones:**
- Periodo muy corto (< 1 semana) → sesgo de memoria
- Periodo muy largo (> 6 semanas) → posible cambio real en comportamiento

**Timeline:** Semanas 13-17

---

## Fase 4: Validez Convergente y Discriminante

### 4.1 Validez Convergente

**Objetivo:** Demostrar que el instrumento correlaciona con medidas relacionadas

**Variables criterio sugeridas:**
1. **Engagement del equipo** (medido con Utrecht Work Engagement Scale)
   - Hipótesis: r ≥ 0.40 con puntaje global de liderazgo
2. **Satisfacción laboral del equipo**
   - Hipótesis: r ≥ 0.35
3. **Evaluación de desempeño del líder** (por su jefe)
   - Hipótesis: r ≥ 0.30

**Método:**
1. Aplicar instrumento de liderazgo a n=100 líderes
2. Recoger medidas criterio de sus equipos (engagement, satisfacción)
3. Recoger evaluación de desempeño de sus jefes
4. Calcular correlaciones de Pearson

**Timeline:** Semanas 18-24

---

### 4.2 Validez Discriminante

**Objetivo:** Demostrar que el instrumento NO correlaciona con constructos diferentes

**Variables de contraste sugeridas:**
1. **Rasgos de personalidad Big Five** (Apertura, Responsabilidad, Extraversión, Amabilidad, Neuroticismo)
   - Hipótesis: r < 0.30 (correlaciones bajas)
2. **Habilidades técnicas** (no de liderazgo)
   - Hipótesis: r ≈ 0 (no correlación)

**Método:** Similar a validez convergente, calculando correlaciones con medidas que teóricamente NO deberían correlacionar fuerte.

**Timeline:** Semanas 18-24 (paralelo a convergente)

---

## Fase 5: Validez de Criterio

### 5.1 Validez Concurrente

**Objetivo:** Demostrar que puntajes altos predicen outcomes positivos ACTUALES

**Outcomes sugeridos:**
1. **Rotación del equipo** (últimos 12 meses)
   - Hipótesis: Correlación inversa r ≤ -0.25
2. **Desempeño del equipo** (KPIs objetivos)
   - Hipótesis: Correlación positiva r ≥ 0.30
3. **Clima laboral del equipo** (survey anual)
   - Hipótesis: Correlación positiva r ≥ 0.40

**Método:**
1. Aplicar instrumento a n=80 líderes
2. Recoger datos históricos de rotación, desempeño, clima
3. Correlacionar puntajes con outcomes

**Timeline:** Semanas 25-30

---

### 5.2 Validez Predictiva

**Objetivo:** Demostrar que puntajes predicen outcomes futuros

**Diseño longitudinal:**
1. Aplicar instrumento a n=60 líderes (T0)
2. Esperar 6-12 meses
3. Medir outcomes al final del periodo (T1):
   - Rotación del equipo en ese periodo
   - Cambio en engagement del equipo
   - Promoción o estancamiento del líder

**Hipótesis:**
- Líderes con puntaje >4.0 en T0 tendrán menor rotación en T1
- Líderes con puntaje >4.0 tendrán mayor probabilidad de promoción

**Timeline:** Meses 7-18 (largo plazo)

---

## Fase 6: Establecimiento de Normas

### Objetivo
Crear benchmarks para interpretación de puntajes

**Submuestras requeridas (n ≥ 300 total):**
- Por región: España, México, Cono Sur, Región Andina, Centroamérica
- Por tamaño de empresa: <50, 50-250, 250-1000, >1000 empleados
- Por industria: Tech, Servicios, Manufactura, Retail, Salud, Otros
- Por nivel jerárquico: Gerente, Director, C-Level

**Estadísticos a calcular:**
- Media y desviación estándar por dimensión y global
- Percentiles (10, 25, 50, 75, 90)
- Distribución de frecuencias

**Uso:**
"Tu puntaje en Comunicación (4.2) está en el percentil 78 comparado con gerentes de empresas tech medianas en España"

**Timeline:** Meses 6-12

---

## Fase 7: Validación del Formato 360°

### Objetivo
Validar versión multi-evaluador del instrumento

**Métricas adicionales para 360°:**

**1. Inter-Rater Reliability (IRR)**
- Correlación intra-clase (ICC) entre evaluadores del mismo nivel
- Criterio: ICC ≥ 0.60 (aceptable), ≥ 0.75 (bueno)

**2. Agreement between raters**
- Desviación estándar intra-evaluadores por dimensión
- Criterio: SD < 1.0 indica acuerdo razonable

**3. Self-Other Agreement**
- Correlación entre autoevaluación y promedio de otros
- Típico: r = 0.20-0.40 (acuerdo moderado es normal)
- Identificar "blind spots" (autoevaluación > otros) y "hidden strengths" (autoevaluación < otros)

**Muestra:** n=40 líderes con 5-8 evaluadores cada uno (200-320 evaluaciones totales)

**Timeline:** Meses 12-18

---

## Plan de Análisis de Datos

### Software recomendado:
- **SPSS** o **R** para estadística descriptiva, AFE, confiabilidad
- **AMOS**, **Mplus**, o **lavaan (R)** para AFC/SEM
- **Excel** o **Tableau** para visualización de normas

### Código reproducible:
Todo el código de análisis debe estar documentado y versionado en GitHub para transparencia y replicabilidad.

---

## Criterios de Éxito del Protocolo

Al final de las 7 fases, el instrumento se considera **validado** si cumple:

✅ CVR ≥ 0.75 en todos los ítems (validez de contenido)  
✅ 5 factores en AFE explican ≥60% varianza  
✅ AFC muestra buen ajuste (CFI ≥0.95, RMSEA ≤0.06)  
✅ Cronbach's alpha ≥0.80 por dimensión  
✅ Test-retest r ≥0.70  
✅ Correlación con engagement r ≥0.40 (validez convergente)  
✅ Correlación con rotación r ≤-0.25 (validez de criterio)  
✅ ICC ≥0.70 en formato 360° (confiabilidad inter-evaluadores)  

---

## Publicación de Resultados

**Output final:**
1. **White paper técnico** con todos los análisis y resultados
2. **Artículo académico** para revista de psicología organizacional
3. **Reporte público simplificado** para usuarios del instrumento
4. **Dataset anonimizado** disponible para investigadores

---

**Versión:** 1.0.0  
**Responsable:** [Tu nombre / equipo de investigación]  
**Contacto:** [email para colaboraciones]
