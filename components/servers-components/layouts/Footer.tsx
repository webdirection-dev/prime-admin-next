import Logo from '@/components/ui/Logo'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    // const colorScheme = 'white'
    const colorScheme = 'dark'

    const classes = {
        borderTop: '1px solid var(--surface-border)',
    }

    return (
        // <footer className='flex justify-around items-center h-10 shadow-inner'>
        <footer className='flex justify-content-between mr-5 pt-3' style={classes}>
            <p className='text-500 w-4'>NEXT MGO © {new Date().getFullYear()}</p>

            <Image
                src={`/img/logo/logo-${colorScheme}.svg`}
                width={27}
                height={20}
                alt="logo"
            />

            <div className='flex justify-content-end w-4'>
                <p className='mr-1 text-500'>With </p>

                <i className="pi pi-heart mr-1 text-pink-300" ></i>

                <p className='mr-1 text-500'> by</p>
                <Link
                    className='text-blue-400'
                    href={'https://github.com/webdirection-dev'}> NextJS
                    <span className='text-500'> and</span>
                    <span className='text-green-500'> MongoDB</span>
                </Link>
            </div>
        </footer>
    )
}
export default Footer
