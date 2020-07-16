import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { useNavigation } from '@shopgate/engage/core';
import {
  LOYALTY_COUPONS_ROUTE,
  LOYALTY_HISTORY_ROUTE,
  LOYALTY_ROUTE,
  SCANNER_ROUTE
} from '../../constants';
import Icon from '../../components/Icons/MenuBarIcon';
import { addTabBarItem } from '../../config';

const tabItemIconStyle = css({
  height: 24,
  width: 24,
}).toString();

/**
 * TabBarItem.
 * @returns {JSX}
 */
const TabBarItem = ({ path, TabBarAction }) => {
  const { push } = useNavigation();

  if (!addTabBarItem) {
    return null;
  }

  /**
   * Handles click.
   * @param {MouseEvent} e Event.
   */
  const handleClick = (e) => {
    e.preventDefault();
    if (path === LOYALTY_ROUTE) {
      return;
    }

    push({ pathname: LOYALTY_ROUTE });
  };

  return (
    <TabBarAction
      label="ps_loyalty.loyalty_card.title"
      icon={<Icon className={tabItemIconStyle} />}
      isHighlighted={[
        LOYALTY_ROUTE,
        LOYALTY_HISTORY_ROUTE,
        LOYALTY_COUPONS_ROUTE,
        SCANNER_ROUTE,
      ].includes(path)}
      onClick={handleClick}
    />
  );
};

TabBarItem.propTypes = {
  path: PropTypes.string.isRequired,
  TabBarAction: PropTypes.func.isRequired,
};

export default TabBarItem;
