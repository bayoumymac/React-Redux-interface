import * as types from '../actions/actionTypes';
import initialState from './initialState';

const checkActionSuffix = (type) => (
  type.substring(type.length - 8) == '_SUCCESS'
);

const ajaxStatusReducer = (state = initialState.ajaxCallsInProgress, action) => {
  if (action.type === types.BEGIN_AJAX_CALL){
    state++;
  }else if (action.type === types.FAILED_AJAX_CALL || checkActionSuffix(action.type)){
    state--;
  }
  return state;
};

export default ajaxStatusReducer;
