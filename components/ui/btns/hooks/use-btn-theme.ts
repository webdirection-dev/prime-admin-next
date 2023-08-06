'use client'

import { useAppDispatch } from '@/utils/lib/store'
import { Menu } from 'primereact/menu'
import { MenuItem } from 'primereact/menuitem'
import { setTheme } from '@/utils/lib/store/theme-slice'
import { useRef, useLayoutEffect, useState, useEffect } from 'react'

const rootDoc = document.documentElement
let initialSystemMode = true
let initialMode = null as null | string

if (typeof window !== "undefined") {
    if (localStorage.getItem("prefers-color") === 'false') initialSystemMode = false
    initialMode = localStorage.getItem("theme")
}

export const useBtnTheme = (theme: any) => {
    const dispatch = useAppDispatch()
    const menuRight = useRef<Menu>(null)
    const [isUseSystemMode, setIsUseSystemMode] = useState(initialSystemMode)
    const [mode, setMode] = useState<null | string>(initialMode)
    const [icon, setIcon] = useState('')

    const items: MenuItem[] = [
        {
            label: theme.system,
            icon: `p-menuitem-icon pi pi-fw pi-cog ${isUseSystemMode && 'text-orange-500'}`,
            command: () => {
                changeThemeDriver('auto')
                setIsUseSystemMode(true)
                setMode(null)
                typeof window !== "undefined" && localStorage.setItem('prefers-color', 'true')
            },
        },
        {
            label: theme.dark,
            icon: `p-menuitem-icon pi pi-fw pi-moon ${mode === 'dark' && 'text-orange-500'}`,
            command: () => handlerClick('dark'),
        },
        {
            label: theme.light,
            icon: `p-menuitem-icon pi pi-fw pi-sun ${mode === 'light' && 'text-orange-500'}`,
            command: () => handlerClick('light'),
        }
    ]

    const changeThemeDriver = (theme: string) => {
        localStorage.setItem('theme', theme)
        rootDoc.setAttribute('data-theme', theme)
    }

    const handlerClick = (theme: string) => {
        changeThemeDriver(theme)
        setMode(theme)
        setIcon(theme === 'light' ? 'moon' : 'sun')
        setIsUseSystemMode(false)
        typeof window !== "undefined" && localStorage.setItem('prefers-color', 'false')
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
        } else {
            if (mode === null) setIcon(mode === 'light' ? 'moon' : 'sun')
            else setIcon(mode === 'light' ? 'moon' : 'sun')
        }
    }, [isUseSystemMode])


    useEffect(() => {
        dispatch(setTheme(mode))
    }, [mode])

    useLayoutEffect(() => {
        if (typeof window !== "undefined") {
            const storage = localStorage.getItem("theme")
            changeThemeDriver(storage || 'auto')
        }
    }, [])

    return { Menu, menuRight, items, icon }
}