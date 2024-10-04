"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";
import { protocolApi } from "../api/protocolApi";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { patientApi } from "../api/patientsApi";
import { assessmentApi } from "../api/assesmentsApi";

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [protocolApi.reducerPath]: protocolApi.reducer,
  [patientApi.reducerPath]: patientApi.reducer,
  [assessmentApi.reducerPath]: assessmentApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      protocolApi.middleware,
      patientApi.middleware,
      assessmentApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
