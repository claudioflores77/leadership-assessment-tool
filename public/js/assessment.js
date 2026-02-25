/**
 * LEADERSHIP ASSESSMENT - LÓGICA PRINCIPAL
 * 
 * Este archivo maneja TODA la funcionalidad de la aplicación:
 * - Navegación entre pantallas
 * - Gestión de las 25 preguntas
 * - Cálculo de puntajes
 * - Almacenamiento de datos
 * - Generación del reporte
 * 
 * Está muy comentado para que sea fácil de entender y modificar.
 */

/* ============================================================================
   DATOS GLOBALES - Toda la información del assessment
   ============================================================================ */

// Objeto donde guardamos todas las respuestas del usuario
let assessmentData = {
    // Perfil demográfico
    name: '',
    email: '',
    country: '',
    role: '',
    teamSize: '',
    
    // Respuestas a las 25 preguntas (se llenan durante el assessment)
    responses: {}
};

// Índice de la pregunta actual (de 0 a 24)
let currentQuestionIndex = 0;

// TODAS LAS 25 PREGUNTAS organizadas por dimensión
const questions = [
    // ========== DIMENSIÓN 1: Comunicación y Alineamiento Estratégico ==========
    {
        id: 'D1Q1',
        dimension: 'D1',
        dimensionName: 'Comunicación y Alineamiento Estratégico',
        question: "Explico claramente el 'por qué' detrás de las decisiones y cambios importantes."
    },
    {
        id: 'D1Q2',
        dimension: 'D1',
        dimensionName: 'Comunicación y Alineamiento Estratégico',
        question: "Me aseguro de que mi equipo entienda cómo su trabajo contribuye a los objetivos estratégicos de la organización."
    },
    {
        id: 'D1Q3',
        dimension: 'D1',
        dimensionName: 'Comunicación y Alineamiento Estratégico',
        question: "Comunico expectativas de desempeño de manera específica y medible."
    },
    {
        id: 'D1Q4',
        dimension: 'D1',
        dimensionName: 'Comunicación y Alineamiento Estratégico',
        question: "Comparto información relevante con mi equipo de manera oportuna, incluso cuando las noticias no son positivas."
    },
    {
        id: 'D1Q5',
        dimension: 'D1',
        dimensionName: 'Comunicación y Alineamiento Estratégico',
        question: "Adapto mi estilo de comunicación según la audiencia (equipo, pares, superiores)."
    },
    
    // ========== DIMENSIÓN 2: Desarrollo de Talento y Coaching ==========
    {
        id: 'D2Q1',
        dimension: 'D2',
        dimensionName: 'Desarrollo de Talento y Coaching',
        question: "Dedico tiempo regular (semanal o quincenal) a conversaciones 1-a-1 con los miembros de mi equipo."
    },
    {
        id: 'D2Q2',
        dimension: 'D2',
        dimensionName: 'Desarrollo de Talento y Coaching',
        question: "Identifico activamente oportunidades de crecimiento y desarrollo para cada persona de mi equipo."
    },
    {
        id: 'D2Q3',
        dimension: 'D2',
        dimensionName: 'Desarrollo de Talento y Coaching',
        question: "Delego tareas desafiantes que permiten a mi equipo desarrollar nuevas habilidades."
    },
    {
        id: 'D2Q4',
        dimension: 'D2',
        dimensionName: 'Desarrollo de Talento y Coaching',
        question: "Hago preguntas que ayudan a mi equipo a encontrar soluciones en lugar de simplemente dar respuestas."
    },
    {
        id: 'D2Q5',
        dimension: 'D2',
        dimensionName: 'Desarrollo de Talento y Coaching',
        question: "Celebro los logros y el progreso de las personas de mi equipo de manera específica y auténtica."
    },
    
    // ========== DIMENSIÓN 3: Gestión de Conflictos y Feedback ==========
    {
        id: 'D3Q1',
        dimension: 'D3',
        dimensionName: 'Gestión de Conflictos y Feedback',
        question: "Abordo los conflictos y desacuerdos de manera directa en lugar de evitarlos."
    },
    {
        id: 'D3Q2',
        dimension: 'D3',
        dimensionName: 'Gestión de Conflictos y Feedback',
        question: "Doy feedback correctivo de manera específica, oportuna y constructiva."
    },
    {
        id: 'D3Q3',
        dimension: 'D3',
        dimensionName: 'Gestión de Conflictos y Feedback',
        question: "Mantengo la calma y la objetividad en situaciones de alta tensión o presión."
    },
    {
        id: 'D3Q4',
        dimension: 'D3',
        dimensionName: 'Gestión de Conflictos y Feedback',
        question: "Escucho diferentes puntos de vista antes de tomar decisiones que afectan al equipo."
    },
    {
        id: 'D3Q5',
        dimension: 'D3',
        dimensionName: 'Gestión de Conflictos y Feedback',
        question: "Admito mis errores y los uso como oportunidades de aprendizaje para el equipo."
    },
    
    // ========== DIMENSIÓN 4: Delegación y Empoderamiento ==========
    {
        id: 'D4Q1',
        dimension: 'D4',
        dimensionName: 'Delegación y Empoderamiento',
        question: "Delego decisiones y responsabilidades en lugar de controlar todos los detalles."
    },
    {
        id: 'D4Q2',
        dimension: 'D4',
        dimensionName: 'Delegación y Empoderamiento',
        question: "Confío en mi equipo para resolver problemas sin necesidad de mi intervención constante."
    },
    {
        id: 'D4Q3',
        dimension: 'D4',
        dimensionName: 'Delegación y Empoderamiento',
        question: "Defiendo a mi equipo y les doy autonomía para experimentar y aprender de los errores."
    },
    {
        id: 'D4Q4',
        dimension: 'D4',
        dimensionName: 'Delegación y Empoderamiento',
        question: "Establezco límites claros de autoridad para que mi equipo sepa cuándo puede decidir y cuándo debe consultarme."
    },
    {
        id: 'D4Q5',
        dimension: 'D4',
        dimensionName: 'Delegación y Empoderamiento',
        question: "Me enfoco en los resultados que espero en lugar de controlar cómo se logran."
    },
    
    // ========== DIMENSIÓN 5: Visión Estratégica y Gestión del Cambio ==========
    {
        id: 'D5Q1',
        dimension: 'D5',
        dimensionName: 'Visión Estratégica y Gestión del Cambio',
        question: "Mantengo una visión clara de hacia dónde debe ir mi área/equipo en los próximos 6-12 meses."
    },
    {
        id: 'D5Q2',
        dimension: 'D5',
        dimensionName: 'Visión Estratégica y Gestión del Cambio',
        question: "Anticipo obstáculos y oportunidades que pueden afectar a mi área antes de que se conviertan en crisis."
    },
    {
        id: 'D5Q3',
        dimension: 'D5',
        dimensionName: 'Visión Estratégica y Gestión del Cambio',
        question: "Priorizo iniciativas y proyectos según su impacto estratégico, no solo según su urgencia."
    },
    {
        id: 'D5Q4',
        dimension: 'D5',
        dimensionName: 'Visión Estratégica y Gestión del Cambio',
        question: "Comunico los cambios organizacionales de manera que mi equipo entienda el contexto y la necesidad."
    },
    {
        id: 'D5Q5',
        dimension: 'D5',
        dimensionName: 'Visión Estratégica y Gestión del Cambio',
        question: "Ayudo a mi equipo a adaptarse al cambio gestionando sus preocupaciones y resistencias de manera empática."
    }
];

// Etiquetas para la escala Likert
const likertLabels = [
    "Nunca o casi nunca",
    "Rara vez",
    "A veces",
    "Frecuentemente",
    "Siempre o casi siempre"
];

/* ============================================================================
   NAVEGACIÓN ENTRE PANTALLAS
   ============================================================================ */

/**
 * Muestra una pantalla específica y oculta todas las demás
 * @param {string} screenId - ID de la pantalla a mostrar (ej: 'welcome-screen')
 */
function showScreen(screenId) {
    // Ocultar todas las pantallas
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
    
    // Mostrar la pantalla solicitada
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        
        // Scroll hacia arriba cuando cambiamos de pantalla
        window.scrollTo(0, 0);
    }
}

/**
 * Inicia el assessment (botón "Comenzar Diagnóstico")
 */
function startAssessment() {
    showScreen('profile-screen');
    updateProgress(10); // 10% completado
}

/**
 * Actualiza la barra de progreso
 * @param {number} percentage - Porcentaje de 0 a 100
 */
function updateProgress(percentage) {
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
        progressFill.style.width = percentage + '%';
    }
}

/* ============================================================================
   FORMULARIO DE PERFIL
   ============================================================================ */

// Cuando el DOM esté listo, configurar el formulario de perfil
document.addEventListener('DOMContentLoaded', function() {
    // Intentar detectar país automáticamente
    detectUserCountry();

    const profileForm = document.getElementById('profile-form');
    
    if (profileForm) {
        profileForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Evitar que el formulario se envíe normalmente
            
            // Guardar los datos del perfil
            assessmentData.name = document.getElementById('name').value || 'Participante';
            assessmentData.email = document.getElementById('email').value;
            assessmentData.country = document.getElementById('country').value;
            assessmentData.role = document.querySelector('input[name="role"]:checked').value;
            assessmentData.teamSize = document.querySelector('input[name="teamSize"]:checked').value;
            
            // Validar que el email sea válido
            if (!validateEmail(assessmentData.email)) {
                alert('Por favor ingresa un email válido');
                return;
            }
            
            // Mostrar pantalla de instrucciones
            showScreen('instructions-screen');
            updateProgress(20);
        });
    }
});

/**
 * Valida que un email tenga formato correcto
 * @param {string} email - Email a validar
 * @returns {boolean} - true si es válido, false si no
 */
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/* ============================================================================
   PREGUNTAS DEL ASSESSMENT
   ============================================================================ */

/**
 * Inicia las preguntas del assessment
 */
function startQuestions() {
    currentQuestionIndex = 0;
    showScreen('questions-screen');
    renderQuestion();
}

/**
 * Renderiza la pregunta actual en la pantalla
 */
function renderQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const container = document.getElementById('question-container');
    const dimensionBadge = document.getElementById('dimension-badge');
    const progressText = document.getElementById('questions-progress-text');
    const questionsProgress = document.getElementById('questions-progress');
    const prevBtn = document.getElementById('prev-btn');
    
    // Actualizar badge de dimensión
    dimensionBadge.textContent = currentQuestion.dimensionName;
    
    // Actualizar texto de progreso
    progressText.textContent = `Pregunta ${currentQuestionIndex + 1} de ${questions.length}`;
    
    // Actualizar barra de progreso (de 20% a 90%)
    const questionProgress = 20 + ((currentQuestionIndex + 1) / questions.length) * 70;
    questionsProgress.style.width = questionProgress + '%';
    
    // Mostrar/ocultar botón "Anterior"
    prevBtn.style.display = currentQuestionIndex > 0 ? 'inline-block' : 'none';
    
    // Renderizar la pregunta actual
    container.innerHTML = `
        <h3 class="question-text">${currentQuestion.question}</h3>
        <div class="likert-scale">
            ${likertLabels.map((label, index) => `
                <label class="likert-option">
                    <input type="radio" 
                           name="${currentQuestion.id}" 
                           value="${index + 1}"
                           ${assessmentData.responses[currentQuestion.id] === (index + 1) ? 'checked' : ''}>
                    <span class="likert-number">${index + 1}</span>
                    <span class="likert-label">${label}</span>
                </label>
            `).join('')}
        </div>
    `;
    
    // Agregar event listeners a las opciones
    const options = container.querySelectorAll('input[type="radio"]');
    options.forEach(option => {
        option.addEventListener('change', function() {
            // Guardar la respuesta
            assessmentData.responses[currentQuestion.id] = parseInt(this.value);
        });
    });
}

/**
 * Ir a la pregunta anterior
 */
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
}

/**
 * Ir a la siguiente pregunta
 */
function nextQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    
    // Verificar que la pregunta actual esté respondida
    if (!assessmentData.responses[currentQuestion.id]) {
        alert('Por favor selecciona una respuesta antes de continuar');
        return;
    }
    
    // Si es la última pregunta, calcular resultados
    if (currentQuestionIndex === questions.length - 1) {
        calculateAndShowResults();
        return;
    }
    
    // Si no, ir a la siguiente pregunta
    currentQuestionIndex++;
    renderQuestion();
}

/* ============================================================================
   CÁLCULO DE RESULTADOS (Lógica de Scoring)
   ============================================================================ */

/**
 * Calcula el puntaje de una dimensión
 * @param {string} dimensionId - ID de la dimensión (D1, D2, etc.)
 * @returns {number} - Puntaje promedio redondeado a 1 decimal
 */
function calculateDimensionScore(dimensionId) {
    // Obtener todas las preguntas de esta dimensión
    const dimensionQuestions = questions.filter(q => q.dimension === dimensionId);
    
    // Sumar todas las respuestas
    let sum = 0;
    dimensionQuestions.forEach(q => {
        sum += assessmentData.responses[q.id] || 0;
    });
    
    // Calcular promedio
    const average = sum / dimensionQuestions.length;
    
    // Redondear a 1 decimal
    return Math.round(average * 10) / 10;
}

/**
 * Interpreta el nivel según el puntaje
 * @param {number} score - Puntaje de 1.0 a 5.0
 * @returns {string} - Nivel (Excepcional, Efectivo, etc.)
 */
function interpretLevel(score) {
    if (score >= 4.5) return 'Excepcional';
    if (score >= 3.8) return 'Efectivo';
    if (score >= 3.0) return 'En desarrollo';
    if (score >= 2.0) return 'Oportunidad crítica';
    return 'Riesgo alto';
}

/**
 * Obtiene el nombre de la dimensión
 * @param {string} dimensionId - ID de la dimensión (D1, D2, etc.)
 * @returns {string} - Nombre completo de la dimensión
 */
function getDimensionName(dimensionId) {
    const names = {
        'D1': 'Comunicación y Alineamiento Estratégico',
        'D2': 'Desarrollo de Talento y Coaching',
        'D3': 'Gestión de Conflictos y Feedback',
        'D4': 'Delegación y Empoderamiento',
        'D5': 'Visión Estratégica y Gestión del Cambio'
    };
    return names[dimensionId] || dimensionId;
}

/**
 * Calcula todos los resultados y muestra la pantalla de carga
 */
function calculateAndShowResults() {
    // Mostrar pantalla de carga
    showScreen('loading-screen');
    updateProgress(95);
    
    // Simular procesamiento (2 segundos) y luego mostrar resultados
    setTimeout(() => {
        const results = calculateResults();
        
        // Guardar resultados en localStorage para la página de resultados
        localStorage.setItem('assessmentData', JSON.stringify(assessmentData));
        localStorage.setItem('assessmentResults', JSON.stringify(results));
        
        // Redirigir a la página de resultados
        window.location.href = 'results.html';
    }, 2000);
}

/**
 * Calcula TODOS los resultados del assessment
 * @returns {object} - Objeto con todos los resultados calculados
 */
function calculateResults() {
    // Calcular puntaje por cada dimensión
    const dimensionScores = {
        D1: calculateDimensionScore('D1'),
        D2: calculateDimensionScore('D2'),
        D3: calculateDimensionScore('D3'),
        D4: calculateDimensionScore('D4'),
        D5: calculateDimensionScore('D5')
    };
    
    // Calcular puntaje global
    const globalScore = Math.round(
        (dimensionScores.D1 + dimensionScores.D2 + dimensionScores.D3 + 
         dimensionScores.D4 + dimensionScores.D5) / 5 * 10
    ) / 10;
    
    // Crear objeto de resultados con niveles
    const dimensionResults = {};
    Object.keys(dimensionScores).forEach(dim => {
        dimensionResults[dim] = {
            score: dimensionScores[dim],
            level: interpretLevel(dimensionScores[dim]),
            name: getDimensionName(dim)
        };
    });
    
    // Identificar fortalezas y oportunidades
    const sorted = Object.entries(dimensionScores).sort((a, b) => b[1] - a[1]);
    
    const topStrengths = sorted.slice(0, 2).map(([dim, score]) => ({
        dimension: getDimensionName(dim),
        dimensionId: dim,
        score: score
    }));
    
    const topOpportunities = sorted.slice(-3).reverse().map(([dim, score]) => ({
        dimension: getDimensionName(dim),
        dimensionId: dim,
        score: score
    }));
    
    return {
        globalScore: globalScore,
        globalLevel: interpretLevel(globalScore),
        dimensionScores: dimensionResults,
        topStrengths: topStrengths,
        topOpportunities: topOpportunities,
        date: new Date().toLocaleDateString('es-ES')
    };
}

/* ============================================================================
   FUNCIONES AUXILIARES
   ============================================================================ */

/**
 * Limpia todos los datos guardados (útil para testing)
 */
function resetAssessment() {
    assessmentData = {
        name: '',
        email: '',
        country: '',
        role: '',
        teamSize: '',
        responses: {}
    };
    currentQuestionIndex = 0;
    localStorage.removeItem('assessmentData');
    localStorage.removeItem('assessmentResults');
    showScreen('welcome-screen');
}

// Hacer algunas funciones accesibles globalmente para debugging
window.resetAssessment = resetAssessment;

/**
 * Detecta el país del usuario mediante API gratuita para simplificar el formulario
 */
function detectUserCountry() {
    // Usamos ipapi.co que ofrece detección gratuita (con límites razonables)
    fetch('https://ipapi.co/json/')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            const countrySelect = document.getElementById('country');
            const userCountry = data.country_name; // Nombre en inglés generalmente

            if (countrySelect && userCountry) {
                // Intentar encontrar el país en las opciones
                let found = false;
                for (let i = 0; i < countrySelect.options.length; i++) {
                    // Comparación simple, podría mejorarse con un mapa de traducciones
                    if (countrySelect.options[i].text.includes(userCountry) ||
                        userCountry.includes(countrySelect.options[i].text)) {
                        countrySelect.selectedIndex = i;
                        found = true;
                        break;
                    }
                }

                // Si no se encuentra, tal vez el usuario está en un país de habla hispana listado
                if (!found && data.country_code) {
                    // Mapeo básico de códigos a nombres en español si es necesario
                    // Por ahora confiamos en la coincidencia de texto
                }
            }
        })
        .catch(function(error) {
            console.log('No se pudo detectar el país automáticamente, el usuario deberá seleccionarlo.');
        });
}

/* ============================================================================
   INICIALIZACIÓN
   ============================================================================ */

// Log de inicio (útil para debugging)
console.log('Leadership Assessment cargado correctamente');
console.log('Total de preguntas:', questions.length);
