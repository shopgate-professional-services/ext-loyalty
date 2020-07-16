import { connect } from 'react-redux';
import { getPointsHistory } from '../../selectors';

/**
 * Maps state to props.
 * @param {Object} state State.
 * @returns {Object}
 */
const mapStateToProps = state => ({
  history: getPointsHistory(state),
});

export default connect(mapStateToProps);
