'use client'

import { useBtnTheme } from './hooks/use-btn-theme'

export default function ThemeButton() {
    const { Menu, menuRight, items, mode } = useBtnTheme()

    return (
        <>
            <button
                type="button"
                className={"btn-header flex-order-2 rounded-full flex-order-0 ml-auto lg:flex-order-1 lg:ml-3"}
                aria-controls='popup-theme'
                aria-haspopup
                onClick={(event) => menuRight.current?.toggle(event)}
            >
                {''}<i className={`pi pi-${mode && mode === 'light' ? 'moon' : 'sun'}`} style={{ fontSize: '1.5rem' }}></i>
            </button>

            <Menu
                model={items}
                popup
                ref={menuRight}
                id='btn-theme'
                popupAlignment='left'
            />
        </>
    )
}