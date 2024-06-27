import { configureStore } from "@reduxjs/toolkit";

import itemsReducer from "../store/slices/itemsSlice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});
