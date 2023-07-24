import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './index'

const initialState: any = {
    isLoadingProducts: false,
    productsOfCategory: [],
    allDocumentCount: null,
}

const productsSlice = createSlice({
    name: '@@products',
    initialState,
    reducers: {
        resetProducts: () => {
            return initialState
        },

        setIsLoadedProduct: (state, action) => {
            return {
                ...state,
                isLoadingProducts: action.payload
            }
        },

        addQuantityProducts: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
    }
})

export const { setIsLoadedProduct, resetProducts, addQuantityProducts } = productsSlice.actions
export const productsReducer = productsSlice.reducer

//selectors
export const selectProductInfo = (state: RootState) => ({
    isLoadingProducts: state.productsReducer.isLoadingProducts,
})
