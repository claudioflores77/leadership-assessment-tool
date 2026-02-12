/**
 * Leadership Assessment - Scoring Logic
 * Version: 1.0.0
 * Language: ES (International Spanish)
 */

/**
 * Calculate dimension score
 * @param {Array<number>} responses - Array of 5 responses (1-5 scale)
 * @returns {number} Average score rounded to 1 decimal
 */
function calculateDimensionScore(responses) {
  if (responses.length !== 5) {
    throw new Error('Each dimension must have exactly 5 responses');
  }
  
  const sum = responses.reduce((acc, val) => acc + val, 0);
  const average = sum / responses.length;
  
  return Math.round(average * 10) / 10; // Round to 1 decimal
}

/**
 * Calculate global leadership score
 * @param {Object} dimensionScores - Object with scores for each dimension
 * @returns {number} Global score rounded to 1 decimal
 */
function calculateGlobalScore(dimensionScores) {
  const scores = Object.values(dimensionScores);
  const sum = scores.reduce((acc, val) => acc + val, 0);
  const average = sum / scores.length;
  
  return Math.round(average * 10) / 10;
}

/**
 * Interpret dimension level based on score
 * @param {number} score - Dimension score (1.0-5.0)
 * @returns {string} Level interpretation
 */
function interpretLevel(score) {
  if (score >= 4.5) return 'Excepcional';
  if (score >= 3.8) return 'Efectivo';
  if (score >= 3.0) return 'En desarrollo';
  if (score >= 2.0) return 'Oportunidad crítica';
  return 'Riesgo alto';
}

/**
 * Get level description
 * @param {string} level - Level name
 * @returns {string} Level description
 */
function getLevelDescription(level) {
  const descriptions = {
    'Excepcional': 'Fortaleza distintiva. Estás en el top 10% de líderes en esta competencia.',
    'Efectivo': 'Buen nivel de desarrollo. Continúa refinando estas habilidades.',
    'En desarrollo': 'Nivel básico. Esta área requiere atención y desarrollo activo.',
    'Oportunidad crítica': 'Gap significativo que está impactando tu efectividad como líder.',
    'Riesgo alto': 'Esta es un área de riesgo importante que necesita intervención inmediata.'
  };
  
  return descriptions[level] || '';
}

/**
 * Identify top strengths and opportunities
 * @param {Object} dimensionScores - Object with scores for each dimension
 * @returns {Object} Object with topStrengths and topOpportunities arrays
 */
function identifyStrengthsAndOpportunities(dimensionScores) {
  const entries = Object.entries(dimensionScores);
  
  // Sort by score descending
  const sorted = entries.sort((a, b) => b[1] - a[1]);
  
  return {
    topStrengths: sorted.slice(0, 2).map(([dimension, score]) => ({
      dimension,
      score
    })),
    topOpportunities: sorted.slice(-3).reverse().map(([dimension, score]) => ({
      dimension,
      score
    }))
  };
}

/**
 * Get dimension name in Spanish
 * @param {string} dimensionId - Dimension ID (D1, D2, etc.)
 * @returns {string} Dimension name
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
 * Get lowest scoring dimension (for targeted recommendations)
 * @param {Object} dimensionScores - Object with scores for each dimension
 * @returns {string} Dimension ID with lowest score
 */
function getLowestDimension(dimensionScores) {
  const entries = Object.entries(dimensionScores);
  const sorted = entries.sort((a, b) => a[1] - b[1]);
  
  return sorted[0][0]; // Return dimension ID
}

/**
 * Main scoring function
 * @param {Object} responses - Object with all responses
 * @returns {Object} Complete scoring results
 */
function scoreAssessment(responses) {
  // Calculate dimension scores
  const dimensionScores = {
    D1: calculateDimensionScore([
      responses.D1Q1,
      responses.D1Q2,
      responses.D1Q3,
      responses.D1Q4,
      responses.D1Q5
    ]),
    D2: calculateDimensionScore([
      responses.D2Q1,
      responses.D2Q2,
      responses.D2Q3,
      responses.D2Q4,
      responses.D2Q5
    ]),
    D3: calculateDimensionScore([
      responses.D3Q1,
      responses.D3Q2,
      responses.D3Q3,
      responses.D3Q4,
      responses.D3Q5
    ]),
    D4: calculateDimensionScore([
      responses.D4Q1,
      responses.D4Q2,
      responses.D4Q3,
      responses.D4Q4,
      responses.D4Q5
    ]),
    D5: calculateDimensionScore([
      responses.D5Q1,
      responses.D5Q2,
      responses.D5Q3,
      responses.D5Q4,
      responses.D5Q5
    ])
  };
  
  // Calculate global score
  const globalScore = calculateGlobalScore(dimensionScores);
  
  // Interpret levels
  const dimensionLevels = {};
  Object.keys(dimensionScores).forEach(dim => {
    dimensionLevels[dim] = {
      score: dimensionScores[dim],
      level: interpretLevel(dimensionScores[dim]),
      description: getLevelDescription(interpretLevel(dimensionScores[dim]))
    };
  });
  
  // Identify strengths and opportunities
  const analysis = identifyStrengthsAndOpportunities(dimensionScores);
  
  // Get lowest dimension for targeted recommendations
  const lowestDimension = getLowestDimension(dimensionScores);
  
  return {
    globalScore,
    globalLevel: interpretLevel(globalScore),
    dimensionScores: dimensionLevels,
    topStrengths: analysis.topStrengths.map(item => ({
      dimension: getDimensionName(item.dimension),
      dimensionId: item.dimension,
      score: item.score
    })),
    topOpportunities: analysis.topOpportunities.map(item => ({
      dimension: getDimensionName(item.dimension),
      dimensionId: item.dimension,
      score: item.score
    })),
    recommendationFocus: lowestDimension,
    profile: {
      name: responses.name || 'Participante',
      email: responses.email,
      country: responses.country,
      role: responses.role,
      teamSize: responses.teamSize
    }
  };
}

// Export functions for use in different environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    calculateDimensionScore,
    calculateGlobalScore,
    interpretLevel,
    getLevelDescription,
    identifyStrengthsAndOpportunities,
    getDimensionName,
    getLowestDimension,
    scoreAssessment
  };
}
