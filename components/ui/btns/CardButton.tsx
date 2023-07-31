'use client'

import { useBtnCard } from './hooks/use-btn-card'

export default function CardButton({ btn, btnTile }: any) {
    const { Menu, menuLeft, items } = useBtnCard(btnTile)
    return (
        <>
            <button
                type="button"
                className="btn-card w-3rem h-3rem border-circle hover:surface-hover"
                aria-controls='popup_menu_left'
                aria-haspopup
                onClick={(event) => menuLeft.current?.toggle(event)}
            >
                {''}<i className="p-button-icon p-c pi pi-ellipsis-v"></i>
            </button>

            <Menu
                model={items}
                popup
                ref={menuLeft}
                id='btn-popup'
                popupAlignment='left'
            />
        </>
    )
}