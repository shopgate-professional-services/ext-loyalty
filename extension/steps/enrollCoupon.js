const { coupons } = require('../mocks')

/**
 * @returns {Promise<{account}>}
 */
module.exports = async (context, { code }) => {
  const userCoupons = await context.storage.device.get('user.coupons')

  const found = userCoupons.find(c => c.code === code)
  if (found) {
    // Do nothing
    return
  }

  const account = await context.storage.device.get('account')

  const coupon = coupons.find(c => c.code === code)
  if (coupon.enrollPoints > account.points) {
    throw new Error('ps_loyalty.coupon.enrollError')
  }

  account.points -= coupon.enrollPoints
  await context.storage.device.set('account', account)

  userCoupons.push(coupons.find(c => c.code === code))
  await context.storage.device.set('user.coupons', userCoupons)

  const userPointsHistory = await context.storage.device.get('user.pointsHistory') || []
  userPointsHistory.unshift({
    code: coupon.code,
    label: coupon.label,
    image: coupon.image,
    date: new Date().toISOString(),
    type: 'redeemed',
    value: coupon.enrollPoints,
    customAttributes: {}
  })
  await context.storage.device.set('user.pointsHistory', userPointsHistory)
}
