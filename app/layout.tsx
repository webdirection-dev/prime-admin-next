import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import 'primeflex/primeflex.css'
import '../utils/styles/reset.css'
import '../utils/styles/globals.css'
import Providers from '../components/clients-components/Providers'
import { Metadata } from 'next'
import General from '@/components/servers-components/layouts/General'

export const metadata: Metadata = {
    title: {
        template: '%s | Amazon',
        default: 'Amazon',
    },
    description: 'Generated by create next app',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
    <html lang="en" suppressHydrationWarning={true}>
        <head>
            {/* <link id="app-theme" href="/themes/md-light-deeppurple/theme.css" rel="stylesheet" /> */}
            <link id="app-theme" href="/themes/md-dark-deeppurple/theme.css" rel="stylesheet" />
        </head>

        <body className='flex flex-column justify-content-between' style={{ minHeight: '100vh' }}>
            <Providers>
                <General>
                    {children}
                </General>
            </Providers>
        </body>
    </html>
)
export default RootLayout