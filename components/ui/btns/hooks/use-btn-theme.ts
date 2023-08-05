'use client'

import { useAppDispatch } from '@/utils/lib/store'
import { Menu } from 'primereact/menu'
import { MenuItem } from 'primereact/menuitem'
import { setTheme } from '@/utils/lib/store/theme-slice'
import { useRef, useLayoutEffect, useState, useEffect } from 'react'
import { updateUserAction } from '@/utils/lib/mongodb/actions'

export const useBtnTheme = (theme: any, user: any) => {
    const dispatch = useAppDispatch()
    const menuRight = useRef<Menu>(null)
    const [isUseSystemMode, setIsUseSystemMode] = useState(user.isPrefersColorScheme)
    const [mode, setMode] = useState<any>(user.theme)
    const [icon, setIcon] = useState('')

    const items: MenuItem[] = [
        {
            label: theme.system,
            icon: `p-menuitem-icon pi pi-fw pi-cog ${isUseSystemMode && 'text-orange-500'}`,
            command: () => {
                setIsUseSystemMode(true)
                setMode(null)
            },
        },
        {
            label: theme.dark,
            icon: `p-menuitem-icon pi pi-fw pi-moon ${mode === 'dark' && 'text-orange-500'}`,
            command: () => {
                handlerClick('dark')
            },
        },
        {
            label: theme.light,
            icon: `p-menuitem-icon pi pi-fw pi-sun ${mode === 'light' && 'text-orange-500'}`,
            command: () => {
                handlerClick('light')
            },
        }
    ]

    const changeThemeDriver = (theme: string) => {
        const themeDriver = document.getElementById('app-theme') as HTMLLinkElement
        themeDriver.href = "/themes/" + theme + "-deeppurple.theme.css"
    }

    const handlerClick = (theme: string) => {
        changeThemeDriver(theme)
        setMode(theme)
        setIcon(theme === 'light' ? 'moon' : 'sun')
        setIsUseSystemMode(false)
        updateUserAction({ isPrefersColorScheme: false, theme })
    }

    useLayoutEffect(() => {
        if (isUseSystemMode) {
            changeThemeDriver('auto')
            const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')

            const handleColorSchemeChange = (e?: any) => {
                const colorMode = e.matches ? 'dark' : 'light'
                updateUserAction({ isPrefersColorScheme: true, theme: null })
                setIcon(colorMode === 'light' ? 'moon' : 'sun')
            }

            darkModeQuery.addEventListener('change', handleColorSchemeChange)
            handleColorSchemeChange(darkModeQuery)
            return () => {
                darkModeQuery.removeEventListener('change', handleColorSchemeChange)
            }
        } else {
            if (mode === null) setIcon(user.theme === 'light' ? 'moon' : 'sun')
            else setIcon(mode === 'light' ? 'moon' : 'sun')
        }
    }, [isUseSystemMode])


    useEffect(() => {
        dispatch(setTheme(mode))
    }, [mode])

    return { Menu, menuRight, items, icon }
}