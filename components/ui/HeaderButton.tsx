'use client'

import { useAppDispatch, useAppSelector } from '@/utils/lib/store'
import { selectMenuInfo, setIsShowAsideMenu } from '@/utils/lib/store/menu-slice'

export default function HeaderButton({ name }: any) {
    const dispatch = useAppDispatch()
    const { isShowAside } = useAppSelector(store => selectMenuInfo(store))
    const icon =
        name === 'toggle-aside' && 'pi-bars' ||
        name === 'calendar' && 'pi-calendar' ||
        name === 'user' && 'pi-user' ||
        name === 'cog' && 'pi-cog'

    const classes = !isShowAside && name === 'toggle-aside' ? {
        outline: '0 none',
        outlineOffset: '0',
        boxShadow: '0 0 0 0.2rem #C7D2FE',
    } : {}

    return (
        <button
            type="button"
            className={"btn-header rounded-full ml-4"}
            style={classes}
            onClick={() => {
                if (name === 'toggle-aside') dispatch(setIsShowAsideMenu())
            }}
        >
            {''}<i className={"pi " + icon} style={{ fontSize: '1.5rem' }}></i>
        </button>
    )
}