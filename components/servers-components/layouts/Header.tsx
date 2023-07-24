
import Link from 'next/link'
import { aggregateStartProducts } from '@/utils/lib/mongodb/fetchingProducts'

export default async function Header() {
    const { aggregation } = await aggregateStartProducts()
    const { allDocumentCount, productsOfCategory, productsOfBrands } = aggregation
    const startPropr = JSON.stringify({ allDocumentCount, productsOfCategory, productsOfBrands })

    return (
        <header>
            <nav className='shadow-md'>
                <ul className='flex justify-between items-center h-12 px-4'>
                    <li style={{ minWidth: '120px' }}><Link href='/' className='text-lg font-bold'>myStore</Link></li>
                </ul>
            </nav>
        </header>
    )
}