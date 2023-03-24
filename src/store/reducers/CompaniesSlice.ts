import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICompany } from "../../models/company";
import { Icompanies } from "../models/ICompanies";

let initialState: Icompanies = {
    companies: []
}

export const companiesSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCompanies: (state, action: PayloadAction<Array<ICompany>>) => {
            state.companies = action.payload
        }
    }
})

export default companiesSlice.reducer;