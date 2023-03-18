import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { CompaniesApi } from "../services/CompaniesService";
import dataSlice from "./reducers/CompaniesSlice";

const rootReducers = combineReducers({
    dataSlice,
    [CompaniesApi.reducerPath]: CompaniesApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducers,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat(CompaniesApi.middleware);
        },
        devTools: process.env.NODE_ENV !== 'production'
    })
}

export type RootState = ReturnType<typeof rootReducers>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']