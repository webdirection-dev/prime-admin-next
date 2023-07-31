import { useRef } from 'react'
import { MenuItem } from 'primereact/menuitem'
import { Menu } from 'primereact/menu'
import { Toast } from 'primereact/toast'

export const useActiveBar = (lang: string, activeBar: any) => {
    const menuRight = useRef<Menu>(null)
    const toast = useRef<Toast>(null)
    const { options, navigate } = activeBar
    const title = lang === 'en' ? 'English (US)' : 'Deutsch'

    const items: MenuItem[] = [
        {
            label: options.label,
            items: [
                {
                    label: options.update.label,
                    icon: 'pi pi-refresh',
                    command: () => {
                        toast.current?.show({
                            severity: 'success',
                            summary: options.update.summary,
                            detail: options.update.details,
                            life: 3000,
                        })
                    },
                },
                {
                    label: options.delete.label,
                    icon: 'pi pi-times',
                    command: () => {
                        toast.current?.show({
                            severity: 'warn',
                            summary: options.delete.summary,
                            detail: options.delete.details,
                            life: 3000,
                        })
                    },
                }
            ],
        },
        {
            label: navigate.label,
            items: [
                {
                    label: navigate.navigate.label,
                    icon: 'pi pi-external-link',
                    url: 'https://reactjs.org/',
                },
                {
                    label: navigate.router.label,
                    icon: 'pi pi-upload',
                    command: (e) => {
                        //router.push('/fileupload');
                    },
                },
            ],
        },
    ]

    return { Menu, Toast, toast, menuRight, items, title }
}