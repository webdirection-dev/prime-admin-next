'use client'

import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { useAppDispatch } from '@/utils/lib/store'
import { Menu } from 'primereact/menu'
import { MenuItem } from 'primereact/menuitem'
import { setTheme } from '@/utils/lib/store/theme-slice'
import Cookies from 'js-cookie'

const initialIsUse = Cookies.get('useSystem') ? JSON.parse(Cookies.get('useSystem') as string) : true
const initialSystemMode = Cookies.get('systemMode') ? JSON.parse(Cookies.get('systemMode') as string) : null
const initialMode = Cookies.get('mode') ? JSON.parse(Cookies.get('mode') as string) : null

export const useBtnTheme = (theme: any) => {
    const dispatch = useAppDispatch()
    const menuRight = useRef<Menu>(null)
    const [isUseSystemMode, setIsUseSystemMode] = useState(initialIsUse)
    const [systemMode, setSystemMode] = useState<any>(initialSystemMode)
    const [mode, setMode] = useState<any>(initialMode)
    const [icon, setIcon] = useState('')

    const items: MenuItem[] = [
        {
            label: theme.system,
            icon: `p-menuitem-icon pi pi-fw pi-cog ${isUseSystemMode && 'text-orange-500'}`,
            command: () => {
                Cookies.set('useSystem', JSON.stringify(true))
                Cookies.set('mode', JSON.stringify(null))
                setIsUseSystemMode(true)
                setMode(null)
            },
        },
        {
            label: theme.dark,
            icon: `p-menuitem-icon pi pi-fw pi-moon ${mode === 'dark' && 'text-orange-500'}`,
            command: () => {
                Cookies.set('useSystem', JSON.stringify(false))
                Cookies.set('mode', JSON.stringify('dark'))
                setIcon('sun')
                setMode('dark')
                setIsUseSystemMode(false)
                dispatch(setTheme('dark'))
            },
        },
        {
            label: theme.light,
            icon: `p-menuitem-icon pi pi-fw pi-sun ${mode === 'light' && 'text-orange-500'}`,
            command: () => {
                Cookies.set('useSystem', JSON.stringify(false))
                Cookies.set('mode', JSON.stringify('light'))
                setIcon('moon')
                setMode('light')
                setIsUseSystemMode(false)
                dispatch(setTheme('light'))
            },
        }
    ]

    useLayoutEffect(() => {
        if (isUseSystemMode) {
            const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')

            const handleColorSchemeChange = (e?: any) => {
                const systemTheme = darkModeQuery.matches ? 'dark' : 'light'
                setIcon(systemTheme === 'dark' ? 'sun' : 'moon')
                setSystemMode(systemTheme)
                Cookies.set('systemMode', JSON.stringify(systemTheme))
            }

            darkModeQuery.addEventListener('change', handleColorSchemeChange)
            handleColorSchemeChange(darkModeQuery)

            return () => {
                darkModeQuery.removeEventListener('change', handleColorSchemeChange)
            }
        }
    }, [isUseSystemMode])


    useEffect(() => {
        isUseSystemMode && document.documentElement.setAttribute("data-theme", systemMode)
        dispatch(setTheme(systemMode))
    }, [systemMode, isUseSystemMode])


    useEffect(() => {
        mode === 'light' && document.documentElement.setAttribute("data-theme", "light")
        mode === 'dark' && document.documentElement.setAttribute("data-theme", "dark")
    }, [mode])

    return { Menu, menuRight, items, icon }
}