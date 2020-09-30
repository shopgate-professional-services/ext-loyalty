import React from 'react';
import { css } from 'glamor';
import { useTheme, i18n } from '@shopgate/engage/core';
import { themeConfig } from '@shopgate/engage';
import {
  AccountBoxIcon, BarcodeScannerIcon, Grid, Route,
} from '@shopgate/engage/components';
import { getScannerRoute } from '@shopgate/engage/scanner';
import { LOYALTY_INIT_ACCOUNT_ROUTE, SCANNER_SCOPE } from '../../constants';
import DonationIcon from '../../components/Icons/DonationIcon';
import CardIcon from '../../components/Icons/CardIcon';
import DiscountIcon from '../../components/Icons/DiscountIcon';
import PointsIcon from '../../components/Icons/PointsIcon';
import IconLink from '../../components/IconLink';

const styles = {
  content: css({
    margin: '1.5rem',
  }),
  icon: css({
    display: 'flex',
    justifyContent: 'center',
    margin: '1rem',
    color: themeConfig.colors.primary,
  }),
  intro: css({
    fontWeight: 600,
    fontSize: '1.5rem',
    lineHeight: '135.72%',
    textAlign: 'center',
    color: '#232323',
    marginBottom: '1rem',
  }),
  text: css({
    color: '#626F77',
    margin: '0 1rem 1rem',
  }),
  linkIcon: css({
    marginBottom: '0.5rem',
  }),
  grid: css({
    margin: '0 0 0.5rem',
    ' > *:first-child': {
      width: '36px',
    },
    ' > *:first-child svg': {
      marginTop: '4px',
    },
  }),
};

/**
 * @returns {JSX}
 */
const InitAccount = () => {
  const { View, AppBar } = useTheme();

  return (
    <View>
      <AppBar title="ps_loyalty.loyalty_card.title" />
      <div className={styles.content}>
        <div className={styles.icon}>
          <DonationIcon size={54} />
        </div>
        <div className={styles.intro}>
          {i18n.text('Bitte melde dich für unseren Treupunkte bereich an.')}
        </div>
        <div className={styles.text}>
          {i18n.text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')}
        </div>

        <Grid className={styles.grid}>
          <Grid.Item shrink={0}>
            <CardIcon size={24} />
          </Grid.Item>
          <Grid.Item grow={1}>
            {i18n.text('Digitale Kundenkarte')}
          </Grid.Item>
        </Grid>
        <Grid className={styles.grid}>
          <Grid.Item shrink={0}>
            <DiscountIcon size={24} />
          </Grid.Item>
          <Grid.Item grow={1}>
            {i18n.text('Exklusive Rabattaktionen')}
          </Grid.Item>
        </Grid>
        <Grid className={styles.grid}>
          <Grid.Item shrink={0}>
            <PointsIcon size={24} />
          </Grid.Item>
          <Grid.Item grow={1}>
            {i18n.text('Punkte sammeln und einlösen')}
          </Grid.Item>
        </Grid>

        <IconLink
          href={getScannerRoute(SCANNER_SCOPE)}
          icon={BarcodeScannerIcon}
          label={i18n.text('Treuekarte scannen')}
          className={styles.linkIcon}
        />
        <IconLink
          href={getScannerRoute(SCANNER_SCOPE)}
          icon={AccountBoxIcon}
          label={i18n.text('Einloggen')}
          className={styles.linkIcon}
        />
      </div>
    </View>
  );
};

export default () => (
  <Route
    pattern={LOYALTY_INIT_ACCOUNT_ROUTE}
    component={InitAccount}
  />
);
