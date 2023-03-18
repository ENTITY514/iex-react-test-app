import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IData } from "../models/ICompanies";

let initialState: IData = {
}

export const dataSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    }
})

export default dataSlice.reducer;