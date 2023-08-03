'use client'


import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

export default function Test() {
    const [theme, setTheme] = useState('start')

    const setMode = async (mode: string) => {
        fetch('api/theme', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(mode),
        })
            .then(res => res.json())
            .then(data => {
                setTheme(data.themeSetting.theme)
                console.log(data.themeSetting)
            })
        // .catch(err => console.log(err))
        // .finally(() => console.log('finally'))
    }

    return (
        <>
            <button onClick={() => setMode('dark')}>Dark</button>
            <h3>{theme}</h3>
            <button onClick={() => setMode('light')}>Light</button>
        </>
    )
}