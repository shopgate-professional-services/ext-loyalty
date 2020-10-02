import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import Backdrop from '@shopgate/pwa-common/components/Backdrop';
import Barcode from 'react-barcode';
import Card from '../Card';
import { barcodeFormat } from '../../config';

const styles = {
  card: css({
    position: 'absolute',
    zIndex: 3,
    top: '20%',
    left: '1rem',
    right: '1rem',
    width: 'calc(100% - 2rem)',
    padding: '2rem 0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }).toString(),
  backdrop: css({
    filter: 'blur(4px)',
  }).toString(),
};

/**
 * @returns {JSX}
 */
const PopupBarcode = ({ visible, barCode, onHide }) => {
  if (!visible) {
    return null;
  }

  return (
    <Fragment>
      <Backdrop isVisible opacity={25} className={styles.backdrop} onClick={onHide} />
      <Card className={styles.card}>
        <Barcode
          format={barcodeFormat}
          value={barCode}
          displayValue
        />
      </Card>
    </Fragment>
  );
};

PopupBarcode.propTypes = {
  barCode: PropTypes.string.isRequired,
  onHide: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default PopupBarcode;
