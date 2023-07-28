import { useAppSelector } from '@/utils/lib/store'
import { selectMenuInfo } from '@/utils/lib/store/menu-slice'
import { useMatchDesktop } from './use-match-desktop'

export const useAside = () => {
    const { isShowMobileAside, isShowAside } = useAppSelector(store => selectMenuInfo(store))
    const { isNotDesktop } = useMatchDesktop()

    const classes = {
        width: '300px',
        transition: 'transform .2s,left .2s',
        backgroundColor: 'var(--surface-overlay)',
        boxShadow: '0 3px 5px rgba(0,0,0,.02),0 0 2px rgba(0,0,0,.05),0 1px 4px rgba(0,0,0,.08)',
    }

    const modified = isNotDesktop ?
        {
            transform: isShowMobileAside ? 'translateX(0)' : 'translateX(-100%)',
            left: '0',
            top: '0',
            height: '100vh',
            borderRadius: '0 12px 12px 0',
        } :
        {
            height: 'calc(100vh - 9rem)',
            transform: !isShowAside ? 'translateX(-100%)' : '',
            left: !isShowAside ? '0' : '2rem',
            top: '7rem',
            borderRadius: '12px',
        }

    return { classes, modified }
}