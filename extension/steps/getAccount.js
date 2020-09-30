const { accountInfo } = require('../mocks')

/**
 * @returns {Promise<{account}>}
 */
module.exports = async () => ({
  account: accountInfo
})
