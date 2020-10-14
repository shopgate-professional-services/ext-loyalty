const { coupons } = require('../mocks')
const getUserCoupons = require('./getUserCoupons')

/**
 * @returns {Promise<{account}>}
 */
module.exports = async (context) => {
  const { coupons: userCoupons } = await getUserCoupons(context)
  const ids = userCoupons.map(c => c.code)

  return {
    coupons: coupons.filter(c => !ids.includes(c.code))
  }
}
