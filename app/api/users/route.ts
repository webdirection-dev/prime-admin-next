import { NextRequest, NextResponse } from 'next/server'
import { IParams } from '@/utils/types/types'
import { createUser, updateUser } from '@/utils/lib/mongodb/fetchingUsers'


export async function POST(req: NextRequest, { params }: IParams) {
    const body = await req.json()
    const { searchParams } = new URL(req.url)
    const test = searchParams.get('test')

    try {
        const newUser = await createUser(body)
        return NextResponse.json({ ...newUser }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

export async function PATCH(req: NextRequest, { params }: IParams) {
    const body = await req.json()
    const { searchParams } = new URL(req.url)
    const test = searchParams.get('test')

    try {
        const update = await updateUser({ body })
        return NextResponse.json({ ...update }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}