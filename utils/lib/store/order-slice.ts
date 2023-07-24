import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './index'
import Cookies from 'js-cookie'

type TOrderState = {
    orderClientComponent: any
    shippingAddress: { [key: string]: string }
    paymentMethod: string
}

const initialState: TOrderState = {
    orderClientComponent: {},
    shippingAddress: Cookies.get('shippingAddress')
        ? JSON.parse(Cookies.get('shippingAddress') as string)
        : {},
    paymentMethod: Cookies.get('paymentMethod')
        ? JSON.parse(Cookies.get('paymentMethod') as string)
        : '',
}

const orderSlice = createSlice({
    name: '@@order',
    initialState,
    reducers: {
        resetOrder: () => {
            Cookies.remove('shippingAddress')
            Cookies.remove('paymentMethod')
            return initialState
        },

        addClientOrderComponent: (state, action) => {
            return {
                ...state,
                orderClientComponent: action.payload
            }
        },

        addShippingAddress: (state, action) => {
            Cookies.set(
                'shippingAddress',
                JSON.stringify(action.payload)
            )

            return {
                ...state,
                shippingAddress: action.payload
            }
        },

        addPaymentMethod: (state, action) => {
            Cookies.set(
                'paymentMethod',
                JSON.stringify(action.payload)
            )

            return {
                ...state,
                paymentMethod: action.payload
            }
        },
    }
})

export const { addClientOrderComponent, addShippingAddress, addPaymentMethod } = orderSlice.actions
export const orderReducer = orderSlice.reducer

//selectors
export const selectOrderInfo = (state: RootState) => ({
    orderClientComponent: state.orderReducer.orderClientComponent,
    shippingAddress: state.orderReducer.shippingAddress,
    paymentMethod: state.orderReducer.paymentMethod,
})
