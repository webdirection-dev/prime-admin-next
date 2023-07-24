import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './index'

import Cookies from 'js-cookie'

type TCartState = {
    status: string
    error: null | string
    products: any

}

const initialState: TCartState = {
    status: 'idle', // loading | successful | rejected
    error: null,
    products: Cookies.get('productsCookies')
        ? JSON.parse(Cookies.get('productsCookies') as string)
        : [],
}

const cartSlice = createSlice({
    name: '@@cart',
    initialState,
    reducers: {
        resetCart: () => {
            Cookies.remove('productsCookies')
            Cookies.remove('quantityAllCookies')
            return initialState
        },

        addProductToCart: (state, action) => {
            const isInclude = state.products.find(
                (i: any) => i.slug === action.payload.slug
            )

            if (!isInclude) {
                const out = {
                    ...action.payload,
                    quantityThisProduct: 1,
                    localId: String(action.payload.slug + Math.random()),
                }

                Cookies.set('productsCookies', JSON.stringify([...state.products, out]))

                return {
                    ...state,
                    products: [...state.products, out],
                }
            } else {
                const products = state.products.map((i: any) => {
                    if (i.slug === isInclude.slug) {
                        return { ...i, quantityThisProduct: i.quantityThisProduct + 1 }
                    } else return i
                })
                Cookies.set('productsCookies', JSON.stringify(products))

                return {
                    ...state,
                    products,
                }
            }
        },

        quantityThisItems: (state, action) => {
            const { localId, value } = action.payload

            const out = state.products.map((i: any) => {
                if (i.localId === localId) {
                    return {
                        ...i,
                        quantityThisProduct: value
                    }
                } else return i
            })

            Cookies.set('productsCookies', JSON.stringify(out))

            return {
                ...state,
                products: out,
            }
        },

        removeProductFromCart: (state, action) => {
            const removeItem = action.payload.quantityThisProduct
            const products = state.products.filter(
                (i: any) => i.localId !== action.payload.localId
            )

            Cookies.set('productsCookies', JSON.stringify(products))

            return {
                ...state,

                products,
            }
        }
    }
})

export const {
    resetCart,

    addProductToCart,
    removeProductFromCart,
    quantityThisItems
} = cartSlice.actions
export const cartReducer = cartSlice.reducer

//selectors
export const selectCartInfo = (state: RootState) => ({
    //status
    status: state.cartReducer.status,
    error: state.cartReducer.error,
    //product
    products: state.cartReducer.products,
    quantityAllItems: state.cartReducer.products.reduce((acc: any, item: any) => acc + item.quantityThisProduct, 0),
    totalCost: state.cartReducer.products.reduce((prev: any, next: any) => prev + (next.price * next.quantityThisProduct), 0)
})