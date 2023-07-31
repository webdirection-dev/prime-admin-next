'use client'

import { useRef } from 'react'
import { Menu } from 'primereact/menu'
import { MenuItem } from 'primereact/menuitem'


export const useBtnCard = (btnTile: any) => {
    const menuLeft = useRef<Menu>(null)
    const items: MenuItem[] = [
        {
            label: btnTile.add.title,
            icon: 'p-menuitem-icon pi pi-fw pi-plus',
            command: () => {
                // console.log('Add New')
            },
        },
        {
            label: btnTile.remove.title,
            icon: 'p-menuitem-icon pi pi-fw pi-minus',
            command: () => {
                // console.log('Remove')
            },
        },
    ]

    return { Menu, menuLeft, items }
}