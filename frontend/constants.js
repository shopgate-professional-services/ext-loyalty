import { getScannerRoute } from '@shopgate/pwa-common-commerce/scanner/helpers';
import { SCANNER_TYPE_BARCODE } from '@shopgate/pwa-core/constants/Scanner';

// TODO: TYPE_QR CODE support needed in first version?

export const SCANNER_SCOPE = '@shopgate-project/Loyalty';
export const SCANNER_ROUTE = getScannerRoute(SCANNER_SCOPE, SCANNER_TYPE_BARCODE);

export const LOYALTY_ROUTE = '/loyalty';
export const LOYALTY_HISTORY_ROUTE = '/loyalty/history';
export const LOYALTY_COUPONS_ROUTE = '/loyalty/coupons';

export const RECEIVE_LOYALTY_ACCOUNT_INFO = 'RECEIVE_LOYALTY_ACCOUNT_INFO';
export const REQUEST_LOYALTY_ACCOUNT_INFO = 'REQUEST_LOYALTY_ACCOUNT_INFO';
export const ERROR_LOYALTY_ACCOUNT_INFO = 'ERROR_LOYALTY_ACCOUNT_INFO';

export const RECEIVE_LOYALTY_POINTS_HISTORY = 'RECEIVE_LOYALTY_POINTS_HISTORY';
export const REQUEST_LOYALTY_POINTS_HISTORY = 'REQUEST_LOYALTY_POINTS_HISTORY';
export const ERROR_LOYALTY_POINTS_HISTORY = 'ERROR_LOYALTY_POINTS_HISTORY';

export const RECEIVE_LOYALTY_COUPONS = 'RECEIVE_LOYALTY_COUPONS';
export const REQUEST_LOYALTY_COUPONS = 'REQUEST_LOYALTY_COUPONS';
export const ERROR_LOYALTY_COUPONS = 'ERROR_LOYALTY_COUPONS';

