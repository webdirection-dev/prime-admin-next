'use client'

import { useMatchDesktop } from '@/components/clients-components/hooks/use-match-desktop'
import { useAppDispatch, useAppSelector } from '@/utils/lib/store'
import { selectMenuInfo } from '@/utils/lib/store/menu-slice'
import HeaderButton from './HeaderButton'

export default function ActiveBarButton({ name }: any) {
    const dispatch = useAppDispatch()
    const { isShowAside } = useAppSelector(store => selectMenuInfo(store))
    const { isNotDesktop } = useMatchDesktop()

    const classes = !isShowAside ? {
        outline: '0 none',
        outlineOffset: '0',
        boxShadow: '0 0 0 0.2rem #C7D2FE',
    } : {}

    return (
        <>
            {isNotDesktop && (
                <button
                    type="button"
                    className={"btn-header flex-order-3 inline-block rounded-full"}
                    style={classes}
                    onClick={() => { }}
                >
                    {''}<i className="pi pi-ellipsis-v" style={{ fontSize: '1.5rem' }}></i>
                </button>
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

