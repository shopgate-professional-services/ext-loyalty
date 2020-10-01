import { connect } from 'react-redux';
import { getCoupons, getPointsHistory, getAccountInfo } from './selectors';
import {
  fetchCoupons, initAccount, fetchPointsHistory, fetchAccountInfo,
} from './actions';

export const withInitAccount = connect(null, {
  initAccount,
});

export const withFetchCoupons = connect(state => ({
  coupons: getCoupons(state),
}), {
  fetchCoupons,
});

export const withFetchPointsHistory = connect(state => ({
  history: getPointsHistory(state),
}), {
  fetchPointsHistory,
});

export const withAccount = connect(state => ({
  account: getAccountInfo(state),
}));

export const withFetchAccount = connect(null, {
  fetchAccountInfo,
});
