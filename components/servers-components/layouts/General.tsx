import Header from "@/components/servers-components/layouts/Header"
import Footer from "@/components/servers-components/layouts/Footer"
import AsidePage from '../../clients-components/aside/AsidePage'
import ContainerMain from '@/components/ui/withChildren/ContainerMain'

const General = ({ children }: any) => (
    <>

        <Header />
        <main style={{ minHeight: 'calc(100vh - 7rem)' }} className='mt-8'>
            <AsidePage />
            <ContainerMain>
                {children}
                <Footer />
            </ContainerMain>
        </main>
    </>
)
export default General
