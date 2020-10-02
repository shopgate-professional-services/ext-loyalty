import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { themeConfig } from '@shopgate/engage';

const styles = {
  card: css({
    width: '100%',
    background: themeConfig.colors.light,
    boxSizing: 'border-box',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.15)',
    borderRadius: '11px',
  }),
};

/**
 * @returns {JSX}
 */
const Card = ({ children, className }) => (
  <div className={`${styles.card} ${className}`}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
};

Card.defaultProps = {
  className: null,
};

export default Card;
