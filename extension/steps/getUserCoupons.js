const { userCoupons } = require('../mocks')

/**
 * @returns {Promise<{account}>}
 */
module.exports = async (context) => {
  let storedCoupons = await context.storage.device.get('user.coupons')
  if (!storedCoupons) {
    // Mock initial user coupons
    await context.storage.device.set('user.coupons', userCoupons)
    storedCoupons = userCoupons
  }

  return {
    coupons: storedCoupons
  }
}
