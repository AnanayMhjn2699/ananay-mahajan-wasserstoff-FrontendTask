import { createSlice } from "@reduxjs/toolkit";

const selectedFileSlice = createSlice({
  name: "selectedFile",
  initialState: {
    items: { selectedFilePath: null, fileContent: null },
  },
  reducers: {
    addItem: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { addItem } = selectedFileSlice.actions;
export default selectedFileSlice.reducer;
