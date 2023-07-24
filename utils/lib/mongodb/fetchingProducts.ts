import { ObjectId, MongoClient } from 'mongodb'
import { plainObject } from '@/utils/helpers'
import { startProductsAggregateOptions, selectProductsAggregateOptions } from './mongo-configs'

if (!process.env.MONGODB_URI)
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')

const uri = process.env.MONGODB_URI

export async function findProductBySlug(slug: string) {
    const options = {}
    const client = new MongoClient(uri, options)

    try {
        await client.connect()
        const data = await client.db().collection('products').findOne({ slug })
        return { product: plainObject(data) }

    } catch (error) {
        throw new Error('Failed to connect to collection. Вот так-вот)')
    } finally {
        await client.close()
    }
}

export async function findAllProducts() {
    const options = {}
    const client = new MongoClient(uri, options)

    try {
        await client.connect()
        const data = await client.db().collection('products').find({}).toArray()
        return { products: plainObject(data) }

    } catch (error) {
        throw new Error('Failed to connect to collection. Вот так-вот)')
    } finally {
        await client.close()
    }
}

export async function findFeaturedProducts() {
    const options = {}
    const client = new MongoClient(uri, options)

    try {
        await client.connect()
        const data = await client.db().collection('products').find({ 'isFeatured': true }).toArray()
        return { products: plainObject(data) }

    } catch (error) {
        throw new Error('Failed to connect to collection. Вот так-вот)')
    } finally {
        await client.close()
    }
}

// SEARCH
export async function findSearchProducts(opt: any) {
    const options = {}
    const client = new MongoClient(uri, options)

    try {
        await client.connect()
        const cursor = await client.db().collection('products').find({
            category: {
                $in: opt.categories
            },
            brand: {
                $in: opt.brands
            },
        })

        const result = await cursor.toArray()
        return { aggregation: plainObject(result) }

    } catch (error) {
        throw new Error('Failed to connect to collection. Вот так-вот)' + error)
    } finally {
        await client.close()
    }
}

// PRODUCTS SSG
export async function findSSGProducts() {
    const options = {}
    const client = new MongoClient(uri, options)

    try {
        await client.connect()
        const data = await client.db().collection('products').find({}).toArray()

        return { products: data }

    } catch (error) {
        throw new Error('Failed to connect to collection. Вот так-вот)')
    } finally {
        await client.close()
    }
}

// SEED PRODUCTS
// export async function createProducts() {
//     const options = {}
//     const client = new MongoClient(uri, options)

//     try {
//         await client.connect()

//         await client.db().collection('products').deleteMany()
//         const data = await client.db().collection('products').insertMany(products.map(i => {
//             return {
//                 ...i,
//                 // createdAt: new Date()
//             }
//         }))

//         return { products: data }

//     } catch (error) {
//         throw new Error('Failed to connect to SEED. Вот так-вот)')
//     } finally {
//         await client.close()
//     }
// }

// AGGREGATE start product
export async function aggregateStartProducts() {
    const options = {}
    const client = new MongoClient(uri, options)

    try {
        await client.connect()
        const cursor = await client.db()
            .collection('products')
            .aggregate(
                startProductsAggregateOptions,
                { maxTimeMS: 60000, allowDiskUse: true }
            )

        const result = await cursor.toArray()

        return { aggregation: plainObject(result[0]) }

    } catch (error) {
        throw new Error('Failed to connect to collection. Вот так-вот)' + error)
    } finally {
        await client.close()
    }
}

// AGGREGATE FOR SEARCH PAGE
export async function aggregateSearchProducts(opt: any) {
    const options = {}
    const client = new MongoClient(uri, options)

    try {
        await client.connect()
        const cursor = await client.db()
            .collection('products')
            .aggregate(
                selectProductsAggregateOptions(opt),
                { maxTimeMS: 60000, allowDiskUse: true }
            )

        const result = await cursor.toArray()
        return { aggregation: plainObject(result[0]) }
        // return { aggregation: result[0] ? plainObject(result[0]) : { error: true } }

    } catch (error) {
        // throw new Error('Failed to connect to collection. Вот так-вот)' + error)
        return ({ error: error + ' Ошибка: plainObject(result[0]) не может обработать пустой массив. Скорее всего Монго не нашла документ. Попробуй изменить запрос' })
    } finally {
        await client.close()
    }
}