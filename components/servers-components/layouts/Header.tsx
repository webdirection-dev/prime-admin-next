import LeftBarButton from '@/components/ui/btns/LeftBarButton'
import Logo from '@/components/ui/Logo'
import ThemeButton from '@/components/ui/btns/ThemeButton'
import ActiveBarButton from '@/components/ui/btns/ActiveBarButton'

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
            <LeftBarButton />
            <ThemeButton />
            <ActiveBarButton />
        </header>
    )
}