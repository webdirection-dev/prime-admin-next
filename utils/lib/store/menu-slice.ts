import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './index'

const initialState: any = {
    isThemeLight: true,
    isShowAside: true,
    isShowMobileAside: false,
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

        setIsShowMobileAside: (state, actions) => {
            return {
                ...state,
                isShowMobileAside: actions.payload
            }
        },
    }
})

export const { setIsShowAsideMenu, setIsShowMobileAside, setIsLightTheme } = menuSlice.actions
export const menuReducer = menuSlice.reducer

//selectors
export const selectMenuInfo = (state: RootState) => ({
    isThemeLight: state.menuReducer.isThemeLight,
    isShowAside: state.menuReducer.isShowAside,
    isShowMobileAside: state.menuReducer.isShowMobileAside,
})
