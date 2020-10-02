import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { themeConfig } from '@shopgate/engage';
import { i18n, useTheme } from '@shopgate/engage/core';
import { SurroundPortals, Route, Grid } from '@shopgate/engage/components';
import { LOYALTY_POINTS_HISTORY_ROUTE } from '../../constants';
import PointsHistoryList from '../../components/PointsHistory';
import DiscountIcon from '../../components/Icons/DiscountIcon';
import { withAccount } from '../../hocs';

const styles = {
  header: css({
    color: themeConfig.colors.light,
    background: themeConfig.colors.primary,
    padding: '0.5rem 1rem',
    fontWeight: 600,
    fontSize: '1.125rem',
    display: 'flex',
    alignItems: 'center',
  }).toString(),
  history: css({
    padding: '1rem',
  }),
  headerIcon: css({
    width: '60px',
    display: 'flex',
    justifyContent: 'center',
  }),
  headerPoints: css({
    fontSize: '1.5rem',
    display: 'flex',
    alignItems: 'center',
  }),
};

/**
 * @returns {JSX}
 */
const PointsHistory = ({ account }) => {
  const { View, AppBar } = useTheme();

  return (
    <View>
      <AppBar title="ps_loyalty.history.title" />
      <SurroundPortals portalName="ps-loyalty.points-history.header">
        <Grid className={styles.header}>
          <Grid.Item shrink={0} className={styles.headerIcon}>
            <DiscountIcon size={24} />
          </Grid.Item>
          <Grid.Item grow={1}>
            {i18n.text('Treuepunkte Guthaben')}
          </Grid.Item>
          <Grid.Item shrink={0} className={styles.headerPoints}>
            {!!account && account.points}
          </Grid.Item>
        </Grid>
      </SurroundPortals>
      <SurroundPortals portalName="ps-loyalty.points-history.list">
        <div className={styles.history}>
          <PointsHistoryList />
        </div>
      </SurroundPortals>
    </View>
  );
};

PointsHistory.propTypes = {
  account: PropTypes.shape(),
};

PointsHistory.defaultProps = {
  account: null,
};

export default () => (
  <Route
    pattern={LOYALTY_POINTS_HISTORY_ROUTE}
    component={withAccount(PointsHistory)}
  />
);
