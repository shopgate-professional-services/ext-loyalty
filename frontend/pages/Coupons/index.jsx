import React from 'react';
import { css } from 'glamor';
import { Route } from '@shopgate/pwa-common/components';
import { useTheme } from '@shopgate/engage/core';
import SurroundPortals from '@shopgate/pwa-common/components/SurroundPortals';
import { LOYALTY_COUPONS_ROUTE } from '../../constants';
import CouponList from '../../components/CouponList';

const styles = {
  container: css({

  }).toString(),
};

/**
 * @returns {JSX}
 */
const Coupons = () => {
  const { View, AppBar } = useTheme();

  return (
    <View>
      <AppBar title="ps_loyalty.coupons.title" />
      <div className={styles.container}>
        <SurroundPortals portalName="ps-loyalty.coupons.page">
          <CouponList />
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
