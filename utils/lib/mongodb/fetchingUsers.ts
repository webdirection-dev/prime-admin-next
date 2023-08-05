import { plainObject } from '@/utils/helpers'
import { ObjectId, MongoClient } from 'mongodb'

if (!process.env.MONGODB_URI)
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')

const uri = process.env.MONGODB_URI

const users = [
    { "isPrefersColorScheme": true, "theme": "dark" }
]

export async function updateUser(body: any) {
    const options = {}
    const client = new MongoClient(uri, options)
    try {
        await client.connect()
        const data = await client.db().collection('users').updateOne({}, { $set: body })
        return { ...plainObject(data) }
    }
    catch (error) {
        return { error: 'Failed to create User! ' + error }
    }
    finally {
        await client.close()
    }
}

export async function findUser() {
    const options = {}
    const client = new MongoClient(uri, options)

    try {
        await client.connect()
        const data = await client.db().collection('users').findOne({})
        return { ...plainObject(data) }

    } catch (error) {
        throw new Error('Failed to connect to USER. Вот так-вот)')
    } finally {
        await client.close()
    }
}