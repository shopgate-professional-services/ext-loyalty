import React from 'react';
import { NavDrawer } from '@shopgate/engage/components';
import isIOSTheme from '@shopgate-ps/pwa-extension-kit/env/helpers/isIOSTheme';
import AccountItem from '../../components/AccountItem';

export default props => (
  <AccountItem
    {...props}
    show={!isIOSTheme()}
    Item={NavDrawer.Item}
  />);
