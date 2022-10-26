import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import driverListReducer from './driverListReducer';
import headerReducer from './headerReducer'
import messageReducer from './messagesReducer';
import orderListReducer from './orderListReducer';
import thunkMiddleWare from 'redux-thunk'
import authReducer from './authReducer';

let reducers = combineReducers({
  headerReducer: headerReducer,
  messageReducer: messageReducer,
  driverListReducer: driverListReducer,
  orderListReducer: orderListReducer,
  authReducer: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;