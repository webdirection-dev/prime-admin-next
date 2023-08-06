'use client'

import { useEffect, useRef, useState } from 'react'
import { Menu } from 'primereact/menu'
import { usePathname } from 'next/navigation'

export const useBtnLanguage = () => {
    const pathName = usePathname()
    const menuRight = useRef<Menu>(null)
    const [isShow, setIsShow] = useState(false)

    const styles = isShow ? {
        outline: '0 none',
        outlineOffset: '0',
        boxShadow: '0 0 0 0.2rem #C7D2FE',
    } : {}

    const redirectedPathName = (locale: string) => {
        if (!pathName) return '/'
        const segments = pathName.split('/')
        segments[1] = locale
        return segments.join('/')
    }

    useEffect(() => {
        const checkElement = (e: any) => {
            const btn = document.getElementById('lang')?.contains(e.target)
            const menu = document.getElementById('menu-lang')?.contains(e.target)
            if (btn) setIsShow(!isShow)
            if (!btn) setIsShow(false)
            if (!btn && menu && isShow) setIsShow(true)
        }

        document.addEventListener('click', checkElement)

        return () => {
            document.removeEventListener('click', checkElement)
        }
    }, [isShow])

    return { Menu, menuRight, styles, redirectedPathName, setIsShow }
}
