import { configureStore } from "@reduxjs/toolkit";
import guitarReducer from "@/app/guitar/ui/slice";

export const store = configureStore({
  reducer: {
    guitar: guitarReducer,
  },
  devTools: true,
});
