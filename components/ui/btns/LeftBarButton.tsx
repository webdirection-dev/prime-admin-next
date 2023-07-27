'use client'

import { useMatchDesktop } from '@/components/clients-components/hooks/use-match-desktop'
import { useAppDispatch, useAppSelector } from '@/utils/lib/store'
import { selectMenuInfo, setIsShowAsideMenu, setIsShowMobileAside } from '@/utils/lib/store/menu-slice'


export default function LeftBarButton() {
    const { isNotDesktop } = useMatchDesktop()

    const dispatch = useAppDispatch()
    const { isShowAside } = useAppSelector(store => selectMenuInfo(store))

    const classes = !isShowAside && !isNotDesktop ? {
        outline: '0 none',
        outlineOffset: '0',
        boxShadow: '0 0 0 0.2rem #C7D2FE',
    } : {}

    return (
        <button
            type="button"
            className={"btn-header rounded-full ml-4"}
            style={classes}
            onClick={() => {
                isNotDesktop && dispatch(setIsShowMobileAside(true))
                !isNotDesktop && dispatch(setIsShowAsideMenu())
            }}
        >
            {''}<i className="pi pi-bars" style={{ fontSize: '1.5rem' }}></i>
        </button>
    )
}