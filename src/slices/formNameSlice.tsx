import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface NameState {
  value: string;
}

const initialState: NameState = {
  value: '',
};

export const formNameSlice = createSlice({
  name: 'formName',
  initialState,
  reducers: {
    setFormName: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setFormName } = formNameSlice.actions;
export const selectName = (state: RootState) => state.formName.value;
export default formNameSlice.reducer;
