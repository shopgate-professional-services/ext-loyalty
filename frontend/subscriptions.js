import Scanner from '@shopgate/pwa-core/classes/Scanner';
import showModal from '@shopgate/pwa-common/actions/modal/showModal';
import { scannerFinishedBarCode$, scannerFinishedQrCode$ } from '@shopgate/pwa-common-commerce/scanner/streams';
import { historyPop, historyReplace } from '@shopgate/pwa-common/actions/router';
import { hasScannerSupport } from '@shopgate/pwa-common/selectors/client';
import { isUserLoggedIn, userDataReceived$ } from '@shopgate/engage/user';
import { LOYALTY_ROUTE, SCANNER_SCOPE, SCANNER_SCOPE_POINTS } from './constants';
import { scannerDidEnter$ } from './streams';
import { fetchAccountInfo, initAccount, enrollPoints } from './actions';

/**
 * Subscription.
 * @param {Function} subscribe Subscribe.
 */
export default (subscribe) => {
  subscribe(userDataReceived$, ({ dispatch, getState }) => {
    const loggedIn = isUserLoggedIn(getState());
    if (!loggedIn) {
      return;
    }
    dispatch(fetchAccountInfo());
  });

  /**
   * Forbid using Barcode scanning
   */
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

  /**
   * Listen for scanning a card, init account
   */
  const scannerFinished$ = scannerFinishedBarCode$
    .filter(({ action }) => action.scope === SCANNER_SCOPE);

  subscribe(scannerFinished$, ({ action, dispatch }) => {
    const { payload } = action;
    dispatch(initAccount({
      type: 'card',
      code: payload,
    })).then(() => (
      dispatch(fetchAccountInfo())
        .then(() => dispatch(historyReplace({
          pathname: LOYALTY_ROUTE,
        })))
    ));
  });

  const scannerFinishedPoints$ = scannerFinishedBarCode$
    .filter(({ action }) => action.scope === SCANNER_SCOPE_POINTS);
  subscribe(scannerFinishedPoints$, ({ action, dispatch }) => {
    const { payload } = action;
    dispatch(enrollPoints({ code: payload }))
      .then(() => (
        dispatch(fetchAccountInfo())
          .then(() => dispatch(historyReplace({ pathname: LOYALTY_ROUTE })))
      )).catch(() => {
        dispatch(showModal({
          confirm: 'modal.ok',
          dismiss: null,
          message: 'ps_loyalty.scanner.errorEnrollPoints',
        })).then(() => Scanner.start());
      });
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
