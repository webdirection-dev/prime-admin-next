import { useAppDispatch } from '@/utils/lib/store'
import { setIsShowMobileAside } from '@/utils/lib/store/menu-slice'

export function Mask() {
    const dispatch = useAppDispatch()
    const classes = {
        backgroundColor: 'var(--maskbg)',
        animation: 'fadein .2s',
    }
    return <div
        style={classes}
        className='fixed top-0 left-0 w-full h-full z-4'
        onClick={() => dispatch(setIsShowMobileAside(false))}
    />
}