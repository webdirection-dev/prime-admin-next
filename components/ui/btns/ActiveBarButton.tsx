'use client'

import React, { useRef } from 'react'
import { Button } from 'primereact/button'
import { Menu } from 'primereact/menu'
import { MenuItem } from 'primereact/menuitem'
import { Toast } from 'primereact/toast'

import { useMatchDesktop } from '@/components/clients-components/hooks/use-match-desktop'
import { useAppDispatch, useAppSelector } from '@/utils/lib/store'
import HeaderButton from './HeaderButton'

export default function ActiveBarButton() {
    const dispatch = useAppDispatch()
    const { isNotDesktop } = useMatchDesktop()

    const menuRight = useRef<Menu>(null)
    const toast = useRef<Toast>(null)
    const items: MenuItem[] = [
        {
            label: 'Options',
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: () => {
                        toast.current?.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 })
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    command: () => {
                        toast.current?.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 })
                    }
                }
            ]
        },
        {
            label: 'Navigate',
            items: [
                {
                    label: 'React Website',
                    icon: 'pi pi-external-link',
                    url: 'https://reactjs.org/'
                },
                {
                    label: 'Router',
                    icon: 'pi pi-upload',
                    command: (e) => {
                        //router.push('/fileupload');
                    }
                }
            ]
        }
    ]

    return (
        <>
            {isNotDesktop && (
                <>
                    <button
                        type="button"
                        className={"btn-header flex-order-3 inline-block rounded-full"}
                        onClick={(event) => menuRight.current?.toggle(event)}
                        aria-controls="popup_menu_right"
                        aria-haspopup
                    >
                        {''}<i className="pi pi-ellipsis-v" style={{ fontSize: '1.5rem' }}></i>
                    </button>

                    <Menu model={items} popup ref={menuRight} id="popup_menu_right" popupAlignment="right" />
                    <Toast ref={toast}></Toast>
                </>
            )}

            {!isNotDesktop && (
                <ul className='flex justify-content-between align-items-center ml-auto'>
                    <li><HeaderButton name={'calendar'} /></li>
                    <li><HeaderButton name={'user'} /></li>
                    <li><HeaderButton name={'cog'} /></li>
                </ul>
            )}
        </>
    )
}