import { useState, useLayoutEffect } from 'react'

export const useMatchDesktop = () => {
    const [deskScreen, setDeskScreen] = useState(false)

    useLayoutEffect(() => {
        const checkMatches = () => {
            if (typeof window !== 'undefined') {
                const mediaQuery = matchMedia('(max-width: 991px)')
                setDeskScreen(mediaQuery.matches)
            }
        }

        checkMatches()

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', checkMatches)
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', checkMatches)
            }
        }
    })

    return { isNotDesktop: deskScreen }
}