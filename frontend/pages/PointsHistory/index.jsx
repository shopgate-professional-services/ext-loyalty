import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { Route } from '@shopgate/pwa-common/components';
import { useTheme } from '@shopgate/engage/core';
import SurroundPortals from '@shopgate/pwa-common/components/SurroundPortals';
import { LOYALTY_POINTS_HISTORY_ROUTE } from '../../constants';
import PointsHistory from '../../components/PointsHistory';

const styles = {
  container: css({

  }).toString(),
};

/**
 * @returns {JSX}
 */
const HistoryRoute = () => {
  const { View, AppBar } = useTheme();

  return (
    <View>
      <AppBar title="ps_loyalty.history.title" />
      <div className={styles.container}>
        <SurroundPortals portalName="ps-loyalty.history.page">
          <PointsHistory />
        </SurroundPortals>
      </div>
    </View>
  );
};

export default () => (
  <Route pattern={LOYALTY_POINTS_HISTORY_ROUTE} component={HistoryRoute} />
);
