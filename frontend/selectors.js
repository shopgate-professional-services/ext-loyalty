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
  (state) => {
    if (!state.accountInfo) {
      return null;
    }

    return state.accountInfo;
  }
);

export const getPointsHistory = createSelector(
  getExtensionsState,
  (state) => {
    if (!state.history) {
      return null;
    }

    return state.history;
  }
);

export const getCoupons = createSelector(
  getExtensionsState,
  (state) => {
    if (!state.coupons) {
      return null;
    }

    return state.coupons;
  }
);

