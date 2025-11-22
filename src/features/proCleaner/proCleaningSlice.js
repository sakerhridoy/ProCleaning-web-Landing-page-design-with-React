import { createSlice } from '@reduxjs/toolkit';

const proCleaningSlice = createSlice({
  name: 'proCleaning',
  initialState: {
    value: true,
  },
  reducers: {
    proClean: state => {
      state.value = !state.value; // toggle
    },
  },
});

export const { proClean } = proCleaningSlice.actions
export default proCleaningSlice.reducer
