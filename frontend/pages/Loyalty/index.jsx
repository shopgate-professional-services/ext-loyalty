import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import Barcode from 'react-barcode';
import QRCode from 'qrcode.react';
import { Route } from '@shopgate/pwa-common/components';
import { useTheme } from '@shopgate/engage/core';
import { Link } from '@shopgate/engage/components';
import SurroundPortals from '@shopgate/pwa-common/components/SurroundPortals';
import {
  LOYALTY_COUPONS_ROUTE,
  LOYALTY_HISTORY_ROUTE,
  LOYALTY_ROUTE,
  SCANNER_ROUTE,
} from '../../constants';
import connect from './connector';
import { barcodeFormat, showQrCodeInstead } from '../../config';

const styles = {
  container: css({

  }).toString(),
};

/**
 * @returns {JSX}
 */
const LoyaltyRoute = ({ accountInfo }) => {
  const { View, AppBar } = useTheme();

  if (!accountInfo) {
    // TODO:
    return <h1>Error. Please login</h1>
  }

  return (
    <View>
      <AppBar title="ps_loyalty.loyalty_card.title" />
      <div className={styles.container}>
        <SurroundPortals portalName="ps-loyalty.index.page">
          <p>Sie haben {accountInfo.points} Punkte.</p>
          <p>Ihre Kundennummer ist: {accountInfo.code}.</p>
          <p>Ihr Kartennummer ist: {accountInfo.card.code}.</p>

          <SurroundPortals
            portalName="ps-loyalty.index.card"
            portalProps={{
              card: accountInfo.card,
            }}
          >
            {showQrCodeInstead ? (
              <QRCode
                value={accountInfo.card.code}
              />
            ) : (
              <Barcode
                format={barcodeFormat}
                value={accountInfo.card.code}
                displayValue
              />
            )}
          </SurroundPortals>

          <SurroundPortals portalName="ps-loyalty.index.links">
            <Link href={SCANNER_ROUTE}>Scanner</Link>
            <Link href={LOYALTY_COUPONS_ROUTE}>Coupons</Link>
            <Link href={LOYALTY_HISTORY_ROUTE}>History</Link>
          </SurroundPortals>
        </SurroundPortals>
      </div>
    </View>
  );
};

LoyaltyRoute.propTypes = {
  accountInfo: PropTypes.shape(),
};

LoyaltyRoute.defaultProps = {
  accountInfo: null,
};

export default () => (
  <Route pattern={LOYALTY_ROUTE} component={connect(LoyaltyRoute)} />
);
