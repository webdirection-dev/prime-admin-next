'use client'

import AsideSection from '@/components/ui/withChildren/AsideSection'
import { useAside } from '../hooks/use-aside'
import AsideItem from './AsideItem'


export default function Aside() {
    const { classes, modified } = useAside()

    return (
        <aside className={`fixed overflow-y-auto py-2 px-4 z-5`} style={{ ...classes, ...modified }} >
            <ul>
                <AsideSection title='home'>
                    <AsideItem title='dashboard' path='/' />
                </AsideSection>

                <AsideSection title='ui components'>
                    <AsideItem title='Dfrr' path='/ddf' />
                    <AsideItem title='Dfrr' path='/ddf' />
                    <AsideItem title='Dfrr' path='/ddf' />
                </AsideSection>
            </ul>
        </aside>
    )
}
