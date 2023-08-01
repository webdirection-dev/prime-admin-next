'use client'

import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/utils/lib/store'
import { Menu } from 'primereact/menu'
import { MenuItem } from 'primereact/menuitem'
import { selectTheme, setTheme } from '@/utils/lib/store/theme-slice'



export const useBtnTheme = () => {
    const dispatch = useAppDispatch()
    const menuRight = useRef<Menu>(null)
    const [mode, setMode] = useState<any>(null)
    const [systemMode, setSystemMode] = useState<any>(null)
    const [isUseSystemMode, setIsUseSystemMode] = useState(true)

    const items: MenuItem[] = [
        {
            label: 'Dark',
            icon: `p-menuitem-icon pi pi-fw pi-moon ${mode === 'dark' && 'text-orange-500'}`,
            command: () => {
                setMode('dark')
                setIsUseSystemMode(false)
                dispatch(setTheme('dark'))
            },
        },
        {
            label: 'Light',
            icon: `p-menuitem-icon pi pi-fw pi-sun ${mode === 'light' && 'text-orange-500'}`,
            command: () => {
                setMode('light')
                setIsUseSystemMode(false)
                dispatch(setTheme('light'))
            },
        },
        {
            label: 'System',
            icon: `p-menuitem-icon pi pi-fw pi-cog ${isUseSystemMode && 'text-orange-500'}`,
            command: () => {
                setIsUseSystemMode(true)
                setMode(null)
            },
        },
    ]


    useLayoutEffect(() => {
        if (isUseSystemMode) {
            const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')

            const handleColorSchemeChange = (e?: any) => {
                const systemTheme = darkModeQuery.matches ? 'dark' : 'light'
                setSystemMode(systemTheme)
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

    return { Menu, menuRight, items, mode }
}