'use client'

import NavSection from '@/components/ui/withChildren/NavSection'
import { useAside } from '../hooks/use-aside'
import NavItem from './NavItem'
import { sections } from '@/utils/db-local/navbar'


export default function Navbar() {
    const { classes, modified } = useAside()

    return (
        <nav className={`fixed overflow-y-auto py-2 px-4 z-5`} style={{ ...classes, ...modified }} >
            <ul>
                {sections.map(section => (
                    <NavSection key={section.name} title={section.name}>
                        {section.list.map(item => <NavItem key={item.title} title={item.title} path={item.path} />)}
                    </NavSection>
                ))}
            </ul>
        </nav>
    )
}
