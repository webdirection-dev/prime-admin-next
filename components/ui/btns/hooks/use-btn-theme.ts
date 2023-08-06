'use client'

import { useAppDispatch, useAppSelector } from '@/utils/lib/store'
import { Menu } from 'primereact/menu'
import { MenuItem } from 'primereact/menuitem'
import { selectTheme, setTheme } from '@/utils/lib/store/theme-slice'
import { useRef, useLayoutEffect, useState, useEffect } from 'react'

const rootDoc = document.documentElement

export const useBtnTheme = (theme: any) => {
    const dispatch = useAppDispatch()
    const { themeRTK } = useAppSelector(store => selectTheme(store))
    const menuRight = useRef<Menu>(null)
    const [isUseSystemMode, setIsUseSystemMode] = useState(themeRTK === null || themeRTK === 'auto')
    const [icon, setIcon] = useState('')

    const items: MenuItem[] = [
        {
            label: theme.system,
            icon: `p-menuitem-icon pi pi-fw pi-cog ${(!themeRTK || themeRTK === 'auto') && 'text-orange-500'}`,
            command: () => {
                dispatch(setTheme(null))
                changeThemeDriver('auto')
                setIsUseSystemMode(true)
            },
        },
        {
            label: theme.dark,
            icon: `p-menuitem-icon pi pi-fw pi-moon ${themeRTK === 'dark' && 'text-orange-500'}`,
            command: () => handlerClick('dark'),
        },
        {
            label: theme.light,
            icon: `p-menuitem-icon pi pi-fw pi-sun ${themeRTK === 'light' && 'text-orange-500'}`,
            command: () => handlerClick('light'),
        }
    ]

    const changeThemeDriver = (theme: string) => {
        localStorage.setItem('theme', theme)
        rootDoc && rootDoc.setAttribute('data-theme', theme)
    }

    const handlerClick = (theme: string) => {
        dispatch(setTheme(theme))
        changeThemeDriver(theme)
        setIcon(theme === 'light' ? 'moon' : 'sun')
        setIsUseSystemMode(false)
    }

    useLayoutEffect(() => {
        if (isUseSystemMode) {
            const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')

            const handleColorSchemeChange = (e?: any) => {
                const colorMode = e.matches ? 'dark' : 'light'
                setIcon(colorMode === 'light' ? 'moon' : 'sun')
            }

            darkModeQuery.addEventListener('change', handleColorSchemeChange)
            handleColorSchemeChange(darkModeQuery)
            return () => {
                darkModeQuery.removeEventListener('change', handleColorSchemeChange)
            }
        } else { setIcon(themeRTK === 'light' ? 'moon' : 'sun') }
    }, [isUseSystemMode])

    useLayoutEffect(() => {
        if (typeof window !== "undefined") {
            const storage = localStorage.getItem("theme")
            changeThemeDriver(storage || 'auto')
        }
    }, [])

    return { Menu, menuRight, items, icon }
}