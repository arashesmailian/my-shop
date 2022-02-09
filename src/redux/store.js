import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cart.reducer'

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware:[logger] //redux-logger: showing state-changing for debug
});