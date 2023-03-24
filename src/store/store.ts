import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { CompaniesApi } from "../services/CompaniesService";
import companiesSlice from "./reducers/CompaniesSlice";
import settingSlice from "./reducers/settingsSlice";

const rootReducers = combineReducers({
    companiesSlice,
    settingSlice,
    [CompaniesApi.reducerPath]: CompaniesApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducers,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware({ serializableCheck: false }).concat(CompaniesApi.middleware);
        },
        devTools: process.env.NODE_ENV !== 'production'
    })
}

export type RootState = ReturnType<typeof rootReducers>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']