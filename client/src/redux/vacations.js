import { createSlice } from '@reduxjs/toolkit';

export const vacationsSlice = createSlice({
  name: 'vacations',
  initialState: {
    vacations: [],
  },
  reducers: {
    getVacations: (state, action) => {
      state.vacations = action.payload;
    },
  },
});

export const { getVacations } = vacationsSlice.actions;

export default vacationsSlice.reducer;
