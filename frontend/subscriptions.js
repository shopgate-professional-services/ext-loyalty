import { userDidUpdate$, userWillLogout$ } from '@shopgate/pwa-common/streams/user';
import Scanner from '@shopgate/pwa-core/classes/Scanner';
import showModal from '@shopgate/pwa-common/actions/modal/showModal';
import { scannerFinishedBarCode$, scannerFinishedQrCode$ } from '@shopgate/pwa-common-commerce/scanner/streams';
import { historyPop } from '@shopgate/pwa-common/actions/router';
import { hasScannerSupport } from '@shopgate/pwa-common/selectors/client';
import { userDataReceived$, isUserLoggedIn, LOGIN_PATH } from '@shopgate/engage/user';
import {
  LOYALTY_ROUTE,
  SCANNER_SCOPE,
} from './constants';
import {
  scannerDidEnter$, loyaltyDidEnter$, pointsHistoryDidEnter$, loyaltyCouponsDidEnter$,
} from './streams';
import { fetchLoyaltyAccountInfo, fetchLoyaltyCoupons, fetchPointsHistory } from './actions';

import {
  appDidStart$, authRoutes,
} from '@shopgate/engage/core';


/**
 * Subscription.
 * @param {Function} subscribe Subscribe.
 */
const loyaltyCardSubscriptions = (subscribe) => {
  subscribe(appDidStart$, () => {
    authRoutes.set(LOYALTY_ROUTE, LOGIN_PATH);
  });

  subscribe(userDataReceived$.merge(loyaltyDidEnter$), ({ dispatch, getState }) => {
    const loggedIn = isUserLoggedIn(getState());

    if (!loggedIn) {
      return;
    }

    dispatch(fetchLoyaltyAccountInfo());
  });

  subscribe(pointsHistoryDidEnter$, ({ dispatch }) => {
    dispatch(fetchPointsHistory());
  });

  subscribe(loyaltyCouponsDidEnter$, ({ dispatch }) => {
    dispatch(fetchLoyaltyCoupons());
  });

  const scannerFinishedInvalid$ = scannerFinishedQrCode$
    .filter(({ action }) => action.scope === SCANNER_SCOPE);

  subscribe(scannerFinishedInvalid$, ({ dispatch }) => {
    dispatch(showModal({
      confirm: 'modal.ok',
      dismiss: null,
      message: 'ps_loyalty.scanner.invalid_format',
    }))
      .then(() => Scanner.start());
  });

  const scannerFinished$ = scannerFinishedBarCode$
    .filter(({ action }) => action.scope === SCANNER_SCOPE);

  subscribe(scannerFinished$, ({
    action, dispatch,
  }) => {
    // TODO: send action.payload to pipeline

  });

  subscribe(scannerDidEnter$, ({ getState, dispatch }) => {
    const hasScanner = hasScannerSupport(getState());
    if (hasScanner) {
      return;
    }
    dispatch(showModal({
      confirm: 'modal.ok',
      dismiss: null,
      message: 'ps_loyalty.scanner.not_supported',
    })).then(() => {
      dispatch(historyPop());
    });
  });
};

export default loyaltyCardSubscriptions;
