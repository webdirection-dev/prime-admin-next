'use client'

import { useAppDispatch, useAppSelector } from '@/utils/lib/store'
import { selectMenuInfo, setIsShowAsideMenu } from '@/utils/lib/store/menu-slice'

export default function LeftBarButton() {
    const dispatch = useAppDispatch()
    const { isShowAside } = useAppSelector(store => selectMenuInfo(store))

    const classes = !isShowAside ? {
        outline: '0 none',
        outlineOffset: '0',
        boxShadow: '0 0 0 0.2rem #C7D2FE',
    } : {}

    return (
        <button
            type="button"
            className={"btn-header rounded-full ml-4"}
            style={classes}
            onClick={() => dispatch(setIsShowAsideMenu())}
        >
            {''}<i className="pi pi-bars" style={{ fontSize: '1.5rem' }}></i>
        </button>
    )
}