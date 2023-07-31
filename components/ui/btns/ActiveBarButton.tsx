'use client'

import { useMatchDesktop } from '@/components/clients-components/hooks/use-match-desktop'
import { useActiveBar } from './hooks/use-active-bar'
import CalendarButton from './CalendarButton'
import LanguageButton from './LanguageButton'

export default function ActiveBarButton({ lang, txt }: any) {
    const { isNotDesktop } = useMatchDesktop()
    const { Menu, Toast, toast, menuRight, items, title } = useActiveBar(txt, lang)


    return (
        <>
            {isNotDesktop && (
                <>
                    <button
                        type='button'
                        className={'btn-header flex-order-3 inline-block rounded-full'}
                        onClick={(event) => menuRight.current?.toggle(event)}
                        aria-controls='popup_menu_right'
                        aria-haspopup
                    >
                        {''}
                        <i className='pi pi-ellipsis-v' style={{ fontSize: '1.5rem' }}></i>
                    </button>

                    <Menu
                        model={items}
                        popup
                        ref={menuRight}
                        id='popup_menu_right'
                        popupAlignment='right'
                    />
                    <Toast ref={toast}></Toast>
                </>
            )}

            {!isNotDesktop && (
                <ul className='flex justify-content-between align-items-center ml-auto'>
                    <li className='ml-3'><LanguageButton title={title} /></li>
                    <li className='ml-3'><CalendarButton /></li>
                </ul>
            )}
        </>
    )
}
