import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { connect } from 'react-redux';
import { useTheme, i18n } from '@shopgate/engage/core';
import { themeConfig } from '@shopgate/engage';
import {
  AccountBoxIcon, BarcodeScannerIcon, Grid, Route,
} from '@shopgate/engage/components';
import { isUserLoggedIn, LOGIN_PATH } from '@shopgate/engage/user';
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
 * @param {Object} params .
 * @returns {JSX}
 */
const InitAccount = ({ isLoggedIn }) => {
  const { View, AppBar } = useTheme();

  return (
    <View>
      <AppBar title="ps_loyalty.loyalty_card.title" />
      <div className={styles.content}>
        <div className={styles.logo}>
          <DonationIcon size={54} />
        </div>
        <div className={styles.intro}>
          {i18n.text('ps_loyalty.init_account.intro')}
        </div>
        <div className={styles.text}>
          {i18n.text('ps_loyalty.init_account.text')}
        </div>

        <Grid className={styles.grid}>
          <Grid.Item shrink={0} className={styles.gridIconCard}>
            <CardIcon size={24} />
          </Grid.Item>
          <Grid.Item grow={1}>
            {i18n.text('ps_loyalty.init_account.card')}
          </Grid.Item>
        </Grid>
        <Grid className={styles.grid}>
          <Grid.Item shrink={0} className={styles.gridIcon}>
            <DiscountIcon size={24} />
          </Grid.Item>
          <Grid.Item grow={1}>
            {i18n.text('ps_loyalty.init_account.bonuses')}
          </Grid.Item>
        </Grid>
        <Grid className={styles.grid}>
          <Grid.Item shrink={0} className={styles.gridIcon}>
            <PointsIcon size={24} />
          </Grid.Item>
          <Grid.Item grow={1}>
            {i18n.text('ps_loyalty.init_account.points')}
          </Grid.Item>
        </Grid>

        <br />

        <IconLink
          href={SCANNER_ROUTE}
          icon={BarcodeScannerIcon}
          label={i18n.text('ps_loyalty.init_account.scan')}
        />
        {isLoggedIn === false &&
          <IconLink
            href={LOGIN_PATH}
            icon={AccountBoxIcon}
            label={i18n.text('ps_loyalty.init_account.login')}
          />
        }
      </div>
    </View>
  );
};

InitAccount.propTypes = {
  isLoggedIn: PropTypes.bool,
};

InitAccount.defaultProps = {
  isLoggedIn: null,
};

/**
 * Maps state to props.
 * @param {Object} state State.
 * @returns {Object}
 */
const mapStateToProps = state => ({
  isLoggedIn: isUserLoggedIn(state),
});

export default () => (
  <Route
    pattern={LOYALTY_INIT_ACCOUNT_ROUTE}
    component={connect(mapStateToProps)(InitAccount)}
  />
);
