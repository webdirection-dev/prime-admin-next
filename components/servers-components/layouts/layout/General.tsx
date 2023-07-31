import Header from "@/components/servers-components/layouts/layout/Header"
import Footer from "@/components/servers-components/layouts/layout/Footer"
import Navbar from '../../../clients-components/navbar/Navbar'
import ContainerMain from '@/components/ui/withChildren/ContainerMain'
import { Locale } from '@/i18n.config'

export default function General({ children, lang }: { children: React.ReactNode, lang: Locale }) {
    return (
        <>
            <Header lang={lang} />
            <main style={{ minHeight: 'calc(100vh - 7rem)' }} className='pt-8'>
                <Navbar />
                <ContainerMain>
                    {children}
                    <Footer />
                </ContainerMain>
            </main>
        </>
    )
}
