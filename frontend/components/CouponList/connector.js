import { connect } from 'react-redux';
import { getLoyaltyCoupons } from '../../selectors';

/**
 * Maps state to props.
 * @param {Object} state State.
 * @returns {Object}
 */
const mapStateToProps = state => ({
  coupons: getLoyaltyCoupons(state),
});

export default connect(mapStateToProps);
