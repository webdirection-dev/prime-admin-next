import { useState, useLayoutEffect } from 'react'

const isDesktop = matchMedia('(max-width: 992px)')

export const useMatchDesktop = () => {
    const [deskScreen, setDeskScreen] = useState(isDesktop.matches)

    useLayoutEffect(() => {
        const handler = () => setDeskScreen(isDesktop.matches)
        isDesktop.addEventListener('change', handler)
        return () => isDesktop.removeEventListener('change', handler)

    })

    return { isNotDesktop: deskScreen }
}