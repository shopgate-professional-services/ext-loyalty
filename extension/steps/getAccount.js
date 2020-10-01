const { accountInfo } = require('../mocks')

/**
 * @returns {Promise<{account}>}
 */
module.exports = async (context) => {
  const account = await context.storage.device.get('loyalty_account')
  if (!account) {
    const err = new Error('Account not yet activated')
    err.code = 'EACCESS'
    throw err
  }

  return {
    account: {
      ...accountInfo,
      ...account
    }
  }
}
