'use client'

import { MenuItem } from 'primereact/menuitem'
import { useBtnLanguage } from './hooks/use-btn-language'
import Link from 'next/link'

export default function LanguageButton({ title }: any) {
    const { Menu, menuRight, styles, redirectedPathName, setIsShow } = useBtnLanguage()

    const items: MenuItem[] = [
        {
            label: 'English (US)',
            icon: 'p-menuitem-icon pi pi-fw pi-heart',
            url: redirectedPathName('en'),
            command: () => setIsShow(false)
        },
        {
            label: 'Deutsch',
            icon: 'p-menuitem-icon pi pi-fw pi-star',
            url: redirectedPathName('de'),
            command: () => setIsShow(false)
        },
        {
            command: () => setIsShow(false),
            template: (item, options) => {
                return (
                    <Link href="/en" className="p-menuitem-link" role="menuitem" data-pc-section="action">
                        <span className="p-menuitem-icon pi pi-fw pi-heart" data-pc-section="icon"></span>
                        <span className="p-menuitem-text" data-pc-section="label">English (US)</span>
                    </Link>
                )
            }
        },
        {
            command: () => setIsShow(false),
            template: (item, options) => {
                return (
                    <Link href="/de" className="p-menuitem-link" role="menuitem" data-pc-section="action">
                        <span className="p-menuitem-icon pi pi-fw pi-star" data-pc-section="icon"></span>
                        <span className="p-menuitem-text" data-pc-section="label">Deutsch</span>
                    </Link>
                )
            }
        },
    ]

    return (
        <div id='lang' className='flex justify-content-between align-items-center'>
            <button
                type='button'
                className={
                    'flex pr-2 justify-content-end align-items-center text-color-secondary border-round-sm cursor-pointer hover:text-color hover:surface-hover'
                }
                aria-controls='popup-lang'
                aria-haspopup
                onClick={(event) => menuRight.current?.toggle(event)}
            >
                <i className={'pi pi-globe h-3rem w-3rem inline-flex justify-content-center align-items-center border-circle'}
                    style={{ fontSize: '1.5rem', ...styles }}></i>

                <span className='ml-2'>{title}</span>
            </button>

            <Menu
                model={items}
                popup
                ref={menuRight}
                id='menu-lang'
                popupAlignment='left'
            />
        </div>
    )
}
