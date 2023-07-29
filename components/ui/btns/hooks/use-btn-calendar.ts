'use client'

import { useEffect, useState } from 'react'

export const useBtnCalendar = () => {
    const [isShow, setIsShow] = useState<any>(false)
    const [isBuffer, setIsBuffer] = useState(false)
    const [date, setDate] = useState<any>(null)
    const hover = isShow ? '' : 'hover:text-color hover:surface-hover'
    const styles = isShow ? {
        outline: '0 none',
        outlineOffset: '0',
        boxShadow: '0 0 0 0.2rem #C7D2FE',
    } : {}

    useEffect(() => {
        const checkElement = (e: any) => {
            const dataClose = e.target.getAttribute('data-close')
            const btn = document.getElementById('calendar')?.contains(e.target)
            const dataPcSection = e.target.getAttribute('data-pc-section')
            const pcSection = e.target.parentElement?.dataset.pcSection
            const check = pcSection?.length > 0 || dataPcSection !== null || btn

            if (!isBuffer && (check && dataClose !== null)) {
                setIsShow(true)
                setIsBuffer(true)
            }

            if (isBuffer && (check && dataClose !== null)) {
                setIsShow(false)
                setIsBuffer(false)
            }

            if (!check && dataClose === null) {
                setIsShow(false)
                setIsBuffer(false)
            }
        }

        document.addEventListener('click', checkElement)

        return () => {
            document.removeEventListener('click', checkElement)
        }
    }, [isBuffer])

    return { styles, hover, isShow, date, setDate }
}