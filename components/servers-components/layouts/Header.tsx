import HeaderButton from '@/components/ui/HeaderButton'
import Logo from '@/components/ui/Logo'

export default function Header() {
    return (
        <header
            className='fixed top-0 left-0 flex align-items-center w-full h-5rem px-5 z-5'
            style={{
                backgroundColor: "var(--surface-card)",
                transition: 'left .2s',
                boxShadow: '0 3px 5px rgba(0, 0, 0, .02), 0 0 2px rgba(0, 0, 0, .05), 0 1px 4px rgba(0, 0, 0, .08)'
            }}
        >
            <Logo />

            <HeaderButton name={'toggle-aside'} />

            <ul className='flex justify-content-between align-items-center ml-auto'>
                <HeaderButton name={'calendar'} />
                <HeaderButton name={'user'} />
                <HeaderButton name={'cog'} />
            </ul>
        </header>
    )
}