import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import Barcode from 'react-barcode';
import QRCode from 'qrcode.react';
import { Route, Link, SurroundPortals } from '@shopgate/engage/components';
import { useTheme, i18n } from '@shopgate/engage/core';
import {
  LOYALTY_COUPONS_ROUTE, LOYALTY_POINTS_HISTORY_ROUTE, LOYALTY_ROUTE, SCANNER_ROUTE,
} from '../../constants';
import { barcodeFormat, showQrCodeInstead } from '../../config';
import { withFetchAccount } from '../../hocs';

const styles = {
  container: css({

  }).toString(),
};

/**
 * @returns {JSX}
 */
const Account = ({ account, fetchAccountInfo }) => {
  const { View, AppBar } = useTheme();

  useEffect(() => fetchAccountInfo(), [fetchAccountInfo]);

  if (!account) {
    // TODO:
    return <h1>Error. Please login</h1>;
  }

  return (
    <View>
      <AppBar title="ps_loyalty.loyalty_card.title" />
      <div className={styles.container}>
        <SurroundPortals portalName="ps-loyalty.index.page">
          <p>
            Sie haben
            {account.points}
            {' '}
Punkte.
          </p>
          <p>
Ihre Kundennummer ist:
            {account.code}
.
          </p>
          <p>
Ihr Kartennummer ist:
            {account.card.code}
.
          </p>

          <SurroundPortals
            portalName="ps-loyalty.index.card"
            portalProps={{
              card: account.card,
            }}
          >
            {showQrCodeInstead ? (
              <QRCode
                value={account.card.code}
              />
            ) : (
              <Barcode
                format={barcodeFormat}
                value={account.card.code}
                displayValue
              />
            )}
          </SurroundPortals>

          <SurroundPortals portalName="ps-loyalty.index.links">
            <Link href={SCANNER_ROUTE}>Scanner</Link>
            <Link href={LOYALTY_COUPONS_ROUTE}>Coupons</Link>
            <Link href={LOYALTY_POINTS_HISTORY_ROUTE}>History</Link>
          </SurroundPortals>
        </SurroundPortals>
      </div>
    </View>
  );
};

Account.propTypes = {
  fetchAccountInfo: PropTypes.func.isRequired,
  account: PropTypes.shape(),
};

Account.defaultProps = {
  account: null,
};

export default () => (
  <Route pattern={LOYALTY_ROUTE} component={withFetchAccount(Account)} />
);
