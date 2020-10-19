import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { themeConfig } from '@shopgate/engage';
import { Grid, SurroundPortals } from '@shopgate/engage/components';
import { i18n } from '@shopgate/engage/core/helpers/i18n';
import { withFetchPointsHistory } from '../../hocs';
import { styles as configStyles } from '../../config';

const { pointsHistory: { earned, redeemed } = {} } = configStyles;
const types = {
  earned: css({
    color: themeConfig.colors.primary,
    ...earned,
  }),
  redeemed: css({
    color: '#FFB800',
    ...redeemed,
  }),
};

const styles = {
  listItem: css({
    marginBottom: '1.5rem',
  }),
  gridImage: css({
    paddingRight: '1rem',
  }).toString(),
  name: css({
    fontWeight: 500,
    margin: '0 0 0.25rem',
  }).toString(),
  image: css({
    height: '38px',
    width: '38px',
    backgroundSize: 'cover',
  }),
  points: {
    earned: css(types.earned, {
      paddingLeft: '1rem',
      fontSize: '1.5rem',
      display: 'flex',
      alignItems: 'center',
    }).toString(),
    redeemed: css(types.redeemed, {
      paddingLeft: '1rem',
      display: 'flex',
      alignItems: 'center',
      fontSize: '1.5rem',
      '&&:before': {
        content: '-',
      },
    }).toString(),
  },
};

/**
 * @returns {JSX}
 */
const PointsHistory = ({ history, fetchPointsHistory }) => {
  useEffect(() => { fetchPointsHistory(); }, [fetchPointsHistory]);

  if (!history || !history.length) {
    return <h2>{i18n.text('ps_loyalty.history.noHistory')}</h2>;
  }

  return (
    <ul>
      {history.map(historyItem => (
        <li key={`${historyItem.code}-${historyItem.value}`} className={styles.listItem}>
          <SurroundPortals portalName="ps-loyalty.history.history-item" portalProps={{ historyItem }}>
            <Grid>
              <Grid.Item shrink={0} className={styles.gridImage}>
                <div
                  className={styles.image}
                  style={{
                    ...historyItem.image && { backgroundImage: `url(${historyItem.image})` },
                  }}
                />
              </Grid.Item>
              <Grid.Item grow={1}>
                <div className={styles.name}>{historyItem.label}</div>
                <div>
                  <span className={types[historyItem.type]}>
                    {i18n.text(`ps_loyalty.history.${historyItem.type}`)}
                  </span>
                  {' '}
                  <span>{i18n.text('ps_loyalty.history.date', { date: new Date(historyItem.date) })}</span>
                </div>
              </Grid.Item>
              <Grid.Item shrink={0} className={styles.points[historyItem.type]}>
                {historyItem.value}
              </Grid.Item>
            </Grid>
          </SurroundPortals>
        </li>
      ))}
    </ul>
  );
};

PointsHistory.propTypes = {
  fetchPointsHistory: PropTypes.func.isRequired,
  history: PropTypes.arrayOf(PropTypes.shape()),
};

PointsHistory.defaultProps = {
  history: null,
};

export default withFetchPointsHistory(PointsHistory);
