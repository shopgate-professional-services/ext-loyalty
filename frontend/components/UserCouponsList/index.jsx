import React, { useEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import { themeConfig } from '@shopgate/engage';
import { i18n } from '@shopgate/engage/core';
import { AddToCartButton, Grid, SurroundPortals } from '@shopgate/engage/components';
import Clickable from '../Clickable';
import PopupBarcode from '../PopupBarcode';
import Card from '../Card';
import DiscountIcon from '../Icons/DiscountIcon';
import CalendarIcon from '../Icons/CalendarIcon';
import SmilyIcon from '../Icons/SmilyIcon';
import { withFetchUserCoupons, withAddCouponsToCart } from '../../hocs';
import { addCouponToCart } from '../../config';

momentDurationFormatSetup(moment);

const styles = {
  listBlured: css({
    filter: 'blur(2px)',
  }),
  listItem: css({
    marginBottom: '1rem',
  }),
  info: css({
    margin: '1.5rem 0',
    padding: '0 1.5rem',
  }).toString(),
  name: css({
    fontWeight: 500,
    margin: '1rem 0',
  }).toString(),
  image: css({
    height: '115px',
    backgroundSize: 'cover',
    borderRadius: '5px 5px 0 0',
  }).toString(),
  infoIcon: css({
    width: '36px',
    height: '26px',
    color: themeConfig.colors.shade3,
  }).toString(),
  infoLabel: css({
    fontSize: '0.825rem',
    color: themeConfig.colors.shade3,
    minWidth: 100,
  }).toString(),
  infoCode: css({
    fontSize: '0.825rem',
    color: themeConfig.colors.primary,
  }).toString(),
  valueCol: css({
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
  addToCart: css({
    position: 'absolute',
    top: '50%',
    right: '2rem',
    transform: 'translate3d(0, -50%, 0)',
    width: 50,
    height: 50,
  }).toString(),
  addToCartStick: css({
    top: '115px',
  }).toString(),
};

/** @returns {string} */
function validTillFormat() {
  return this.duration.asSeconds() >= 86400
    ? i18n.text('ps_loyalty.coupon.validTillDaysFormat')
    : i18n.text('ps_loyalty.coupon.validTillHoursFormat');
}

/**
 * @returns {JSX}
 */
const CouponList = ({ coupons, fetchUserCoupons, addCouponsToCart }) => {
  useEffect(() => { fetchUserCoupons(); }, [fetchUserCoupons]);
  const [popupBarCode, setPopupBarCode] = useState(null);

  if (!coupons || !coupons.length) {
    return <h2>{i18n.text('ps_loyalty.coupon.noCoupons')}</h2>;
  }

  const addCoupon = (coupon) => {
    addCouponsToCart([coupon.code]);
  };

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
                {addCouponToCart &&
                  <div className={`${styles.addToCart} ${coupon.image ? styles.addToCartStick : ''}`}>
                    <AddToCartButton
                      onClick={() => addCoupon(coupon)}
                      isDisabled={false}
                      isLoading={false}
                      noShadow
                      buttonSize={50}
                    />
                  </div>
                }

                <Clickable onClick={() => setPopupBarCode(coupon.code)}>
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

                    <Grid>
                      <Grid.Item shrink={0} className={styles.infoIcon}>
                        <DiscountIcon size={20} />
                      </Grid.Item>
                      <Grid.Item shrink={0} className={styles.infoLabel}>
                        {i18n.text('ps_loyalty.coupon.code')}
                      </Grid.Item>
                      <Grid.Item className={styles.infoCode}>
                        {coupon.code}
                      </Grid.Item>
                    </Grid>

                    <Grid>
                      <Grid.Item shrink={0} className={styles.infoIcon}>
                        <CalendarIcon size={20} />
                      </Grid.Item>
                      <Grid.Item shrink={0} className={styles.infoLabel}>
                        {i18n.text('ps_loyalty.coupon.validity')}
                      </Grid.Item>
                      <Grid.Item className={styles.infoCode}>
                        {moment.duration(
                          moment(new Date(coupon.validTo)).diff(new Date())
                        ).format(validTillFormat)}
                      </Grid.Item>
                    </Grid>

                    {!!coupon.enrollPoints && (
                      <Grid>
                        <Grid.Item shrink={0} className={styles.infoIcon}>
                          <SmilyIcon size={20} />
                        </Grid.Item>
                        <Grid.Item shrink={0} className={styles.infoLabel}>
                          {i18n.text('ps_loyalty.coupon.enrolledPoints')}
                        </Grid.Item>
                        <Grid.Item className={styles.infoCode}>
                          {coupon.enrollPoints}
                        </Grid.Item>
                      </Grid>
                    )}
                  </div>
                </Clickable>
              </Card>
            </SurroundPortals>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

CouponList.propTypes = {
  addCouponsToCart: PropTypes.func.isRequired,
  fetchUserCoupons: PropTypes.func.isRequired,
  coupons: PropTypes.arrayOf(PropTypes.shape()),
};

CouponList.defaultProps = {
  coupons: null,
};

export default withAddCouponsToCart(withFetchUserCoupons(CouponList));
