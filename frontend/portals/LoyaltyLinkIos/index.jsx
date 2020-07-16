import React from 'react';
import isIOSTheme from '@shopgate-ps/pwa-extension-kit/env/helpers/isIOSTheme';
import AccountItem from '../../components/AccountItem';
import MoreMenuItem from '../../components/MoreMenuItem';

export default props => (
  <AccountItem
    {...props}
    show={isIOSTheme()}
    Item={MoreMenuItem}
  />);
