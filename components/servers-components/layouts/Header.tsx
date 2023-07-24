import Link from 'next/link'

export default function Header() {
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