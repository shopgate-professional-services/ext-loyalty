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

  }),
};

export const Coupons = () => {
  const { View, AppBar } = useTheme();
  return (
    <View>
      <AppBar title="ps_loyalty.coupon.title" />
      <Tabs>
        <Tab title={i18n.text('#COUPONS')} key="coupons">
          <MyCoupons />
        </Tab>
        <Tab title={i18n.text('#EINLÖSEN')} key="points">
          <RedeemCoupons />
        </Tab>
      </Tabs>
    </View>
  );
};

export default () => (
  <Route
    pattern={LOYALTY_COUPONS_ROUTE}
    component={Coupons}
  />
);
