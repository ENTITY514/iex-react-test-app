import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISettings, THEME } from "../models/ISettings";

let initialState: ISettings = {
    theme: THEME.DARK
}


document.documentElement.setAttribute("data-theme", initialState.theme)

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
    }
})

export default settingsSlice.reducer;