import { createSlice } from '@reduxjs/toolkit';

export const basket = createSlice({
  name: 'basket',
  initialState: {
    card: [],
    count:0
  },
  reducers: {
    setCard: (state, action) => {
      state.card.push({...action.payload})
      state.count = state.count + Number(action.payload.quantity)
    },
  },
});

export const {setCard} = basket.actions;

export default basket.reducer;
