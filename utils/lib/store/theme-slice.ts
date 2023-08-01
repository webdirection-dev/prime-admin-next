import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './index'

const initialState: any = {
    theme: null,
}

const themeSlice = createSlice({
    name: '@@theme',
    initialState,
    reducers: {
        resetMenu: () => {
            return initialState
        },

        setTheme: (state, actions) => {
            return {
                ...state,
                theme: actions.payload
            }
        },
    }
})

export const { setTheme } = themeSlice.actions
export const themeReducer = themeSlice.reducer

//selectors
export const selectTheme = (state: RootState) => ({
    theme: state.themeReducer.theme,
})
