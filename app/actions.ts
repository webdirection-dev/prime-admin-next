'use server'

import { createOrder, findOrderById, updateOrder } from '@/utils/lib/mongodb/fetchingOrders'
import { aggregateSearchProducts, aggregateStartProducts, findAllProducts, findSearchProducts } from '@/utils/lib/mongodb/fetchingProducts'
import { createUser, updateUser } from '@/utils/lib/mongodb/fetchingUsers'
import { revalidatePath } from 'next/cache'

// USERS
export async function createUserAction(body: any) {
    return await createUser(body)
}

export async function updateUserAction({ id, bodyOut: body }: any) {
    return await updateUser({ id, body })
}

// ORDERS
export async function createOrderAction(body: any) {
    const order = await createOrder(body)

    revalidatePath('/protected/order')
    return order
}

export async function updateOrderAction({ id, details }: any) {
    const data = await findOrderById(id)

    if (data.order) {
        if (data.order.isPaid) return { error: 'Error: order is already paid' }

        const update = {
            isPaid: true,
            paidAt: Date.now(),
            paymentResult: {
                id,
                status: details.status,
                email_address: details.payer.email_address,
            },
        }

        const orderPay = await updateOrder(id, update)

        revalidatePath('/protected/order/' + id)
        return orderPay
    } else return
}

// PRODUCTS
export async function findAllProductsAction() {
    return await findAllProducts()
}

export async function findSearchProductsAction(opt: any) {
    return await findSearchProducts(opt)
}

// PRODUCTS AGGREGATE
export async function aggregateSearchProductsAction(opt: any) {
    return await aggregateSearchProducts(opt)
}

export async function aggregateStartProductsAction() {
    return await aggregateStartProducts()
}
