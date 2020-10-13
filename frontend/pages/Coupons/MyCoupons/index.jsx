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

const MyCoupons = () => (
  <div className={styles.content}>
    <SurroundPortals portalName="ps-loyalty.coupons.my-coupons">
      <div className={styles.coupons}>
        <CouponsList />
      </div>
    </SurroundPortals>
  </div>
);

export default MyCoupons;
