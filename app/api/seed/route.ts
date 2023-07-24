// import { createProducts } from '@/utils/lib/mongodb/fetchingProducts'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        // createProducts()
        return NextResponse.json({ mess: 'success!' }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}