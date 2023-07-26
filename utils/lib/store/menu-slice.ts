import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './index'

const initialState: any = {
    isShowAside: true,
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
                isShowAside: !state.isShowAside
            }
        },
    }
})

export const { setIsShowAsideMenu } = menuSlice.actions
export const menuReducer = menuSlice.reducer

//selectors
export const selectMenuInfo = (state: RootState) => ({
    isShowAside: state.menuReducer.isShowAside,
})
