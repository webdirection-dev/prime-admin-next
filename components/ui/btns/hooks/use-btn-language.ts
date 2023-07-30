'use client'

import { useEffect, useRef, useState } from 'react'
import { Menu } from 'primereact/menu'
import { MenuItem } from 'primereact/menuitem'

export const useBtnLanguage = () => {
  const menuRight = useRef<Menu>(null)
  const [isShow, setIsShow] = useState(false)

  const styles = isShow ? {
    outline: '0 none',
    outlineOffset: '0',
    boxShadow: '0 0 0 0.2rem #C7D2FE',
  } : {}

  const items: MenuItem[] = [
    {
      label: 'English (US)',
      icon: 'p-menuitem-icon pi pi-fw pi-heart',
      command: () => {
        setIsShow(false)
        console.log('Add New')
      },
    },
    {
      label: 'Deutsch',
      icon: 'p-menuitem-icon pi pi-fw pi-star',
      command: () => {
        setIsShow(false)
        console.log('Remove')
      },
    },
  ]

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

  return { Menu, menuRight, items, styles }
}
