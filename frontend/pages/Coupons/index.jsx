import React from 'react';
import { css } from 'glamor';
import { i18n, useTheme } from '@shopgate/engage/core';
import { Route } from '@shopgate/engage/components';
import { LOYALTY_COUPONS_ROUTE } from '../../constants';
import MyCoupons from './MyCoupons';
import RedeemCoupons from './RedeemCoupons';
import Tabs, { Tab } from '../../components/Tabs';

const styles = {
  content: css({
    position: 'relative',
  }),
};

export const Coupons = () => {
  const { View, AppBar } = useTheme();
  return (
    <View>
      <AppBar title="ps_loyalty.coupon.title" />
      <div className={styles.content}>
        <Tabs>
          <Tab title={i18n.text('ps_loyalty.coupon.title')} key="coupons">
            <MyCoupons />
          </Tab>
          <Tab title={i18n.text('ps_loyalty.coupon.enroll')} key="points">
            <RedeemCoupons />
          </Tab>
        </Tabs>
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
