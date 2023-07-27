import { useState, useLayoutEffect, useEffect } from 'react'

export const useMatchDesktop = () => {
    const [deskScreen, setDeskScreen] = useState(false)

    useEffect(() => {
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


// import { useState, useLayoutEffect } from 'react'

// const isDesktop = matchMedia('(max-width: 991px)')

// export const useMatchDesktop = () => {
//     const [deskScreen, setDeskScreen] = useState(isDesktop.matches)

// useLayoutEffect(() => {
//     const handler = () => setDeskScreen(isDesktop.matches)
//     isDesktop.addEventListener('change', handler)
//     return () => isDesktop.removeEventListener('change', handler)
// })

//     return { isNotDesktop: deskScreen }
// }