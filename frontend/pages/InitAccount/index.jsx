import React from 'react';
import { css } from 'glamor';
import { useTheme, i18n } from '@shopgate/engage/core';
import { themeConfig } from '@shopgate/engage';
import {
  AccountBoxIcon, BarcodeScannerIcon, Grid, Route,
} from '@shopgate/engage/components';
import { LOYALTY_INIT_ACCOUNT_ROUTE, SCANNER_ROUTE } from '../../constants';
import DonationIcon from '../../components/Icons/DonationIcon';
import CardIcon from '../../components/Icons/CardIcon';
import DiscountIcon from '../../components/Icons/DiscountIcon';
import PointsIcon from '../../components/Icons/PointsIcon';
import IconLink from '../../components/IconLink';

const styles = {
  content: css({
    margin: '1.5rem',
  }),
  logo: css({
    display: 'flex',
    justifyContent: 'center',
    margin: '1rem 0 2rem',
    color: themeConfig.colors.primary,
  }),
  intro: css({
    fontWeight: 600,
    fontSize: '1.5rem',
    lineHeight: '135.72%',
    textAlign: 'center',
    color: '#232323',
    marginBottom: '1.5rem',
  }),
  text: css({
    color: '#626F77',
    margin: '1rem 0',
  }),
  grid: css({
    margin: '0 0 0.5rem',
    alignItems: 'center',
  }).toString(),
  gridIcon: css({
    width: '36px',
    color: themeConfig.colors.primary,
  }).toString(),
  gridIconCard: css({
    width: '36px',
    color: themeConfig.colors.primary,
    marginTop: 4,
  }).toString(),
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
        <div className={styles.logo}>
          <DonationIcon size={54} />
        </div>
        <div className={styles.intro}>
          {i18n.text('Bitte melde dich für unseren Treupunkte bereich an.')}
        </div>
        <div className={styles.text}>
          {i18n.text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')}
        </div>

        <Grid className={styles.grid}>
          <Grid.Item shrink={0} className={styles.gridIconCard}>
            <CardIcon size={24} />
          </Grid.Item>
          <Grid.Item grow={1}>
            {i18n.text('Digitale Kundenkarte')}
          </Grid.Item>
        </Grid>
        <Grid className={styles.grid}>
          <Grid.Item shrink={0} className={styles.gridIcon}>
            <DiscountIcon size={24} />
          </Grid.Item>
          <Grid.Item grow={1}>
            {i18n.text('Exklusive Rabattaktionen')}
          </Grid.Item>
        </Grid>
        <Grid className={styles.grid}>
          <Grid.Item shrink={0} className={styles.gridIcon}>
            <PointsIcon size={24} />
          </Grid.Item>
          <Grid.Item grow={1}>
            {i18n.text('Punkte sammeln und einlösen')}
          </Grid.Item>
        </Grid>

        <br />

        <IconLink
          href={SCANNER_ROUTE}
          icon={BarcodeScannerIcon}
          label={i18n.text('Treuekarte scannen')}
        />
        <IconLink
          href={SCANNER_ROUTE}
          icon={AccountBoxIcon}
          label={i18n.text('Einloggen')}
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
