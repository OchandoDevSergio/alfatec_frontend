import { createSlice } from "@reduxjs/toolkit";

export const polizaSlice = createSlice({
  name: "poliza",
  initialState: {
    polizaData: {},
  },
  reducers: {
    loadPolizaData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { loadPolizaData } = polizaSlice.actions;

export const polizaDataCheck = (state) => state.poliza;

export default polizaSlice.reducer;
