'use client'

import { useAppDispatch, useAppSelector } from '@/utils/lib/store'
import { selectMenuInfo, setIsLightTheme } from '@/utils/lib/store/menu-slice'
import { useEffect, useLayoutEffect } from 'react'

export default function ThemeButton() {
    const dispatch = useAppDispatch()
    const { isThemeLight } = useAppSelector(store => selectMenuInfo(store))

    useLayoutEffect(() => {
        isThemeLight && document.documentElement.setAttribute("data-theme", "light")
        !isThemeLight && document.documentElement.setAttribute("data-theme", "dark")
    }, [isThemeLight])

    return (
        <button
            type="button"
            className={"btn-header flex-order-2 rounded-full flex-order-0 ml-auto lg:flex-order-1 lg:ml-3"}
            onClick={() => dispatch(setIsLightTheme())}
        >
            {''}<i className={`pi pi-${isThemeLight ? 'moon' : 'sun'}`} style={{ fontSize: '1.5rem' }}></i>
        </button>
    )
}