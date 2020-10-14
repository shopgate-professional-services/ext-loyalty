import {
  REQUEST_INIT_ACCOUNT,
  SUCCESS_INIT_ACCOUNT,
  ERROR_INIT_ACCOUNT,
  RECEIVE_LOYALTY_ACCOUNT_INFO,
  REQUEST_LOYALTY_ACCOUNT_INFO,
  ERROR_LOYALTY_ACCOUNT_INFO,
  RECEIVE_LOYALTY_POINTS_HISTORY,
  ERROR_LOYALTY_POINTS_HISTORY,
  REQUEST_LOYALTY_POINTS_HISTORY,
  REQUEST_LOYALTY_COUPONS,
  RECEIVE_LOYALTY_COUPONS,
  ERROR_LOYALTY_COUPONS,
  REQUEST_LOYALTY_USER_COUPONS,
  RECEIVE_LOYALTY_USER_COUPONS,
  ERROR_LOYALTY_USER_COUPONS,
  SUCCESS_LOYALTY_ENROLL_COUPON,
  ERROR_LOYALTY_ENROLL_COUPON,
} from './constants';

/**
 * @returns {Object}
 */
export const requestInitAccount = () => ({
  type: REQUEST_INIT_ACCOUNT,
});

/**
 * @returns {Object}
 */
export const successInitAccount = () => ({
  type: SUCCESS_INIT_ACCOUNT,
});

/**
 * @returns {Object}
 */
export const errorInitAccount = error => ({
  type: ERROR_INIT_ACCOUNT,
  error,
});

/**
 * Request LoyaltyAccountInfo.
 * @returns {Object}
 */
export const requestLoyaltyAccountInfo = () => ({
  type: REQUEST_LOYALTY_ACCOUNT_INFO,
});

/**
 * Receive LoyaltyAccountInfo.
 * @param {Object} payload Payload.
 * @returns {Object}
 */
export const receiveAccountInfo = payload => ({
  type: RECEIVE_LOYALTY_ACCOUNT_INFO,
  payload,
});

/**
 * Error LoyaltyAccountInfo.
 * @returns {Object}
 */
export const errorAccountInfo = () => ({
  type: ERROR_LOYALTY_ACCOUNT_INFO,
});

/**
 * Request PointsHistory.
 * @returns {Object}
 */
export const requestLoyaltyPointsHistory = () => ({
  type: REQUEST_LOYALTY_POINTS_HISTORY,
});

/**
 * Receive PointsHistory.
 * @param {Object} payload Payload.
 * @returns {Object}
 */
export const receivePointsHistory = payload => ({
  type: RECEIVE_LOYALTY_POINTS_HISTORY,
  payload,
});

/**
 * Error LoyaltyPointsHistory.
 * @returns {Object}
 */
export const errorPointsHistory = () => ({
  type: ERROR_LOYALTY_POINTS_HISTORY,
});

/**
 * Request Coupons.
 * @returns {Object}
 */
export const requestCoupons = () => ({
  type: REQUEST_LOYALTY_COUPONS,
});

/**
 * Receive Coupons.
 * @param {Object} payload Payload.
 * @returns {Object}
 */
export const receiveCoupons = payload => ({
  type: RECEIVE_LOYALTY_COUPONS,
  payload,
});

/**
 * Error Coupons.
 * @returns {Object}
 */
export const errorCoupons = () => ({
  type: ERROR_LOYALTY_COUPONS,
});

/**
 * Request Coupons.
 * @returns {Object}
 */
export const requestUserCoupons = () => ({
  type: REQUEST_LOYALTY_USER_COUPONS,
});

/**
 * Receive Coupons.
 * @param {Object} payload Payload.
 * @returns {Object}
 */
export const receiveUserCoupons = payload => ({
  type: RECEIVE_LOYALTY_USER_COUPONS,
  payload,
});

/**
 * Error Coupons.
 * @returns {Object}
 */
export const errorUserCoupons = () => ({
  type: ERROR_LOYALTY_USER_COUPONS,
});

/**
 * @returns {Object}
 */
export const successEnrollCoupon = () => ({
  type: SUCCESS_LOYALTY_ENROLL_COUPON,
});

/**
 * @param {Error} error .
 * @returns {Object}
 */
export const errorEnrollCoupon = error => ({
  type: ERROR_LOYALTY_ENROLL_COUPON,
  error,
});

