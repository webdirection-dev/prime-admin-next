import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='flex justify-center items-center' style={{ height: '100vh' }}>
            <div className='notfound_404'>
                <h1>404</h1>
            </div>
            <div className='notfound_desc'>
                This page could not be found. View
                <Link href="/"> Home page</Link>

            </div>
        </div>
    )
}