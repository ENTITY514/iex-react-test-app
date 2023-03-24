import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISettings, THEME } from "../models/ISettings";

let initialState: ISettings = {
    theme: THEME.LIGHT
}


document.documentElement.setAttribute("data-theme", initialState.theme)

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        changeTheme: (state, action: PayloadAction<THEME>) => {
            state.theme = action.payload
            document.documentElement.setAttribute("data-theme", state.theme)
        }
    }
})

export default settingsSlice.reducer;