import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const formNameSlice = createSlice({
  name: 'formName',
  initialState,
  reducers: {
    setFormName: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setFormName } = formNameSlice.actions;
export default formNameSlice.reducer;
