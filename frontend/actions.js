import { logger } from '@shopgate/engage/core';
import { ERROR_HANDLE_SUPPRESS } from '@shopgate/pwa-core/constants/ErrorHandleTypes';
import { LoadingProvider } from '@shopgate/pwa-common/providers';
import PipelineRequest from '@shopgate/pwa-core/classes/PipelineRequest';
import { LOYALTY_COUPONS_ROUTE, LOYALTY_HISTORY_ROUTE, LOYALTY_ROUTE } from './constants';
import {
  requestLoyaltyAccountInfo,
  receiveLoyaltyAccountInfo,
  errorLoyaltyAccountInfo,
  errorLoyaltyPointsHistory,
  receiveLoyaltyPointsHistory,
  requestLoyaltyPointsHistory, requestLoyaltyCoupons, receiveLoyaltyCoupons, errorLoyaltyCoupons
} from './action-creators';

export const fetchLoyaltyAccountInfo = () => (dispatch, getState) => {
  LoadingProvider.setLoading(LOYALTY_ROUTE);

  dispatch(requestLoyaltyAccountInfo());

  const request = new PipelineRequest('shopgate-project.loyalty.getAccountInfo')
    .dispatch();

  request.then((payload) => {
    dispatch(receiveLoyaltyAccountInfo(payload.account));
    LoadingProvider.unsetLoading(LOYALTY_ROUTE);
  }).catch((err) => {
    logger.error(err);
    dispatch(errorLoyaltyAccountInfo());
    LoadingProvider.unsetLoading(LOYALTY_ROUTE);
  });

  return request;
};

export const fetchPointsHistory = () => (dispatch, getState) => {
  LoadingProvider.setLoading(LOYALTY_HISTORY_ROUTE);

  dispatch(requestLoyaltyPointsHistory());

  const request = new PipelineRequest('shopgate-project.loyalty.getPointsHistory')
    .dispatch();

  request.then((payload) => {
    dispatch(receiveLoyaltyPointsHistory(payload.history));
    LoadingProvider.unsetLoading(LOYALTY_HISTORY_ROUTE);
  }).catch((err) => {
    logger.error(err);
    dispatch(errorLoyaltyPointsHistory());
    LoadingProvider.unsetLoading(LOYALTY_HISTORY_ROUTE);
  });

  return request;
};

export const fetchLoyaltyCoupons = () => (dispatch) => {
  LoadingProvider.setLoading(LOYALTY_COUPONS_ROUTE);

  dispatch(requestLoyaltyCoupons());

  const request = new PipelineRequest('shopgate-project.loyalty.getCoupons')
    .dispatch();

  request.then((payload) => {
    dispatch(receiveLoyaltyCoupons(payload.coupons));
    LoadingProvider.unsetLoading(LOYALTY_COUPONS_ROUTE);
  }).catch((err) => {
    logger.error(err);
    dispatch(errorLoyaltyCoupons());
    LoadingProvider.unsetLoading(LOYALTY_COUPONS_ROUTE);
  });

  return request;
};
