import { connect } from 'react-redux';
import { getAccountInfo } from '../../selectors';

/**
 * Maps state to props.
 * @param {Object} state State.
 * @returns {Object}
 */
const mapStateToProps = state => ({
  accountInfo: getAccountInfo(state),
});

export default connect(mapStateToProps);
