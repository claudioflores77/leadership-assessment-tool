/**
 * LEADERSHIP ASSESSMENT v2.0
 * 
 * Flujo: Bienvenida → Preguntas (con micro-insights) → Datos → Resultados
 * 
 * Cambios clave vs v1:
 * - Email y datos se piden AL FINAL (después de responder)
 * - Micro-insights entre bloques de dimensión (cada 5 preguntas)
 * - 4 perfiles de liderazgo con nombre y narrativa
 * - Interpretaciones emocionales por dimensión
 * - Recomendaciones visibles en resultados
 */

/* ============================================================================
   DATOS GLOBALES
   ============================================================================ */

let assessmentData = {
    name: '',
    email: '',
    country: '',
    role: '',
    teamSize: '',
    responses: {}
};

let currentQuestionIndex = 0;
let isAdvancing = false; // Guard contra doble avance

// ── Las 25 preguntas ──────────────────────────────────────────────────────

const questions = [
    // DIMENSIÓN 1: Comunicación y Alineamiento Estratégico
    { id:'D1Q1', dimension:'D1', dimensionName:'Comunicación y Alineamiento Estratégico',
      question:"Explico claramente el 'por qué' detrás de las decisiones y cambios importantes." },
    { id:'D1Q2', dimension:'D1', dimensionName:'Comunicación y Alineamiento Estratégico',
      question:"Me aseguro de que mi equipo entienda cómo su trabajo contribuye a los objetivos estratégicos." },
    { id:'D1Q3', dimension:'D1', dimensionName:'Comunicación y Alineamiento Estratégico',
      question:"Comunico expectativas de desempeño de manera específica y medible." },
    { id:'D1Q4', dimension:'D1', dimensionName:'Comunicación y Alineamiento Estratégico',
      question:"Comparto información relevante con mi equipo de manera oportuna, incluso cuando no son buenas noticias." },
    { id:'D1Q5', dimension:'D1', dimensionName:'Comunicación y Alineamiento Estratégico',
      question:"Adapto mi estilo de comunicación según la audiencia (equipo, pares, superiores)." },

    // DIMENSIÓN 2: Desarrollo de Talento y Coaching
    { id:'D2Q1', dimension:'D2', dimensionName:'Desarrollo de Talento y Coaching',
      question:"Dedico tiempo regular a conversaciones 1-a-1 con los miembros de mi equipo." },
    { id:'D2Q2', dimension:'D2', dimensionName:'Desarrollo de Talento y Coaching',
      question:"Identifico activamente oportunidades de crecimiento para cada persona de mi equipo." },
    { id:'D2Q3', dimension:'D2', dimensionName:'Desarrollo de Talento y Coaching',
      question:"Delego tareas desafiantes que permiten a mi equipo desarrollar nuevas habilidades." },
    { id:'D2Q4', dimension:'D2', dimensionName:'Desarrollo de Talento y Coaching',
      question:"Hago preguntas que ayudan a mi equipo a encontrar soluciones en lugar de simplemente dar respuestas." },
    { id:'D2Q5', dimension:'D2', dimensionName:'Desarrollo de Talento y Coaching',
      question:"Celebro los logros y el progreso de mi equipo de manera específica y auténtica." },

    // DIMENSIÓN 3: Gestión de Conflictos y Feedback
    { id:'D3Q1', dimension:'D3', dimensionName:'Gestión de Conflictos y Feedback',
      question:"Abordo los conflictos y desacuerdos de manera directa en lugar de evitarlos." },
    { id:'D3Q2', dimension:'D3', dimensionName:'Gestión de Conflictos y Feedback',
      question:"Doy feedback correctivo de manera específica, oportuna y constructiva." },
    { id:'D3Q3', dimension:'D3', dimensionName:'Gestión de Conflictos y Feedback',
      question:"Mantengo la calma y la objetividad en situaciones de alta tensión o presión." },
    { id:'D3Q4', dimension:'D3', dimensionName:'Gestión de Conflictos y Feedback',
      question:"Escucho diferentes puntos de vista antes de tomar decisiones que afectan al equipo." },
    { id:'D3Q5', dimension:'D3', dimensionName:'Gestión de Conflictos y Feedback',
      question:"Admito mis errores y los uso como oportunidades de aprendizaje para el equipo." },

    // DIMENSIÓN 4: Delegación y Empoderamiento
    { id:'D4Q1', dimension:'D4', dimensionName:'Delegación y Empoderamiento',
      question:"Delego decisiones y responsabilidades en lugar de controlar todos los detalles." },
    { id:'D4Q2', dimension:'D4', dimensionName:'Delegación y Empoderamiento',
      question:"Confío en mi equipo para resolver problemas sin necesidad de mi intervención constante." },
    { id:'D4Q3', dimension:'D4', dimensionName:'Delegación y Empoderamiento',
      question:"Defiendo a mi equipo y les doy autonomía para experimentar y aprender de los errores." },
    { id:'D4Q4', dimension:'D4', dimensionName:'Delegación y Empoderamiento',
      question:"Establezco límites claros de autoridad: mi equipo sabe cuándo puede decidir y cuándo debe consultarme." },
    { id:'D4Q5', dimension:'D4', dimensionName:'Delegación y Empoderamiento',
      question:"Me enfoco en los resultados que espero en lugar de controlar cómo se logran." },

    // DIMENSIÓN 5: Visión Estratégica y Gestión del Cambio
    { id:'D5Q1', dimension:'D5', dimensionName:'Visión Estratégica y Gestión del Cambio',
      question:"Mantengo una visión clara de hacia dónde debe ir mi área/equipo en los próximos 6-12 meses." },
    { id:'D5Q2', dimension:'D5', dimensionName:'Visión Estratégica y Gestión del Cambio',
      question:"Anticipo obstáculos y oportunidades antes de que se conviertan en crisis." },
    { id:'D5Q3', dimension:'D5', dimensionName:'Visión Estratégica y Gestión del Cambio',
      question:"Priorizo iniciativas según su impacto estratégico, no solo según su urgencia." },
    { id:'D5Q4', dimension:'D5', dimensionName:'Visión Estratégica y Gestión del Cambio',
      question:"Comunico los cambios organizacionales de manera que mi equipo entienda el contexto y la necesidad." },
    { id:'D5Q5', dimension:'D5', dimensionName:'Visión Estratégica y Gestión del Cambio',
      question:"Ayudo a mi equipo a adaptarse al cambio gestionando sus preocupaciones de manera empática." }
];

const likertLabels = [
    "Nunca o casi nunca",
    "Rara vez",
    "A veces",
    "Frecuentemente",
    "Siempre o casi siempre"
];

// ── Micro-insights (se muestran después de cada dimensión) ────────────

const microInsights = [
    { // Después de D1 (Comunicación)
        icon: '🎯',
        stat: '4.1x',
        text: 'Los equipos que entienden el "por qué" de las decisiones muestran 4.1 veces más compromiso que los que solo reciben instrucciones.',
        source: 'Aon Hewitt, 2020'
    },
    { // Después de D2 (Desarrollo de Talento)
        icon: '📈',
        stat: '40%',
        text: 'Los líderes que hacen coaching activo reducen la intención de renuncia de su equipo en un 40%. La retención empieza por la conversación.',
        source: 'Bersin / Deloitte, 2019'
    },
    { // Después de D3 (Conflictos y Feedback)
        icon: '⚡',
        stat: '50%',
        text: 'La mitad de la rotación voluntaria se explica por conflictos no gestionados. Lo que no se nombra, se acumula.',
        source: 'SHRM, 2021'
    },
    { // Después de D4 (Delegación)
        icon: '🔓',
        stat: '2.5x',
        text: 'Los equipos empoderados son 2.5 veces más productivos. Soltar el control no es debilidad — es la palanca más potente que tenés.',
        source: 'Harvard Business Review, 2021'
    }
    // No hay insight después de D5 porque ahí van a la captura de datos
];

// ── 4 Perfiles de Liderazgo ──────────────────────────────────────────

const leadershipProfiles = {
    strategic: {
        name: 'Líder Estratégico',
        range: '4.5 – 5.0',
        description: 'Tenés las competencias de un líder de alto impacto. Tu equipo sabe hacia dónde va, se siente respaldado y tiene autonomía real. El desafío ahora no es mejorar — es escalar: ¿cómo multiplicás este impacto más allá de tu equipo directo?',
        color: 'var(--gold)'
    },
    consolidated: {
        name: 'Líder Consolidado',
        range: '3.8 – 4.4',
        description: 'Tenés una base sólida. Tu equipo te respeta y funciona. Pero hay 1 o 2 dimensiones donde un ajuste específico podría cambiar drásticamente tu dinámica. La diferencia entre un líder bueno y uno extraordinario suele estar en detalles concretos.',
        color: 'var(--bordeaux)'
    },
    evolving: {
        name: 'Líder en Evolución',
        range: '3.0 – 3.7',
        description: 'Tenés conciencia de lo que falta — y eso ya te pone adelante de muchos. Hay brechas claras entre lo que sabés que deberías hacer y lo que realmente hacés en el día a día. La buena noticia: son brechas cerrables con un plan concreto.',
        color: 'var(--gold)'
    },
    inflection: {
        name: 'Líder en Punto de Inflexión',
        range: '1.0 – 2.9',
        description: 'Este resultado no es una sentencia — es una señal. Estás en un momento donde las decisiones que tomes sobre tu desarrollo van a definir el futuro de tu equipo y tu carrera. Los líderes más transformadores que conocemos arrancaron exactamente desde acá.',
        color: 'var(--red)'
    }
};

function getProfile(score) {
    if (score >= 4.5) return leadershipProfiles.strategic;
    if (score >= 3.8) return leadershipProfiles.consolidated;
    if (score >= 3.0) return leadershipProfiles.evolving;
    return leadershipProfiles.inflection;
}

// ── Interpretaciones por dimensión y nivel ────────────────────────────

const dimensionInterpretations = {
    D1: {
        high: 'Tu comunicación genera claridad. Tu equipo entiende el rumbo y su rol en él.',
        mid: 'Comunicás, pero pueden quedar brechas entre lo que decís y lo que tu equipo interpreta. Esas brechas se pagan con desalineamiento.',
        low: 'Tu equipo probablemente opera sin contexto suficiente. Cuando no entienden el "por qué", ejecutan sin compromiso real.'
    },
    D2: {
        high: 'Invertís genuinamente en el crecimiento de tu equipo. Eso genera lealtad y retención.',
        mid: 'Tenés buenas intenciones de desarrollo, pero posiblemente no la consistencia. Los 1-a-1 esporádicos no generan el mismo efecto que los regulares.',
        low: 'Tu equipo puede sentir que no crecen con vos. Eso es un riesgo de retención importante — los mejores se van primero.'
    },
    D3: {
        high: 'Abordás las conversaciones difíciles sin evitarlas. Eso construye confianza real.',
        mid: 'Posiblemente evitás algunos conflictos o retrasás feedback difícil. Lo que no se nombra a tiempo, se acumula.',
        low: 'Los conflictos no resueltos están probablemente erosionando la confianza y la productividad de tu equipo sin que lo notes del todo.'
    },
    D4: {
        high: 'Tu equipo tiene autonomía real. Pueden funcionar sin tu intervención constante.',
        mid: 'Delegás formalmente, pero podrías estar haciendo micro-seguimiento. Tu equipo siente la diferencia.',
        low: 'Si todo pasa por vos, estás siendo el cuello de botella de tu propio equipo. Esto te cuesta horas y les cuesta autonomía.'
    },
    D5: {
        high: 'Pensás más allá del día a día. Tu equipo sabe que hay un plan, no solo urgencias.',
        mid: 'Tenés visión, pero la urgencia te gana seguido. Cuando todo es urgente, nada es estratégico.',
        low: 'Operás en modo reactivo. Cada crisis se siente como sorpresa, y tu equipo absorbe esa incertidumbre.'
    }
};

function getDimensionInterpretation(dimId, score) {
    var interp = dimensionInterpretations[dimId];
    if (score >= 4.0) return interp.high;
    if (score >= 3.0) return interp.mid;
    return interp.low;
}

// ── Recomendaciones por dimensión (para la más baja) ──────────────────

const dimensionRecommendations = {
    D1: [
        { title: 'Empezá cada decisión con el "por qué"',
          text: 'Antes de comunicar un cambio, prepará 2 frases que expliquen por qué se tomó esta decisión y cómo se conecta con los objetivos del equipo.',
          action: 'Esta semana: en tu próxima reunión de equipo, antes de dar una directiva, empezá con "Les cuento por qué estamos haciendo esto..."' },
        { title: 'Check-in de alineamiento',
          text: 'Preguntale a cada persona de tu equipo: "¿Cómo entendés que tu trabajo contribuye a los objetivos de la empresa?" Escuchá sin interrumpir.',
          action: 'Esta semana: hacé esta pregunta en tu próxima conversación 1-a-1.' },
        { title: 'Expectativas escritas, no asumidas',
          text: 'Para tu próximo proyecto, documentá qué se espera, cómo se mide el éxito, y cuándo es la fecha límite. Compartilo y pedí confirmación.',
          action: 'Esta semana: elegí un proyecto en curso y escribí las expectativas en 3 líneas.' }
    ],
    D2: [
        { title: 'Instalá el ritual del 1-a-1',
          text: '30 minutos cada 1-2 semanas con cada persona de tu equipo. Primera mitad: escuchá. Segunda mitad: preguntá sobre su desarrollo.',
          action: 'Hoy: bloqueá los 1-a-1 recurrentes en tu calendario para las próximas 4 semanas.' },
        { title: 'Preguntá antes de resolver',
          text: 'La próxima vez que alguien venga con un problema, antes de dar la respuesta preguntá: "¿Qué opciones consideraste?" y "¿Qué necesitarías para resolverlo vos?"',
          action: 'Esta semana: usá estas preguntas al menos 2 veces.' },
        { title: 'Delegá para desarrollar, no solo para descargar',
          text: 'Identificá 1 tarea que hoy hacés vos y que podría ser una oportunidad de crecimiento para alguien de tu equipo.',
          action: 'Esta semana: delegá esa tarea con contexto de por qué es una oportunidad de desarrollo.' }
    ],
    D3: [
        { title: 'Framework SBI para feedback difícil',
          text: 'Usá Situación-Comportamiento-Impacto: "En la reunión del martes (S), llegaste tarde y sin la presentación (C), lo cual hizo que el cliente cuestionara nuestra organización (I)."',
          action: 'Esta semana: identificá 1 situación donde necesitás dar feedback y prepará las 3 frases SBI.' },
        { title: 'Abordá el conflicto que estás evitando',
          text: 'Sabés cuál es. Agendá una conversación 1-a-1 esta semana. Abrí con: "Noté cierta tensión en [tema]. Me gustaría entender cómo lo ves vos."',
          action: 'Hoy: agendá esa conversación. No esperes "el momento perfecto" — no existe.' },
        { title: 'La regla de las 48 horas',
          text: 'Si algo necesita feedback correctivo, dalo dentro de 48 horas. Después de eso, pierde impacto y se vuelve resentimiento.',
          action: 'Adoptá esta regla como principio: si lo vas a decir, decilo esta semana.' }
    ],
    D4: [
        { title: 'Definí niveles de autoridad',
          text: 'Comunicá explícitamente qué puede decidir tu equipo solo, qué requiere avisarte después, y qué necesita tu aprobación previa.',
          action: 'Esta semana: en tu próxima reunión de equipo, compartí estas 3 categorías con ejemplos concretos.' },
        { title: 'El experimento de autonomía',
          text: 'Elegí un proyecto y dalo completo a alguien de tu equipo: "Este es tu proyecto. Vos decidís cómo. Solo avisame si necesitás recursos o si hay riesgo de no cumplir."',
          action: 'Esta semana: identificá ese proyecto y esa persona. Comunicá la delegación completa.' },
        { title: 'Resistí el impulso de revisar',
          text: 'Si delegaste, no revises cada paso. Establecé check-ins programados (semanales) en lugar de consultas diarias ad-hoc.',
          action: 'A partir de hoy: cuando sientas el impulso de preguntar "¿cómo va?", esperá al check-in programado.' }
    ],
    D5: [
        { title: 'Ritual mensual de mapeo de riesgos',
          text: 'Bloqueá 2 horas al mes para identificar 3 riesgos + 3 oportunidades que podrían afectar a tu área. Definí señales tempranas para cada uno.',
          action: 'Hoy: agendá tu primer "Mapeo de Riesgos y Oportunidades" para esta semana.' },
        { title: 'Priorizá por impacto, no por urgencia',
          text: 'Al inicio de cada semana, preguntate: "¿Cuáles de las tareas en mi lista mueven la aguja? ¿Cuáles son solo urgentes pero no importantes?"',
          action: 'Mañana: clasificá tu lista de tareas en "alto impacto" y "solo urgente". Empezá por las de alto impacto.' },
        { title: 'Narrativa del cambio',
          text: 'La próxima vez que comuniques un cambio, usá esta estructura: Contexto (qué está pasando) → Visión (hacia dónde vamos) → Impacto (qué significa para el equipo) → Espacio (escuchá sus preocupaciones).',
          action: 'Preparalo para tu próximo cambio organizacional, por chico que sea.' }
    ]
};

/* ============================================================================
   NAVEGACIÓN
   ============================================================================ */

function showScreen(screenId) {
    // Ocultar todas las pantallas y micro-insights
    document.querySelectorAll('.screen, .micro-insight').forEach(function(el) {
        el.classList.remove('active');
        el.style.display = 'none';
    });
    
    var target = document.getElementById(screenId);
    if (target) {
        if (target.classList.contains('micro-insight')) {
            target.style.display = 'block';
            target.classList.add('active');
        } else {
            target.style.display = 'block';
            target.classList.add('active');
        }
        window.scrollTo(0, 0);
    }
}

/* ============================================================================
   PREGUNTAS
   ============================================================================ */

function startQuestions() {
    currentQuestionIndex = 0;
    showScreen('questions-screen');
    renderQuestion();
}

function renderQuestion() {
    var q = questions[currentQuestionIndex];
    var container = document.getElementById('question-container');
    var progressText = document.getElementById('questions-progress-text');
    var progressBar = document.getElementById('questions-progress');
    var prevBtn = document.getElementById('prev-btn');
    var nextBtn = document.getElementById('next-btn');
    
    // Progreso
    var pct = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = pct + '%';
    progressText.textContent = 'Pregunta ' + (currentQuestionIndex + 1) + ' de ' + questions.length;
    
    // Mostrar/ocultar anterior
    prevBtn.style.display = currentQuestionIndex > 0 ? 'inline-block' : 'none';
    
    // Texto del botón siguiente
    nextBtn.textContent = currentQuestionIndex === questions.length - 1 ? 'Finalizar' : 'Siguiente';
    
    // Construir pregunta
    var selectedValue = assessmentData.responses[q.id] || 0;
    
    var html = '<div class="question-number">Dimensión: ' + q.dimensionName + '</div>';
    html += '<h3 class="question-text">' + q.question + '</h3>';
    html += '<div class="likert-scale">';
    
    for (var i = 0; i < likertLabels.length; i++) {
        var val = i + 1;
        var isSelected = selectedValue === val;
        html += '<label class="likert-option' + (isSelected ? ' selected' : '') + '" data-value="' + val + '">';
        html += '<input type="radio" name="' + q.id + '" value="' + val + '"' + (isSelected ? ' checked' : '') + '>';
        html += '<span class="likert-number">' + val + '</span>';
        html += '<span class="likert-label">' + likertLabels[i] + '</span>';
        html += '</label>';
    }
    
    html += '</div>';
    container.innerHTML = html;
    
    // Event listeners
    var options = container.querySelectorAll('.likert-option');
    options.forEach(function(opt) {
        opt.addEventListener('click', function() {
            var value = parseInt(this.dataset.value);
            assessmentData.responses[q.id] = value;
            
            // Update visual state
            options.forEach(function(o) { o.classList.remove('selected'); });
            this.classList.add('selected');
            this.querySelector('input').checked = true;
            
            // Auto-advance después de 400ms (con guard contra doble avance)
            if (!isAdvancing) {
                isAdvancing = true;
                setTimeout(function() {
                    nextQuestion();
                    isAdvancing = false;
                }, 400);
            }
        });
    });
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
}

function nextQuestion() {
    var q = questions[currentQuestionIndex];
    
    // Validar respuesta
    if (!assessmentData.responses[q.id]) {
        // Highlight que falta responder (sutil)
        document.querySelector('.question-text').style.color = 'var(--red)';
        setTimeout(function() {
            document.querySelector('.question-text').style.color = '';
        }, 1000);
        return;
    }
    
    // Si es la última pregunta → ir a captura de datos
    if (currentQuestionIndex === questions.length - 1) {
        showScreen('profile-screen');
        detectUserCountry();
        return;
    }
    
    // Verificar si terminamos una dimensión (cada 5 preguntas)
    var nextIndex = currentQuestionIndex + 1;
    var currentDim = q.dimension;
    var nextDim = questions[nextIndex].dimension;
    
    // Si cambiamos de dimensión Y no es la última (D5→datos), mostrar insight
    if (currentDim !== nextDim && microInsights[parseInt(currentDim.replace('D','')) - 1]) {
        var insightIndex = parseInt(currentDim.replace('D','')) - 1;
        showMicroInsight(insightIndex, nextIndex);
        return;
    }
    
    currentQuestionIndex = nextIndex;
    renderQuestion();
}

/* ============================================================================
   MICRO-INSIGHTS
   ============================================================================ */

var pendingQuestionIndex = 0;

function showMicroInsight(insightIndex, nextQIndex) {
    pendingQuestionIndex = nextQIndex;
    
    var insight = microInsights[insightIndex];
    if (!insight) {
        currentQuestionIndex = nextQIndex;
        showScreen('questions-screen');
        renderQuestion();
        return;
    }
    
    document.getElementById('insight-icon').textContent = insight.icon;
    document.getElementById('insight-stat').textContent = insight.stat;
    document.getElementById('insight-text').textContent = insight.text;
    document.getElementById('insight-source').textContent = '— ' + insight.source;
    
    showScreen('insight-screen');
}

function continueAfterInsight() {
    currentQuestionIndex = pendingQuestionIndex;
    showScreen('questions-screen');
    renderQuestion();
}

/* ============================================================================
   FORMULARIO DE PERFIL (ahora al final)
   ============================================================================ */

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('profile-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            assessmentData.name = document.getElementById('name').value || 'Participante';
            assessmentData.email = document.getElementById('email').value;
            assessmentData.country = document.getElementById('country').value;
            
            var roleEl = document.querySelector('input[name="role"]:checked');
            var teamEl = document.querySelector('input[name="teamSize"]:checked');
            
            if (!roleEl || !teamEl) {
                alert('Por favor completá todos los campos obligatorios');
                return;
            }
            
            assessmentData.role = roleEl.value;
            assessmentData.teamSize = teamEl.value;
            
            if (!validateEmail(assessmentData.email)) {
                alert('Por favor ingresá un email válido');
                return;
            }
            
            calculateAndShowResults();
        });
    }
});

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ============================================================================
   CÁLCULO DE RESULTADOS
   ============================================================================ */

function calculateDimensionScore(dimensionId) {
    var dimQuestions = questions.filter(function(q) { return q.dimension === dimensionId; });
    var sum = 0;
    dimQuestions.forEach(function(q) { sum += assessmentData.responses[q.id] || 0; });
    return Math.round((sum / dimQuestions.length) * 10) / 10;
}

function interpretLevel(score) {
    if (score >= 4.5) return 'Excepcional';
    if (score >= 3.8) return 'Efectivo';
    if (score >= 3.0) return 'En desarrollo';
    if (score >= 2.0) return 'Oportunidad crítica';
    return 'Riesgo alto';
}

function getLevelClass(score) {
    if (score >= 4.5) return 'exceptional';
    if (score >= 3.8) return 'effective';
    if (score >= 3.0) return 'developing';
    return 'critical';
}

function getBarClass(score) {
    if (score >= 4.5) return 'bar-exceptional';
    if (score >= 3.8) return 'bar-effective';
    if (score >= 3.0) return 'bar-developing';
    return 'bar-critical';
}

function getDimensionName(dimId) {
    var names = {
        'D1': 'Comunicación y Alineamiento Estratégico',
        'D2': 'Desarrollo de Talento y Coaching',
        'D3': 'Gestión de Conflictos y Feedback',
        'D4': 'Delegación y Empoderamiento',
        'D5': 'Visión Estratégica y Gestión del Cambio'
    };
    return names[dimId] || dimId;
}

function calculateAndShowResults() {
    showScreen('loading-screen');
    
    // Mensajes rotativos durante la carga
    var loadingMessages = [
        'Analizando tus respuestas en 5 dimensiones',
        'Calculando tu perfil de liderazgo',
        'Identificando fortalezas y oportunidades',
        'Generando recomendaciones personalizadas'
    ];
    var msgIndex = 0;
    var msgEl = document.getElementById('loading-message');
    var loadingInterval = setInterval(function() {
        msgIndex++;
        if (msgIndex < loadingMessages.length && msgEl) {
            msgEl.textContent = loadingMessages[msgIndex];
        }
    }, 700);
    
    setTimeout(function() {
        clearInterval(loadingInterval);
        var dimScores = {
            D1: calculateDimensionScore('D1'),
            D2: calculateDimensionScore('D2'),
            D3: calculateDimensionScore('D3'),
            D4: calculateDimensionScore('D4'),
            D5: calculateDimensionScore('D5')
        };
        
        var globalScore = Math.round(
            (dimScores.D1 + dimScores.D2 + dimScores.D3 + dimScores.D4 + dimScores.D5) / 5 * 10
        ) / 10;
        
        var dimResults = {};
        Object.keys(dimScores).forEach(function(dim) {
            dimResults[dim] = {
                score: dimScores[dim],
                level: interpretLevel(dimScores[dim]),
                levelClass: getLevelClass(dimScores[dim]),
                barClass: getBarClass(dimScores[dim]),
                name: getDimensionName(dim),
                interpretation: getDimensionInterpretation(dim, dimScores[dim])
            };
        });
        
        var sorted = Object.entries(dimScores).sort(function(a,b) { return b[1] - a[1]; });
        
        var topStrengths = sorted.slice(0, 2).map(function(entry) {
            return { dimension: getDimensionName(entry[0]), dimensionId: entry[0], score: entry[1] };
        });
        
        var topOpportunities = sorted.slice(-3).reverse().map(function(entry) {
            return { dimension: getDimensionName(entry[0]), dimensionId: entry[0], score: entry[1] };
        });
        
        // Dimensión más baja para recomendaciones
        var lowestDim = sorted[sorted.length - 1][0];
        
        var profile = getProfile(globalScore);
        
        var results = {
            globalScore: globalScore,
            globalLevel: interpretLevel(globalScore),
            globalLevelClass: getLevelClass(globalScore),
            profile: profile,
            dimensionScores: dimResults,
            topStrengths: topStrengths,
            topOpportunities: topOpportunities,
            lowestDimension: lowestDim,
            recommendations: dimensionRecommendations[lowestDim],
            date: new Date().toLocaleDateString('es-ES')
        };
        
        localStorage.setItem('assessmentData', JSON.stringify(assessmentData));
        localStorage.setItem('assessmentResults', JSON.stringify(results));
        
        window.location.href = 'results.html';
    }, 3000);
}

/* ============================================================================
   UTILIDADES
   ============================================================================ */

function detectUserCountry() {
    fetch('https://ipapi.co/json/')
        .then(function(r) { return r.json(); })
        .then(function(data) {
            var sel = document.getElementById('country');
            if (sel && data.country_name) {
                for (var i = 0; i < sel.options.length; i++) {
                    if (sel.options[i].text === data.country_name ||
                        data.country_name.includes(sel.options[i].text) ||
                        sel.options[i].text.includes(data.country_name)) {
                        sel.selectedIndex = i;
                        break;
                    }
                }
            }
        })
        .catch(function() {});
}

function resetAssessment() {
    assessmentData = { name:'', email:'', country:'', role:'', teamSize:'', responses:{} };
    currentQuestionIndex = 0;
    localStorage.removeItem('assessmentData');
    localStorage.removeItem('assessmentResults');
    showScreen('welcome-screen');
}

function goBackToQuestions() {
    currentQuestionIndex = questions.length - 1; // Ir a la última pregunta
    showScreen('questions-screen');
    renderQuestion();
}

window.resetAssessment = resetAssessment;
console.log('Leadership Assessment v2.0 — cargado');
