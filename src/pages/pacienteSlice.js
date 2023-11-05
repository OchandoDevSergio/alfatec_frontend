import { createSlice } from "@reduxjs/toolkit";

export const pacienteSlice = createSlice({
  name: "paciente",
  initialState: {
    pacienteData: {},
  },
  reducers: {
    loadPacienteData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { loadPacienteData } = pacienteSlice.actions;

export const pacienteDataCheck = (state) => state.paciente;

export default pacienteSlice.reducer;
