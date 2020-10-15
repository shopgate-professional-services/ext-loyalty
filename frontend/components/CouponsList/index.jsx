import React, {
  useEffect, useState, Fragment,
} from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { themeConfig } from '@shopgate/engage';
import { i18n } from '@shopgate/engage/core';
import { Grid, RippleButton, SurroundPortals } from '@shopgate/engage/components';
import PopupBarcode from '../PopupBarcode';
import Card from '../Card';
import { withFetchCoupons, withEnrollCoupon } from '../../hocs';

const styles = {
  listBlured: css({
    filter: 'blur(2px)',
  }),
  listItem: css({
    marginBottom: '1rem',
  }),
  info: css({
    margin: '1.5rem 0',
    padding: '0 1rem',
  }).toString(),
  name: css({
    fontWeight: 500,
    margin: '1rem 0',
  }).toString(),
  description: css({
    color: themeConfig.colors.shade3,
    margin: '0.25rem 0 0.75rem',
  }).toString(),
  image: css({
    height: '115px',
    backgroundSize: 'cover',
    borderRadius: '5px 5px 0 0',
  }).toString(),
  button: css({
    '&&': {
      fontWeight: 'normal',
      borderRadius: 4,
      textTransform: 'lowercase',
    },
  }).toString(),
  enrollPoints: css({
    width: '62px',
    fontWeight: 500,
    fontSize: '1.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: themeConfig.colors.light,
    background: themeConfig.colors.primary,
    borderRadius: '0 11px 11px 0',
  }).toString(),
};

/**
 * @returns {JSX}
 */
const CouponList = ({ coupons, fetchCoupons, enrollCoupon }) => {
  useEffect(() => { fetchCoupons(); }, [fetchCoupons]);
  const [popupBarCode, setPopupBarCode] = useState(null);

  /** @param {Object} coupon . */
  const enroll = (coupon) => {
    enrollCoupon({ code: coupon.code }).then(fetchCoupons);
  };

  if (!coupons || !coupons.length) {
    return <h2>{i18n.text('ps_loyalty.coupon.noCoupons')}</h2>;
  }

  return (
    <Fragment>
      <PopupBarcode
        barCode={popupBarCode}
        visible={!!popupBarCode}
        onHide={() => setPopupBarCode(null)}
      />
      <ul className={popupBarCode ? styles.listBlured : null}>
        {coupons.map(coupon => (
          <li key={coupon.code} className={styles.listItem}>
            <SurroundPortals portalName="ps-loyalty.coupons.coupon-item" portalProps={{ coupon }}>
              <Card notch>
                <Grid>
                  <Grid.Item grow={1}>
                    {coupon.image &&
                    <div
                      className={styles.image}
                      style={{
                        backgroundImage: `url(${coupon.image})`,
                      }}
                    />
                      }
                    <div className={styles.info}>
                      <div className={styles.name}>{coupon.label}</div>
                      <div className={styles.description}>{coupon.description}</div>

                      <RippleButton type="secondary" onClick={() => enroll(coupon)} className={styles.button}>
                        {i18n.text('ps_loyalty.coupon.enroll')}
                      </RippleButton>
                    </div>

                  </Grid.Item>
                  <Grid.Item shrink={0} className={styles.enrollPoints}>
                    {coupon.enrollPoints}
                  </Grid.Item>
                </Grid>
              </Card>
            </SurroundPortals>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

CouponList.propTypes = {
  enrollCoupon: PropTypes.func.isRequired,
  fetchCoupons: PropTypes.func.isRequired,
  coupons: PropTypes.arrayOf(PropTypes.shape()),
};

CouponList.defaultProps = {
  coupons: null,
};

export default withEnrollCoupon(withFetchCoupons(CouponList));
