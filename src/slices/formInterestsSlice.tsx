import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

import defaultInterests from '../default-interests';

interface InterestsState {
  value: { id: number; name: string; width: string; selected: boolean }[];
}

const initialState: InterestsState = {
  value: defaultInterests,
};

export const formInterestsSlice = createSlice({
  name: 'formInterests',
  initialState,
  reducers: {
    toggleInterest: (state, action: PayloadAction<number>) => {
      if (action.payload === 0) {
        // If toggling the Everything interest
        if (state.value[0].selected) {
          // "Un-select" the Everything interest
          state.value = state.value.map((interest) => {
            return interest.id === 0
              ? { ...interest, selected: !interest.selected }
              : interest;
          });
        } else {
          // "Select" all interests
          state.value = state.value.map((interest) => {
            return { ...interest, selected: true };
          });
        }
      } else if (state.value[0].selected) {
        // If not toggling the Everything interest but Everything is selected
        // "Un-select" the Everything interest
        state.value = state.value.map((interest) => {
          if (interest.id === 0) {
            return { ...interest, selected: false };
          } else {
            return interest.id === action.payload
              ? { ...interest, selected: !interest.selected }
              : interest;
          }
        });
      } else {
        state.value = state.value.map((interest) => {
          return interest.id === action.payload
            ? { ...interest, selected: !interest.selected }
            : interest;
        });
      }
    },
    setInterests: (state, action: PayloadAction<string[]>) => {
      for (let i = 0; i < state.value.length; i++) {
        let setValue = false;
        for (let j = 0; j < action.payload.length; j++) {
          if (state.value[i].name === action.payload[j]) {
            state.value[i].selected = true;
            setValue = true;
          }
        }
        if (!setValue) {
          state.value[i].selected = false;
        }
      }
    },
  },
});

export const { toggleInterest, setInterests } = formInterestsSlice.actions;
export const selectInterests = (state: RootState) => state.formInterests.value;
export default formInterestsSlice.reducer;
