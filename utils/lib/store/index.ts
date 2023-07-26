import { combineReducers } from '@reduxjs/toolkit'
import { menuReducer } from './menu-slice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit"

const rootReducer = combineReducers({
    menuReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({}),
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
