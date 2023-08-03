import fs from 'fs'
import path from 'path'
import { NextRequest, NextResponse } from 'next/server'
import { IParams } from '@/utils/types/types'

const rootPath = path.resolve()
const filePath = path.join(rootPath, '/utils/themes/themes.json')
const cssPath = path.join(rootPath, '/utils/themes/theme.css')

// const cssContent = body === 'dark' ?
//         `body {background-color: blue}` :
//         `@import url('./prefers-color-scheme/light.theme.css');@import url('./prefers-color-scheme/dark.theme.css');`

export async function POST(req: NextRequest, { params }: IParams) {
    const body = await req.json()
    const jsonData = JSON.stringify({ isPrefersColorScheme: true, theme: body }, null, 2)

    const cssContent = body === 'dark' ? `@import url('./mode/dark-deeppurple.theme.css')` : `@import url('./mode/light-deeppurple.theme.css');`

    const writeCss = async () => {
        try {
            fs.writeFileSync(cssPath, cssContent, 'utf8')
        } catch (err) {
            console.error('writeFileSync An error occurred:', err)
        }
    }
    const write = async () => {
        try {
            fs.writeFileSync(filePath, jsonData, 'utf8')
        } catch (err) {
            console.error('writeFileSync An error occurred:', err)
        }
    }

    await writeCss()
    await write()

    try {
        const read = fs.readFileSync(filePath, 'utf8')
        const jsonData = JSON.parse(read)

        return NextResponse.json({ themeSetting: jsonData }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}