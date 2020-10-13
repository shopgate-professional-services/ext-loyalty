import React from 'react';
import { Route } from '@shopgate/engage/components';
import { Coupons } from './index';
import { LOYALTY_COUPONS_TAB_ROUTE } from '../../constants';

export default () => (
  <Route
    pattern={LOYALTY_COUPONS_TAB_ROUTE}
    component={Coupons}
  />
);
