import Scanner from '@shopgate/pwa-core/classes/Scanner';
import showModal from '@shopgate/pwa-common/actions/modal/showModal';
import { scannerFinishedBarCode$, scannerFinishedQrCode$ } from '@shopgate/pwa-common-commerce/scanner/streams';
import { historyPop } from '@shopgate/pwa-common/actions/router';
import { hasScannerSupport } from '@shopgate/pwa-common/selectors/client';
import { isUserLoggedIn, LOGIN_PATH, userDataReceived$ } from '@shopgate/engage/user';
import { appDidStart$, authRoutes, redirects } from '@shopgate/engage/core';
import { LOYALTY_INIT_ACCOUNT_ROUTE, LOYALTY_ROUTE, SCANNER_SCOPE } from './constants';
import { scannerDidEnter$ } from './streams';
import { fetchAccountInfo } from './actions';
import { getAccountInfo } from './selectors';

/**
 * Subscription.
 * @param {Function} subscribe Subscribe.
 */
export default (subscribe) => {
  subscribe(appDidStart$, () => {
    authRoutes.set(LOYALTY_ROUTE, LOGIN_PATH);

    redirects.set(LOYALTY_ROUTE, ({ getState }) => {
      const account = getAccountInfo(getState());
      if (!account) {
        return LOYALTY_INIT_ACCOUNT_ROUTE;
      }
      return LOYALTY_ROUTE;
    });
  });

  subscribe(userDataReceived$, ({ dispatch, getState }) => {
    const loggedIn = isUserLoggedIn(getState());
    if (!loggedIn) {
      return;
    }
    dispatch(fetchAccountInfo());
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
