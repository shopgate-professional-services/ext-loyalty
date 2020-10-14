import React from 'react';
import { css } from 'glamor';
import { SurroundPortals } from '@shopgate/engage/components';
import UserCouponsList from '../../../components/UserCouponsList';

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
        <UserCouponsList />
      </div>
    </SurroundPortals>
  </div>
);

export default MyCoupons;
