import { createSlice } from "@reduxjs/toolkit";

export const profesionalSlice = createSlice({
  name: "profesional",
  initialState: {
    profesionalData: {},
  },
  reducers: {
    loadProfesionalData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { loadProfesionalData } = profesionalSlice.actions;

export const profesionalDataCheck = (state) => state.profesional;

export default profesionalSlice.reducer;
