import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    colorMode: "",
  },
  reducers: {
    themeChange: (state, action) => {
      localStorage.setItem("theme", JSON.stringify(action.payload));
      state.colorMode = action.payload;
    },
  },
});
export const { themeChange } = themeSlice.actions;
export default themeSlice.reducer;
