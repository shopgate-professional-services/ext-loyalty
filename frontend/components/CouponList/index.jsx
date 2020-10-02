import React, { useEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { themeConfig } from '@shopgate/engage';
import { i18n } from '@shopgate/engage/core';
import { Grid, SurroundPortals } from '@shopgate/engage/components';
import Clickable from '../Clickable';
import Card from '../Card';
import DiscountIcon from '../Icons/DiscountIcon';
import CalendarIcon from '../Icons/CalendarIcon';
import { withFetchCoupons } from '../../hocs';
import PopupBarcode from '../PopupBarcode';

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
    borderRadius: '11px 0 0 0',
  }).toString(),
  infoIcon: css({
    width: '36px',
    height: '26px',
    color: themeConfig.colors.shade3,
  }).toString(),
  infoLabel: css({
    fontSize: '0.825rem',
    color: themeConfig.colors.shade3,
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
};

/**
 * @returns {JSX}
 */
const CouponList = ({ coupons, fetchCoupons }) => {
  useEffect(() => { fetchCoupons(); }, [fetchCoupons]);
  const [popupBarCode, setPopupBarCode] = useState(null);

  if (!coupons || !coupons.length) {
    return <h1>No coupons found</h1>;
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
              <Clickable onClick={() => setPopupBarCode(coupon.code)}>
                <Card>
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

                        <Grid>
                          <Grid.Item shrink={0} className={styles.infoIcon}>
                            <DiscountIcon size={20} />
                          </Grid.Item>
                          <Grid.Item grow={1} className={styles.infoLabel}>
                            {i18n.text('CODE')}
                          </Grid.Item>
                          <Grid.Item grow={1} className={styles.infoCode}>
                            {coupon.code}
                          </Grid.Item>
                        </Grid>

                        <Grid>
                          <Grid.Item shrink={0} className={styles.infoIcon}>
                            <CalendarIcon size={20} />
                          </Grid.Item>
                          <Grid.Item grow={1} className={styles.infoLabel}>
                            {i18n.text('Gultig bis')}
                          </Grid.Item>
                          <Grid.Item grow={1} className={styles.infoCode}>
                            {i18n.text('!!noch 5 Tage')}
                          </Grid.Item>
                        </Grid>
                      </div>

                    </Grid.Item>
                    <Grid.Item shrink={0} className={styles.valueCol}>
                      {coupon.value}
                    </Grid.Item>
                  </Grid>
                </Card>
              </Clickable>
            </SurroundPortals>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

CouponList.propTypes = {
  fetchCoupons: PropTypes.func.isRequired,
  coupons: PropTypes.arrayOf(PropTypes.shape()),
};

CouponList.defaultProps = {
  coupons: null,
};

export default withFetchCoupons(CouponList);
