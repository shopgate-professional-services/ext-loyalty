const { pointsHistory } = require('../mocks')

/**
 * @returns {Promise<{account}>}
 */
module.exports = async (context) => {
  const userPointsHistory = await context.storage.device.get('user.pointsHistory') || []

  return {
    history: [].concat(userPointsHistory, pointsHistory)
  }
}
