import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { SurroundPortals } from '@shopgate/engage/components';
import { withFetchCoupons } from '../../hocs';

const styles = {
  container: css({

  }).toString(),
};

/**
 * @returns {JSX}
 */
const CouponList = ({ coupons, fetchCoupons }) => {
  useEffect(() => fetchCoupons(), [fetchCoupons]);

  if (!coupons || !coupons.length) {
    return <h1>No coupons found</h1>;
  }

  return (
    <ul>
      {coupons.map(coupon => (
        <li key={coupon.code}>
          <SurroundPortals portalName="ps-loyalty.coupons.coupon-item" portalProps={{ coupon }}>
            <p>{coupon.label}</p>
            <p>{coupon.code}</p>
          </SurroundPortals>
        </li>
      ))}
    </ul>
  );
};

CouponList.propTypes = {
  fetchCoupons: PropTypes.func.isRequired,
  coupons: PropTypes.arrayOf(PropTypes.shape()),
};

CouponList.defaultProps = {
  coupons: null,
};

export default withFetchCoupons(CouponList);
