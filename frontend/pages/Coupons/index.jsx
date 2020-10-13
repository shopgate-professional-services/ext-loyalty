import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import {
  useTheme, useNavigation, i18n, useRoute,
} from '@shopgate/engage/core';
import { Route } from '@shopgate/engage/components';
import { Tabs, Tab, TabPanel } from '@shopgate/engage/components/Tabs';
import I18n from '@shopgate/pwa-common/components/I18n';
import { TabContext } from '@shopgate/engage/components/Tabs/TabContext';
import { themeConfig } from '@shopgate/pwa-common/helpers/config';
import { responsiveMediaQuery } from '@shopgate/engage/styles';
import { LOYALTY_COUPONS_ROUTE } from '../../constants';
import MyCoupons from './MyCoupons';
import RedeemCoupons from './RedeemCoupons';

const { variables } = themeConfig;

const styles = {
  content: css({

  }),
  coupons: css({
    padding: '1rem',
  }),
};

export const title = css({
  fontSize: '1.5rem',
  padding: variables.gap.big,
}).toString();

export const tabs = css({
  width: '100%',
  top: 0,
  [responsiveMediaQuery('>xs', { webOnly: true })]: {
    top: 64,
  },
  [responsiveMediaQuery('<=xs', { webOnly: true })]: {
    top: 56,
  },
  position: 'sticky',
  background: 'rgb(255, 255, 255)',
  boxShadow: '2px 1px 6px rgba(0, 0, 0, 0.118), 2px 1px 4px rgba(0, 0, 0, 0.118)',
  zIndex: 100,
}).toString();

export const tabPanel = css({
  padding: variables.gap.small,
}).toString();

const TAB_COUPONS = 'coupons';
const TAB_REDEEM = 'redeem';

export const Coupons = () => {
  const { replace } = useNavigation();
  const { View, AppBar } = useTheme();
  const { params: { tab = TAB_COUPONS } } = useRoute();

  return (
    <View>
      <AppBar title="ps_loyalty.coupons.title" />

      <TabContext value={tab}>
        <div
          className={tabs}
        >
          <Tabs
            indicatorColor="primary"
            textColor="primary"
            onChange={(event, newValue) => replace({ pathname: `${LOYALTY_COUPONS_ROUTE}/${newValue}` })}
            aria-label="disabled tabs example"
          >
            <Tab value={TAB_COUPONS} label={i18n.text('#COUPONS')} />

            <Tab value={TAB_REDEEM} label={i18n.text('#EINLÖSEN')} />
          </Tabs>
        </div>
        <TabPanel className={tabPanel} value={TAB_COUPONS}>
          <MyCoupons />
        </TabPanel>
        <TabPanel className={tabPanel} value={TAB_REDEEM}>
          <RedeemCoupons />
        </TabPanel>
      </TabContext>

    </View>
  );
};

export default () => (
  <Route
    pattern={LOYALTY_COUPONS_ROUTE}
    component={Coupons}
  />
);
