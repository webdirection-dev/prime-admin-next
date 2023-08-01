import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './index'

const initialState: any = {
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

export const { setIsShowAsideMenu, setIsShowMobileAside } = menuSlice.actions
export const menuReducer = menuSlice.reducer

//selectors
export const selectMenuInfo = (state: RootState) => ({
    isShowAside: state.menuReducer.isShowAside,
    isShowMobileAside: state.menuReducer.isShowMobileAside,
})
