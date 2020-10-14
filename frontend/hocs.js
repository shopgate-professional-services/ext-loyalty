import { connect } from 'react-redux';
import { addCouponsToCart } from '@shopgate/engage/cart';
import {
  getCoupons, getUserCoupons, getPointsHistory, getAccountInfo,
} from './selectors';
import {
  fetchCoupons, initAccount, fetchPointsHistory, fetchAccountInfo, fetchUserCoupons, enrollCoupon,
} from './actions';

export const withInitAccount = connect(null, {
  initAccount,
});

export const withFetchCoupons = connect(state => ({
  coupons: getCoupons(state),
}), {
  fetchCoupons,
});

export const withFetchUserCoupons = connect(state => ({
  coupons: getUserCoupons(state),
}), {
  fetchUserCoupons,
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

export const withEnrollCoupon = connect(null, {
  enrollCoupon,
});

export const withAddCouponsToCart = connect(null, {
  addCouponsToCart,
});
