import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './index'

const initialState: any = {
    isThemeLight: false,
    isShowAside: true,
}

const menuSlice = createSlice({
    name: '@@menu',
    initialState,
    reducers: {
        resetMenu: () => {
            return initialState
        },

        setIsLightTheme: (state) => {
            return {
                ...state,
                isThemeLight: !state.isThemeLight
            }
        },

        setIsShowAsideMenu: (state) => {
            return {
                ...state,
                isShowAside: !state.isShowAside
            }
        },
    }
})

export const { setIsShowAsideMenu, setIsLightTheme } = menuSlice.actions
export const menuReducer = menuSlice.reducer

//selectors
export const selectMenuInfo = (state: RootState) => ({
    isThemeLight: state.menuReducer.isThemeLight,
    isShowAside: state.menuReducer.isShowAside,
})
