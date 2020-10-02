import React from 'react';
import PropTypes from 'prop-types';

/**
 * @returns {JSX}
 */
const Clickable = ({ children, onClick }) => (
  <div role="button" onClick={onClick}>
    {children}
  </div>
);

Clickable.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Clickable;
