import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface FormStepState {
  value: number;
}

const initialState: FormStepState = {
  value: 0,
};

export const formStepSlice = createSlice({
  name: 'formStep',
  initialState,
  reducers: {
    setFormStep: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setFormStep } = formStepSlice.actions;
export const selectFormStep = (state: RootState) => state.formStep.value;
export default formStepSlice.reducer;
