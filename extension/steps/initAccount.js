/**
 * @returns {Promise<{void}>}
 */
module.exports = async (context, input) => {
  await context.storage.device.set('loyalty_account', input)
}
