import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 1,
};

export const formBudgetSlice = createSlice({
  name: 'formBudget',
  initialState,
  reducers: {
    setFormBudget: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setFormBudget } = formBudgetSlice.actions;
export default formBudgetSlice.reducer;
