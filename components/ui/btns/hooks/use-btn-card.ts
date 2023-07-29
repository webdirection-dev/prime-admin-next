'use client'

import { useRef } from 'react'
import { Menu } from 'primereact/menu'
import { MenuItem } from 'primereact/menuitem'


export const useBtnCard = () => {
    const menuLeft = useRef<Menu>(null)
    const items: MenuItem[] = [
        {
            label: 'Add New',
            icon: 'p-menuitem-icon pi pi-fw pi-plus',
            command: () => {
                console.log('Add New')
            },
        },
        {
            label: 'Remove',
            icon: 'p-menuitem-icon pi pi-fw pi-minus',
            command: () => {
                console.log('Remove')
            },
        },
    ]

    return { Menu, menuLeft, items }
}