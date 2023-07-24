import Link from 'next/link'

const Footer = () => {

    return (
        <footer className='flex justify-around items-center h-10 shadow-inner'>
            <p>MyStore © {new Date().getFullYear()}</p>

            <div className='group flex'>
                <p className='mr-0.5 text-gray-700 dark:text-white'>With Love</p>

                <p className='mr-1 text-gray-700 dark:text-white'>by</p>
                <Link
                    className='group-hover:underline text-blue-400'
                    href={'https://github.com/webdirection-dev'}> NextJS
                    <span className='text-gray-700 dark:text-white'> and</span>
                    <span className='text-green-500 dark:text-green-400'> MongoDB</span>
                </Link>
            </div>
        </footer>
    )
}
export default Footer
