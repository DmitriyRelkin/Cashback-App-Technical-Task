import { configureStore } from '@reduxjs/toolkit';
import offersReducer from './slices/offersSlice';
import cashbackReducer from './slices/cashbackSlice';

const store = configureStore({
  reducer: {
    offers: offersReducer,
    cashback: cashbackReducer
  },
});

export default store;
