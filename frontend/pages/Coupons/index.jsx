import React from 'react';
import { css } from 'glamor';
import { useTheme } from '@shopgate/engage/core';
import { SurroundPortals, Route } from '@shopgate/engage/components';
import { LOYALTY_COUPONS_ROUTE } from '../../constants';
import CouponsList from '../../components/CouponsList';

const styles = {
  content: css({

  }),
  coupons: css({
    padding: '1rem',
  }),
};

/**
 * @returns {JSX}
 */
const Coupons = () => {
  const { View, AppBar } = useTheme();

  return (
    <View>
      <AppBar title="ps_loyalty.coupons.title" />
      <div className={styles.content}>
        <SurroundPortals portalName="ps-loyalty.coupons.page">
          <div className={styles.coupons}>
            <CouponsList />
          </div>
        </SurroundPortals>
      </div>
    </View>
  );
};

export default () => (
  <Route
    pattern={LOYALTY_COUPONS_ROUTE}
    component={Coupons}
  />
);
