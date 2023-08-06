import Header from "@/components/servers-components/layouts/layout/Header"
import Footer from "@/components/servers-components/layouts/layout/Footer"
import Navbar from '../../../clients-components/navbar/Navbar'
import ContainerMain from '@/components/ui/withChildren/ContainerMain'
import { Locale } from '@/utils/language/i18n.config'

export default function General({ children, lang }: { children: React.ReactNode, lang: Locale }) {
    // export default function General({ children, lang, user }: { children: React.ReactNode, lang: Locale, user: any }) {
    return (
        <>
            <Header lang={lang} />
            {/* <Header lang={lang} user={user} /> */}
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