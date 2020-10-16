import { LoadingProvider } from '@shopgate/pwa-common/providers';
import PipelineRequest from '@shopgate/pwa-core/classes/PipelineRequest';
import {
  LOYALTY_COUPONS_ROUTE, LOYALTY_POINTS_HISTORY_ROUTE, LOYALTY_ROUTE, LOYALTY_INIT_ACCOUNT_ROUTE,
} from './constants';
import {
  requestLoyaltyAccountInfo,
  receiveAccountInfo,
  errorAccountInfo,
  errorPointsHistory,
  receivePointsHistory,
  requestLoyaltyPointsHistory,
  requestUserCoupons,
  receiveUserCoupons,
  errorUserCoupons,
  requestInitAccount,
  successInitAccount,
  errorInitAccount,
  requestCoupons,
  receiveCoupons,
  errorCoupons,
  successEnrollCoupon,
  errorEnrollCoupon, successEnrollPoints, errorEnrollPoints,
} from './action-creators';

/**
 * @param {Object} props .
 * @returns {Function}
 */
export const initAccount = props => (dispatch) => {
  LoadingProvider.setLoading(LOYALTY_INIT_ACCOUNT_ROUTE);
  dispatch(requestInitAccount());

  const request = new PipelineRequest('shopgate-project.loyalty.initAccount')
    .setInput(props)
    .dispatch();

  request
    .then(() => dispatch(successInitAccount()))
    .catch(error => dispatch(errorInitAccount(error)))
    .then(() => LoadingProvider.unsetLoading(LOYALTY_INIT_ACCOUNT_ROUTE));

  return request;
};

/**
 * @returns {function(*, *): Promise}
 */
export const fetchAccountInfo = () => (dispatch) => {
  LoadingProvider.setLoading(LOYALTY_ROUTE);
  dispatch(requestLoyaltyAccountInfo());

  const request = new PipelineRequest('shopgate-project.loyalty.getAccount').dispatch();

  request
    .then(({ account }) => dispatch(receiveAccountInfo(account)))
    .catch(error => dispatch(errorAccountInfo(error)))
    .then(() => LoadingProvider.unsetLoading(LOYALTY_ROUTE));

  return request;
};

/**
 * @returns {function(*, *): Promise}
 */
export const fetchPointsHistory = () => (dispatch) => {
  LoadingProvider.setLoading(LOYALTY_POINTS_HISTORY_ROUTE);
  dispatch(requestLoyaltyPointsHistory());

  const request = new PipelineRequest('shopgate-project.loyalty.getPointsHistory').dispatch();

  request
    .then(({ history }) => dispatch(receivePointsHistory(history)))
    .catch(error => dispatch(errorPointsHistory(error)))
    .then(() => LoadingProvider.unsetLoading(LOYALTY_POINTS_HISTORY_ROUTE));

  return request;
};

/**
 * @returns {function(*): Promise}
 */
export const fetchCoupons = () => (dispatch) => {
  LoadingProvider.setLoading(LOYALTY_COUPONS_ROUTE);
  dispatch(requestCoupons());

  const request = new PipelineRequest('shopgate-project.loyalty.getCoupons').dispatch();

  request
    .then(({ coupons }) => dispatch(receiveCoupons(coupons)))
    .catch(error => dispatch(errorCoupons(error)))
    .then(() => LoadingProvider.unsetLoading(LOYALTY_COUPONS_ROUTE));

  return request;
};

/**
 * @returns {function(*): Promise}
 */
export const fetchUserCoupons = () => (dispatch) => {
  LoadingProvider.setLoading(LOYALTY_COUPONS_ROUTE);
  dispatch(requestUserCoupons());

  const request = new PipelineRequest('shopgate-project.loyalty.getUserCoupons').dispatch();

  request
    .then(({ coupons }) => dispatch(receiveUserCoupons(coupons)))
    .catch(error => dispatch(errorUserCoupons(error)))
    .then(() => LoadingProvider.unsetLoading(LOYALTY_COUPONS_ROUTE));

  return request;
};

/**
 * @param {Object} props .
 * @returns {function(*): Promise}
 */
export const enrollCoupon = props => (dispatch) => {
  LoadingProvider.setLoading(LOYALTY_COUPONS_ROUTE);

  const request = new PipelineRequest('shopgate-project.loyalty.enrollCoupon')
    .setInput(props)
    .dispatch();

  request
    .then(() => dispatch(successEnrollCoupon(props)))
    .catch(error => dispatch(errorEnrollCoupon(error)))
    .then(() => LoadingProvider.unsetLoading(LOYALTY_COUPONS_ROUTE));

  return request;
};

/**
 * @param {Object} props .
 * @returns {function(*): Promise}
 */
export const enrollPoints = props => (dispatch) => {
  LoadingProvider.setLoading(LOYALTY_ROUTE);

  const request = new PipelineRequest('shopgate-project.loyalty.enrollPoints')
    .setInput(props)
    .dispatch();

  request
    .then(() => dispatch(successEnrollPoints(props)))
    .catch(error => dispatch(errorEnrollPoints(error)))
    .then(() => LoadingProvider.unsetLoading(LOYALTY_ROUTE));

  return request;
};

