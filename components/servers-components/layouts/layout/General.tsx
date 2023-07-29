import Header from "@/components/servers-components/layouts/layout/Header"
import Footer from "@/components/servers-components/layouts/layout/Footer"
import Navbar from '../../../clients-components/navbar/Navbar'
import ContainerMain from '@/components/ui/withChildren/ContainerMain'

export default function General({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
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
