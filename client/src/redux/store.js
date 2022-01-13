import { configureStore } from '@reduxjs/toolkit';

import { vacationsApi } from '../services/vacations';
import { authApi } from '../services/auth';
import authReducer from './authSlice';
// import vacationReducer from './vacations';

export const store = configureStore({
  reducer: {
    [vacationsApi.reducerPath]: vacationsApi.reducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vacationsApi.middleware),
});
