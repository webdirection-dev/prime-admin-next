'use client'

import { useBtnLanguage } from './hooks/use-btn-language'

export default function LanguageButton() {
    const { Menu, menuRight, items, styles } = useBtnLanguage()
    return (
        <div id='lang' className='flex justify-content-between align-items-center'>
            <button
                type='button'
                className={
                    'flex pr-2 justify-content-center align-items-center text-color-secondary border-round-sm cursor-pointer hover:text-color hover:surface-hover'
                }
                aria-controls='popup-lang'
                aria-haspopup
                onClick={(event) => menuRight.current?.toggle(event)}
            >
                <i
                    className={'pi pi-globe h-3rem w-3rem inline-flex justify-content-center align-items-center border-circle'}
                    style={{ fontSize: '1.5rem', ...styles }}></i>

                <span className='ml-2'>English (US)</span>
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
