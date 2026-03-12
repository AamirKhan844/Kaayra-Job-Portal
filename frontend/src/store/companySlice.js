import { createSlice } from "@reduxjs/toolkit";
const companySLice = createSlice({
  name: "company",
  initialState: {
    getRecruiterCompanies: [],
  },
  reducers: {
    setRecruiterCompanies: (state, action) => {
      state.getRecruiterCompanies = action.payload;
    },
    addCompany: (state, action) => {
      state.getRecruiterCompanies.push(action.payload);
    },
  },
});

export const { setRecruiterCompanies, addCompany } = companySLice.actions;
export default companySLice.reducer;
