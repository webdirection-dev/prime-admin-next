import { useRef } from 'react'
import { MenuItem } from 'primereact/menuitem'
import { Menu } from 'primereact/menu'
import { Toast } from 'primereact/toast'

export const useActiveBar = () => {
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
                        toast.current?.show({
                            severity: 'success',
                            summary: 'Updated',
                            detail: 'Data Updated',
                            life: 3000,
                        })
                    },
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    command: () => {
                        toast.current?.show({
                            severity: 'warn',
                            summary: 'Delete',
                            detail: 'Data Deleted',
                            life: 3000,
                        })
                    },
                },
            ],
        },
        {
            label: 'Navigate',
            items: [
                {
                    label: 'React Website',
                    icon: 'pi pi-external-link',
                    url: 'https://reactjs.org/',
                },
                {
                    label: 'Router',
                    icon: 'pi pi-upload',
                    command: (e) => {
                        //router.push('/fileupload');
                    },
                },
            ],
        },
    ]

    return { Menu, Toast, toast, menuRight, items }
}