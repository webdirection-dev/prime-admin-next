import Header from "@/components/servers-components/layouts/Header"
import Footer from "@/components/servers-components/layouts/Footer"
import Aside from '../Aside'
import ContainerMain from '@/components/clients-components/ContainerMain'

const General = ({ children }: any) => (
    <>
        <Header />
        <main style={{ minHeight: 'calc(100vh - 5rem)' }}>
            <Aside />
            <ContainerMain>
                {children}
            </ContainerMain>
        </main>
        {/* <Footer /> */}
    </>
)
export default General
