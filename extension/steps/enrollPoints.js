const { enrollPoints } = require('../mocks')

/**
 * @returns {Promise<{account}>}
 */
module.exports = async (context, { code }) => {
  const account = await context.storage.device.get('account')

  account.points += enrollPoints.value
  await context.storage.device.set('account', account)

  const userPointsHistory = await context.storage.device.get('user.pointsHistory') || []
  userPointsHistory.unshift({
    code: code,
    ...enrollPoints,
    date: new Date().toISOString(),
    type: 'earned'
  })
  await context.storage.device.set('user.pointsHistory', userPointsHistory)
}
