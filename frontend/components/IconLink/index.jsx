import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { Link, RippleButton } from '@shopgate/engage/components';

const styles = {
  buttonWrapper: css({
    position: 'relative',
  }).toString(),
  icon: css({
    position: 'absolute',
    right: 0,
    marginTop: '.5rem',
    marginRight: '.5rem',
    zIndex: 1,
    height: '24px',
    width: '24px',
  }),
  button: css({
    textAlign: 'center',
    width: '100%',
    backgroundColor: '#32AC5C',
    borderRadius: '4px',
  }),
};

/**
 * @returns {JSX}
 */
function IconLink({
  href, label, icon: Icon, className,
}) {
  return (
    <Link className={`${styles.buttonWrapper} ${className}`} href={href}>
      <Icon className={styles.icon} />
      <RippleButton
        className={styles.button}
        type="primary"
      >
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
