import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { Link } from '@shopgate/engage/components';
import SurroundPortals from '@shopgate/pwa-common/components/SurroundPortals';
import connect from './connector';

const styles = {
  container: css({

  }).toString(),
};

/**
 * @returns {JSX}
 */
const CouponList = ({ coupons }) => {
  if (!coupons || !coupons.length) {
    // TODO:
    return <h1>No coupons found</h1>;
  }
  // TODO: check for loading state

  // TODO: add Portals
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
  coupons: PropTypes.arrayOf(PropTypes.shape()),
};

CouponList.defaultProps = {
  coupons: null,
};

export default connect(CouponList);
