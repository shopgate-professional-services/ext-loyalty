const { accountInfo } = require('../mocks')

/**
 * @returns {Promise<{void}>}
 */
module.exports = async (context, input) => {
  await context.storage.device.set('account', {
    ...input,
    ...accountInfo
  })

  // Clean up mock data
  await context.storage.device.del('user.coupons')
  await context.storage.device.del('user.pointsHistory')
}
