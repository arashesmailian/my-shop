import logger from 'redux-logger';//redux-logger
//for redux-persistor
import { persistStore , persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
//for redux-persistor
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cart.reducer'

const persistConfig = {
  key:"root",
  storage,
};

const reducer = combineReducers({
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig , reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware:[logger], //redux-logger: showing state-changing for debug
});

export const persistor = persistStore(store);
export default store;