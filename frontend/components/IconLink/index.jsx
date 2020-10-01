import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { Link, RippleButton } from '@shopgate/engage/components';

const styles = {
  buttonWrapper: css({
    position: 'relative',
    marginBottom: '0.5rem',
  }).toString(),
  icon: css({
    position: 'absolute',
    right: 0,
    marginRight: '.5rem',
    zIndex: 1,
    height: '24px',
    width: '24px',
  }).toString(),
  button: css({
    textAlign: 'center',
    width: '100%',
    borderRadius: '4px',
  }).toString(),
};

/**
 * @returns {JSX}
 */
function IconLink({
  href, label, icon: Icon, className,
}) {
  return (
    <Link className={`${styles.buttonWrapper} ${className}`} href={href}>
      <RippleButton
        className={styles.button}
        type="secondary"
      >
        <Icon className={styles.icon} />
        {label}
      </RippleButton>
    </Link>
  );
}

IconLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

IconLink.defaultProps = {
  className: '',
};

export default IconLink;
