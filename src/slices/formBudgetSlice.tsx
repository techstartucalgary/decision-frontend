import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface BudgetState {
  value: number;
}

const initialState: BudgetState = {
  value: 1,
};

export const formBudgetSlice = createSlice({
  name: 'formBudget',
  initialState,
  reducers: {
    setFormBudget: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setFormBudget } = formBudgetSlice.actions;

export const selectBudget = (state: RootState) => state.formBudget.value;

export default formBudgetSlice.reducer;
