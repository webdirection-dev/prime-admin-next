import { ObjectId, MongoClient } from 'mongodb'
import { plainObject } from '@/utils/helpers'

if (!process.env.MONGODB_URI)
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')

const uri = process.env.MONGODB_URI

export async function createOrder(body: any) {
    const options = {}
    const client = new MongoClient(uri, options)

    try {
        await client.connect()
        const data = await client.db().collection('orders').insertOne({
            ...body,
            createdAt: new Date().toDateString(),
        })
        return {
            newOrder: plainObject({
                ...data,
                // createdAt: new ObjectId(data.insertedId).getTimestamp(),
            })
        }
    }
    catch (error) {
        return { error: 'Failed to create ORDER! ' + error }
    }
    finally {
        await client.close()
    }
}

export async function updateOrder(id: string, body: any) {
    const options = {}
    const client = new MongoClient(uri, options)

    try {
        await client.connect()

        const currentData = await client.db().collection('orders').findOne({ _id: new ObjectId(id) })

        if (currentData) {
            if (currentData?.isPaid) return { error: 'Error: order is already paid' }
        }

        const data = await client.db().collection('orders').updateOne({ _id: new ObjectId(id) }, { $set: body })

        if (data.modifiedCount > 0) {
            const updatedData = await client.db().collection('orders').findOne({ _id: new ObjectId(id) })
            return { order: plainObject(updatedData) }
        }
        return { error: plainObject(data) }


    } catch (error) {
        return { error: 'Failed to connect to ORDER. Вот так-вот) ' + error }
    } finally {
        await client.close()
    }
}

export async function findAllOrders(id: string) {
    const options = {}
    const client = new MongoClient(uri, options)

    try {
        await client.connect()
        const data = await client.db().collection('orders').find({ user: id }).toArray()
        return { orders: plainObject(data) }

    } catch (error) {
        return { error: 'Failed to connect to ORDER. Вот так-вот)' + error }
    } finally {
        await client.close()
    }
}

export async function findOrderById(id: string) {
    const options = {}
    const client = new MongoClient(uri, options)

    try {
        await client.connect()
        const data = await client.db().collection('orders').findOne({ _id: new ObjectId(id) })
        return { order: plainObject(data) }
    } catch (error) {
        return { error: 'Failed to connect to ORDER. Вот так-вот) ' + error }
    } finally {
        await client.close()
    }
}