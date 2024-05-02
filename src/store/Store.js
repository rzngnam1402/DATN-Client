import { configureStore } from '@reduxjs/toolkit';
import CustomizerReducer from './customizer/CustomizerSlice';
import UserReducer from './user/UserSlice';

export const store = configureStore({
  reducer: {
    customizer: CustomizerReducer,
    user: UserReducer,
  },
});

export default store;
