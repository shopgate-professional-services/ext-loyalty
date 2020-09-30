import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { SurroundPortals } from '@shopgate/engage/components';
import { withFetchPointsHistory } from '../../hocs';

const styles = {
  container: css({

  }).toString(),
};

/**
 * @returns {JSX}
 */
const CouponList = ({ history, fetchPointsHistory }) => {
  useEffect(() => fetchPointsHistory(), [fetchPointsHistory]);

  if (!history || !history.length) {
    // TODO:
    return <h1>No point history yet</h1>;
  }
  // TODO: check for loading state

  return (
    <ul>
      {history.map(historyItem => (
        <li key={historyItem.code}>
          <SurroundPortals portalName="ps-loyalty.history.history-item" portalProps={{ historyItem }}>
            <p>{historyItem.label}</p>
            <p>{historyItem.points}</p>
            <p>{historyItem.time}</p>
          </SurroundPortals>
        </li>
      ))}
    </ul>
  );
};

CouponList.propTypes = {
  fetchPointsHistory: PropTypes.func.isRequired,
  history: PropTypes.arrayOf(PropTypes.shape()),
};

CouponList.defaultProps = {
  history: null,
};

export default withFetchPointsHistory(CouponList);
