import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const formStepSlice = createSlice({
  name: 'formStep',
  initialState,
  reducers: {
    setFormStep: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setFormStep } = formStepSlice.actions;
export default formStepSlice.reducer;
