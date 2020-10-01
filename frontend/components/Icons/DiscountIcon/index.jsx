import React from 'react';
import Icon from '@shopgate/pwa-common/components/Icon';

const content = '<path d="M19.41 9.58L10.41 0.58C10.05 0.22 9.55 0 9 0H2C0.9 0 0 0.9 0 2V9C0 9.55 0.22 10.05 0.59 10.42L9.59 19.42C9.95 19.78 10.45 20 11 20C11.55 20 12.05 19.78 12.41 19.41L19.41 12.41C19.78 12.05 20 11.55 20 11C20 10.45 19.77 9.94 19.41 9.58ZM3.5 5C2.67 5 2 4.33 2 3.5C2 2.67 2.67 2 3.5 2C4.33 2 5 2.67 5 3.5C5 4.33 4.33 5 3.5 5ZM15.27 13.27L11 17.54L6.73 13.27C6.28 12.81 6 12.19 6 11.5C6 10.12 7.12 9 8.5 9C9.19 9 9.82 9.28 10.27 9.74L11 10.46L11.73 9.73C12.18 9.28 12.81 9 13.5 9C14.88 9 16 10.12 16 11.5C16 12.19 15.72 12.82 15.27 13.27Z"/>';

/**
 * MenuBarIcon.
 * @param {Object} props The component properties.
 * @returns {JSX}
 */
const DiscountIcon = props => <Icon content={content} {...props} />;

export default DiscountIcon;
