import Header from "@/components/servers-components/layouts/Header"
import Footer from "@/components/servers-components/layouts/Footer"
import Aside from '../Aside'

const General = ({ children }: any) => (
    <>
        <Header />
        <main className='' style={{ minHeight: 'calc(100vh - 3rem - 2.5rem - 1rem)' }}>
            <Aside />
            {children}
        </main>
        <Footer />
    </>
)
export default General
