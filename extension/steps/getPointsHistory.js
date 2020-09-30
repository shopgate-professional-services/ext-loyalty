const { pointsHistory } = require('../mocks')

/**
 * @returns {Promise<{account}>}
 */
module.exports = async () => ({
  history: pointsHistory
})
