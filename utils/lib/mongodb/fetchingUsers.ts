import { ObjectId, MongoClient } from 'mongodb'
import bcryptjs from 'bcryptjs'
import { plainObject } from '@/utils/helpers'

if (!process.env.MONGODB_URI)
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')

const uri = process.env.MONGODB_URI

export async function updateUser({ id, body }: any) {
    const options = {}
    const client = new MongoClient(uri, options)
    try {
        await client.connect()

        const toUpdateUser = await client.db().collection('users').findOne({ _id: new ObjectId(id) })

        if (toUpdateUser && bcryptjs.compareSync(body.currentPassword, toUpdateUser.password)) {
            if (body.username) toUpdateUser.username = body.username
            if (body.email) toUpdateUser.email = body.email
            if (body.password) toUpdateUser.password = bcryptjs.hashSync(body.password)
        }

        const data = await client.db().collection('users').updateOne({ _id: new ObjectId(id) }, { $set: toUpdateUser })
        return { newUser: plainObject(data) }

    }
    catch (error) {
        return { error: 'Failed to create User! ' + error }
    }
    finally {
        await client.close()
    }
}

export async function createUser(body: any) {
    const options = {}
    const client = new MongoClient(uri, options)

    try {
        await client.connect()
        const data = await client.db().collection('users').insertOne({
            ...body,
            password: bcryptjs.hashSync(body.password),
        })
        return { newUser: plainObject(data) }

    }
    catch (error) {
        return { error: 'Failed to create User! ' + error }
    }
    finally {
        await client.close()
    }
}

export async function findUserByEmail(email: string) {
    const options = {}
    const client = new MongoClient(uri, options)

    try {
        await client.connect()
        const data = await client.db().collection('users').findOne({ email })
        return { user: plainObject(data) }

    } catch (error) {
        throw new Error('Failed to connect to USER. Вот так-вот)')
    } finally {
        await client.close()
    }
}