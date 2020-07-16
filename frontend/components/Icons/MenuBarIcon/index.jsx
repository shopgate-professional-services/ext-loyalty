import React from 'react';
import Icon from '@shopgate/pwa-common/components/Icon';
import { icon } from '../../../config';

/**
 * MenuBarIcon.
 * @param {Object} props The component properties.
 * @returns {JSX}
 */
const MenuBarIcon = props => <Icon content={icon} {...props} />;

export default MenuBarIcon;
