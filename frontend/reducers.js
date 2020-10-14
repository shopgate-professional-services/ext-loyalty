import { SUCCESS_LOGOUT } from '@shopgate/engage/core';
import {
  RECEIVE_LOYALTY_ACCOUNT_INFO,
  RECEIVE_LOYALTY_POINTS_HISTORY,
  RECEIVE_LOYALTY_COUPONS,
  RECEIVE_LOYALTY_USER_COUPONS,
} from './constants';

/**
 * Loyalty reducer.
 * @param {Object} state State.
 * @param {Object} action Action.
 * @returns {Object}
 */
const loyaltyReducer = (
  state = {
    account: null,
    history: null,
    coupons: null,
    userCoupons: null,
  },
  action
) => {
  switch (action.type) {
    case RECEIVE_LOYALTY_ACCOUNT_INFO:
      return {
        ...state,
        account: action.payload,
      };
    case RECEIVE_LOYALTY_POINTS_HISTORY:
      return {
        ...state,
        history: action.payload,
      };
    case RECEIVE_LOYALTY_COUPONS:
      return {
        ...state,
        coupons: action.payload,
      };
    case RECEIVE_LOYALTY_USER_COUPONS:
      return {
        ...state,
        userCoupons: action.payload,
      };
    case SUCCESS_LOGOUT:
      return {
        ...state,
        account: null,
        history: null,
        coupons: null,
        userCoupons: null,
      };
    default:
      return state;
  }
};

export default loyaltyReducer;
