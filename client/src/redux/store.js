import { configureStore } from '@reduxjs/toolkit';

import { vacationsApi } from '../services/vacations';
import { authApi } from '../services/auth';
import { followsApi } from '../services/follow';
import authReducer from './authSlice';
import vacationReducer from './vacationSlice';
import followReducer from './followSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    vacations: vacationReducer,
    follows: followReducer,
    [followsApi.reducerPath]: followsApi.reducer,
    [vacationsApi.reducerPath]: vacationsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vacationsApi.middleware),
});
