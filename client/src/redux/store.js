import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { vacationsApi } from '../services/vacations';
// import vacationReducer from './vacations';

export const store = configureStore({
  reducer: {
    [vacationsApi.reducerPath]: vacationsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vacationsApi.middleware),
});
