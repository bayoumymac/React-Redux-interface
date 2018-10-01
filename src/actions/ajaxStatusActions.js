import * as types from './actionTypes';

export const beginAjaxCall = () => (
  {type: types.BEGIN_AJAX_CALL}
);

export const failedAjaxCall = () => (
  {type: types.FAILED_AJAX_CALL}
);
