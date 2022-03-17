import { configureStore } from '@reduxjs/toolkit';
import formNameReducer from './slices/formNameSlice';
import formBudgetReducer from './slices/formBudgetSlice';
import formInterestsReducer from './slices/formInterestsSlice';

export const store = configureStore({
  reducer: {
    formName: formNameReducer,
    formBudget: formBudgetReducer,
    formInterests: formInterestsReducer,
  },
});
