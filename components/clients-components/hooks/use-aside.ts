
import { useAppSelector } from '@/utils/lib/store'
import { selectMenuInfo } from '@/utils/lib/store/menu-slice'
import { useEffect } from 'react'

export const useAside = () => {
    const { isShowAside } = useAppSelector(store => selectMenuInfo(store))

    useEffect(() => {
        // console.log(window.matchMedia("(min-width: 1400px)"))
    }, [])

    return { isShowAside }
}