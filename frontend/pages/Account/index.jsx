import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import Barcode from 'react-barcode';
import QRCode from 'qrcode.react';
import { themeConfig } from '@shopgate/engage';
import { useTheme, i18n, useNavigation } from '@shopgate/engage/core';
import {
  Route, Link, SurroundPortals, Grid, SheetList, BarcodeScannerIcon, PlaceholderParagraph,
} from '@shopgate/engage/components';
import {
  LOYALTY_COUPONS_ROUTE, LOYALTY_INIT_ACCOUNT_ROUTE,
  LOYALTY_POINTS_HISTORY_ROUTE, LOYALTY_ROUTE, SCANNER_ROUTE,
  SCANNER_ROUTE_POINTS,
} from '../../constants';
import { barcodeFormat, showQrCodeInstead } from '../../config';
import { withAccount, withFetchAccount } from '../../hocs';
import Card from '../../components/Card';
import DiscountIcon from '../../components/Icons/DiscountIcon';
import PointsHistoryIcon from '../../components/Icons/PointsHistoryIcon';
import PointsIcon from '../../components/Icons/PointsIcon';

const styles = {
  content: css({
    margin: '1.5rem',
  }),
  card: css({
    margin: '1rem 0',
    padding: '1rem 0',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  }),
  label: css({
    fontWeight: 500,
    fontSize: '0.825rem',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: themeConfig.colors.shade3,
  }),
  points: css({
    margin: '1rem 0',
    fontSize: '4rem',
    color: themeConfig.colors.primary,
  }),
  menu: css({
    marginTop: '2rem',
    ' > li': {
      margin: '1rem 0 0',
      padding: '0.125rem 0 0.125rem',
    },
    ' > li > div': {
      minHeight: 'auto',
    },
  }).toString(),
  linkGrid: css({
    margin: '0 0 0.5rem',
    alignItems: 'center',
  }).toString(),
  linkGridIcon: css({
    width: '36px',
    color: themeConfig.colors.primary,
  }).toString(),

};

/**
 * @returns {JSX}
 */
const Account = ({ account, fetchAccountInfo }) => {
  const { View, AppBar } = useTheme();
  const { replace } = useNavigation();
  useEffect(() => {
    if (!account) {
      fetchAccountInfo().catch(() => (
        replace({ pathname: LOYALTY_INIT_ACCOUNT_ROUTE })
      ));
    }
  }, [account, fetchAccountInfo, replace]);

  return (
    <View>
      <AppBar title="ps_loyalty.loyalty_card.title" />
      <div className={styles.content}>
        <PlaceholderParagraph ready={!!account} lines={3}>
          {!!account && (
            <Fragment>
              <SurroundPortals portalName="ps-loyalty.account.points">
                <Card className={styles.card}>
                  <p className={styles.label}>{i18n.text('ps_loyalty.account.balance')}</p>

                  <div className={styles.points}>
                    {account.points}
                  </div>

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

                  <div className={styles.label}>
                    {i18n.text('ps_loyalty.account.cardNumber')}
                  </div>
                  <div><strong>{account.card.code}</strong></div>
                </Card>
              </SurroundPortals>

              <SurroundPortals portalName="ps-loyalty.account.links">
                <SheetList className={styles.menu}>
                  <Link href={LOYALTY_COUPONS_ROUTE}>
                    <Grid className={styles.linkGrid}>
                      <Grid.Item shrink={0} className={styles.linkGridIcon}>
                        <DiscountIcon size={24} />
                      </Grid.Item>
                      <Grid.Item grow={1}>
                        {i18n.text('ps_loyalty.account.coupons')}
                      </Grid.Item>
                    </Grid>
                  </Link>
                  <Link href={LOYALTY_POINTS_HISTORY_ROUTE}>
                    <Grid className={styles.linkGrid}>
                      <Grid.Item shrink={0} className={styles.linkGridIcon}>
                        <PointsHistoryIcon size={24} />
                      </Grid.Item>
                      <Grid.Item grow={1}>
                        {i18n.text('ps_loyalty.account.pointsHistory')}
                      </Grid.Item>
                    </Grid>
                  </Link>
                  <Link href={SCANNER_ROUTE_POINTS}>
                    <Grid className={styles.linkGrid}>
                      <Grid.Item shrink={0} className={styles.linkGridIcon}>
                        <PointsIcon size={24} />
                      </Grid.Item>
                      <Grid.Item grow={1}>
                        {i18n.text('ps_loyalty.account.scanPoints')}
                      </Grid.Item>
                    </Grid>
                  </Link>
                  <Link href={SCANNER_ROUTE}>
                    <Grid className={styles.linkGrid}>
                      <Grid.Item shrink={0} className={styles.linkGridIcon}>
                        <BarcodeScannerIcon size={24} />
                      </Grid.Item>
                      <Grid.Item grow={1}>
                        {i18n.text('ps_loyalty.init_account.scan')}
                      </Grid.Item>
                    </Grid>
                  </Link>
                  {/* Add extra node for last child border */}
                  <div />
                </SheetList>
              </SurroundPortals>
            </Fragment>
          )}
        </PlaceholderParagraph>
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
  <Route
    pattern={LOYALTY_ROUTE}
    component={withFetchAccount(withAccount(Account))}
  />
);
