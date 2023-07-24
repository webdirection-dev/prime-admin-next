export const productsPerPages = 2

export const sorting = {
    featured: { _id: 1 },
    toprated: { rating: -1 },
    lowest: { price: 1 },
    highest: { price: -1 },
    newest: { createdAt: -1 },
} as any

export const startProductsAggregateOptions = [
    {
        $facet: {
            allDocumentCount: [
                {
                    $group: {
                        _id: null,
                        quantityAllDocuments: { $count: {} }
                    }
                }
            ],
            productsOfCategory: [
                {
                    $group: {
                        _id: '$category',
                        quantity: { $count: {} }
                    }
                }
            ],
            productsOfBrands: [
                {
                    $group: {
                        _id: '$brand',
                        quantity: { $count: {} }
                    }
                }
            ],
            allProducts: [{ $match: {} }]
        }
    },
    {
        $addFields: {
            allDocumentCount: {
                $arrayElemAt: ['$allDocumentCount', 0]
            }
        }
    },
    {
        $project: {
            allDocumentCount:
                '$allDocumentCount.quantityAllDocuments',
            productsOfCategory: 1,
            productsOfBrands: 1,
            allProducts: 1
        }
    }
]

export const selectProductsAggregateOptions = ({ words, pagination, categories, brands, prices, ratings, sort }: any) => {
    const price = prices.split(' ')
    return (
        [
            {
                $match: {
                    $or: [
                        { name: { $regex: `${words + '.*'}`, $options: 'i' } },
                        { brand: { $regex: `${words + '.*'}`, $options: 'i' } },
                    ]
                }
            },
            { $match: { category: { $in: categories } } },
            { $match: { brand: { $in: brands } } },
            { $match: { price: { $gte: Number(price[0]), $lte: Number(price[1]) } } },
            { $match: { rating: { $gte: ratings } } },
            { $sort: sorting[sort] },
            // { $skip: pagination * productsPerPages },
            // { $limit: productsPerPages }
            {
                $group: {
                    _id: null,
                    quantity: { $count: {} },
                    documents: { $push: '$$ROOT' }
                }
            },
            {
                $project: {
                    _id: 0,
                    quantity: 1,
                    documents: {
                        $slice: ['$documents', pagination * productsPerPages, productsPerPages]
                    }
                }
            }
        ]
    )
}