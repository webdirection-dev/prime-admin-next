'use client'

import { useAppDispatch } from '@/utils/lib/store'
import { setIsShowAsideMenu } from '@/utils/lib/store/menu-slice'

export default function HeaderButton({ name }: any) {
    const dispatch = useAppDispatch()
    const icon =
        name === 'toggle-aside' && 'pi-bars' ||
        name === 'calendar' && 'pi-calendar' ||
        name === 'user' && 'pi-user' ||
        name === 'cog' && 'pi-cog'

    return (
        <button
            type="button"
            className={"btn-header rounded-full ml-4"}
            onClick={() => {
                if (name === 'toggle-aside') dispatch(setIsShowAsideMenu())
            }}
        >
            {''}<i className={"pi " + icon} style={{ fontSize: '1.5rem' }}></i>
        </button>
    )
}