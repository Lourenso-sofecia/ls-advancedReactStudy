import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from '../services/jobsSlice';
import favoritesReducer from '../services/favoritesSlice';

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;