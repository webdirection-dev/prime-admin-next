import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

export function MarkLetters({ str }: any) {
    const searchParams = useSearchParams()

    let isIndexOf = 0
    const search = useMemo(() => searchParams.has('search') && searchParams.get('search'), [searchParams])
    if (search) isIndexOf = str.toLowerCase().indexOf(search?.toLowerCase())

    if (search && isIndexOf >= 0) {
        return <>
            {str.slice(0, isIndexOf)}
            <span className="marker">{str.slice(isIndexOf, isIndexOf + search.length)}</span>
            {str.slice(isIndexOf + search.length)}
        </>
    } else return str
}