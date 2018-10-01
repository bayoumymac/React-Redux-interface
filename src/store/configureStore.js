import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

const configureStore = (initialState) => (
  createStore(rootReducer, initialState, applyMiddleware(
    reduxImmutableStateInvariant(),thunk
  ))
);


export default configureStore;
