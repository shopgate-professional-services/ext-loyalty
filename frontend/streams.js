import { main$, routeDidEnter$, routeDidLeave$ } from '@shopgate/pwa-common/streams';
import { SCANNER_PATH } from '@shopgate/pwa-common-commerce/scanner/constants';
import {
  LOYALTY_COUPONS_ROUTE,
  LOYALTY_HISTORY_ROUTE,
  LOYALTY_ROUTE,
} from './constants';

export const loyaltyDidEnter$ = routeDidEnter$
  .filter(({ action }) => action.route.pathname === LOYALTY_ROUTE);

export const pointsHistoryDidEnter$ = routeDidEnter$
  .filter(({ action }) => action.route.pathname === LOYALTY_HISTORY_ROUTE);

export const loyaltyCouponsDidEnter$ = routeDidEnter$
  .filter(({ action }) => action.route.pathname === LOYALTY_COUPONS_ROUTE);

export const scannerDidEnter$ = routeDidEnter$
  .filter(({ action }) => action.route.pattern === SCANNER_PATH);
