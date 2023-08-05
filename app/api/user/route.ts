import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'
import { IParams } from '@/utils/types/types'
import { findUser, updateUser } from '@/utils/lib/mongodb/fetchingUsers'

export async function POST(req: NextRequest, { params }: IParams) {
    const body = await req.json()
    try {
        const data = await updateUser(body)
        // revalidatePath('/')
        return NextResponse.json({ ...data }, { status: 200 })
    }
    catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

// FOR for a special NEXTJS-FETCH 
export async function GET(req: NextRequest, { params }: IParams) {
    try {
        const data = await findUser()
        // revalidatePath('/')
        return NextResponse.json({ ...data }, { status: 200 })
    }
    catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}