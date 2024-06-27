import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const itemsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload);
    },
    removeAll: (state) => {
      state.items = [];
    },
    remove: (state, action) => {
      state.items = state.items.filter(
        (obj) => obj.card.info.id !== action.payload
      );
      // console.log(items[0].card.info.id); // it is giving id on this
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, removeAll, remove } = itemsSlice.actions;

export default itemsSlice.reducer;
