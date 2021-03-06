import React from 'react';
import PropTypes from 'prop-types';
import { I18n } from '@shopgate/engage/components';
import { useNavigation } from '@shopgate/engage/core';
import PointsIcon from '../Icons/MenuBarIcon';
import { LOYALTY_ROUTE } from '../../constants';

/**
 * OrderHistory
 * @param {Object} props Props
 * @returns {JSX}
 */
const AccountItem = (props) => {
  const { push } = useNavigation();

  const {
    Item,
    show,
  } = props;

  if (!show) {
    return null;
  }

  /**
   * open loyalty route
   */
  const handleClick = () => {
    push({ pathname: LOYALTY_ROUTE });
  };

  return (
    <Item
      label="ps_loyalty.loyalty_card.title"
      icon={PointsIcon}
      onClick={handleClick}
    >
      <I18n.Text string="ps_loyalty.loyalty_card.title" />
    </Item>
  );
};

AccountItem.propTypes = {
  Item: PropTypes.func.isRequired,
  show: PropTypes.bool,
};

AccountItem.defaultProps = {
  show: true,
};

export default AccountItem;
