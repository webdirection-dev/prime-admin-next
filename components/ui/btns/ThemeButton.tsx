'use client'

import { useBtnTheme } from './hooks/use-btn-theme'

export default function ThemeButton({ theme }: any) {
    const { Menu, menuRight, items, icon, styles, setIsShow, isShow } = useBtnTheme(theme)

    return (
        <>
            <button
                id='theme'
                type="button"
                className={"btn-header flex-order-2 rounded-full flex-order-0 ml-auto lg:flex-order-1 lg:ml-3"}
                aria-controls='popup-theme'
                aria-haspopup
                onClick={(event) => {
                    setIsShow(!isShow)
                    return menuRight.current?.toggle(event)
                }}
            >
                {''}<i className={`pi pi-${icon} h-3rem w-3rem inline-flex justify-content-center align-items-center border-circle`} style={{ fontSize: '1.5rem', ...styles }}></i>
            </button>

            <Menu
                id='btn-theme'
                model={items}
                popup
                ref={menuRight}
                popupAlignment='left'
                className='menuForChrome'
            />
        </>
    )
}