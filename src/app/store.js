import { configureStore } from '@reduxjs/toolkit';
import proCleaningSlice from '../features/proCleaner/proCleaningSlice'
export const store = configureStore({
  reducer: {
    proCleaning: proCleaningSlice
  },
});
