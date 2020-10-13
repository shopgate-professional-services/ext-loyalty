import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { SurroundPortals } from '@shopgate/engage/components';
import CouponsList from '../../../components/CouponsList';

const styles = {
  content: css({

  }),
  coupons: css({
    padding: '1rem',
  }),
};

const RedeemCoupons = () => (
  <div className={styles.content}>
    <SurroundPortals portalName="ps-loyalty.coupons.redeem-coupons">
      <div className={styles.coupons}>
        <CouponsList redeemMode />
      </div>
    </SurroundPortals>
  </div>
);

export default RedeemCoupons;
