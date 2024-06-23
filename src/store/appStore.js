import { configureStore } from "@reduxjs/toolkit";
import selectedFileReducer from "./selectedFileSlice";

const appStore = configureStore({
  reducer: {
    selectedFile: selectedFileReducer,
  },
});

export default appStore;
