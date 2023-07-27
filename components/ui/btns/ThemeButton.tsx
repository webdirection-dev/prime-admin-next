'use client'

import { useAppDispatch, useAppSelector } from '@/utils/lib/store'
import { selectMenuInfo, setIsLightTheme } from '@/utils/lib/store/menu-slice'
import { useEffect } from 'react'

export default function ThemeButton({ name }: any) {
    const dispatch = useAppDispatch()
    const { isThemeLight } = useAppSelector(store => selectMenuInfo(store))

    useEffect(() => {
        let themeLink = document.getElementById('app-theme') as any

        if (themeLink) {
            if (!isThemeLight) themeLink.href = "/themes/md-dark-deeppurple/theme.css"
            if (isThemeLight) themeLink.href = "/themes/md-light-deeppurple/theme.css"
        }
    }, [isThemeLight])

    return (
        <button
            type="button"
            className={"btn-header flex-order-2 rounded-full flex-order-0 ml-auto lg:flex-order-1 lg:ml-4"}
            onClick={() => dispatch(setIsLightTheme())}
        >
            {''}<i className={`pi pi-${!isThemeLight ? 'sun' : 'moon'}`} style={{ fontSize: '1.5rem' }}></i>
        </button>
    )
}