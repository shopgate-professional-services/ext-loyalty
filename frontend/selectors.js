import { createSelector } from 'reselect';

const REDUCER_KEY = '@shopgate-project/loyalty/loyalty';

/**
 * Gets extensions state
 * @param {Object} state State.
 * @returns {Object}
 */
export const getExtensionsState = (state) => {
  if (!state.extensions[REDUCER_KEY]) {
    return {};
  }
  return state.extensions[REDUCER_KEY];
};

export const getAccountInfo = createSelector(
  getExtensionsState,
  ({ account }) => account || null
);

export const getPointsHistory = createSelector(
  getExtensionsState,
  ({ history }) => history || null
);

export const getCoupons = createSelector(
  getExtensionsState,
  ({ coupons }) => coupons || null
);

export const getUserCoupons = createSelector(
  getExtensionsState,
  ({ userCoupons: coupons }) => coupons || null
);

