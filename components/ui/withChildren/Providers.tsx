'use client'
import { Provider } from "react-redux"
import { SessionProvider } from "next-auth/react"
import { store } from '../../../utils/lib/store'


const Providers = ({ children }: { children: React.ReactNode }) => (
    <SessionProvider>
        <Provider store={store}>
            {children}
        </Provider>
    </SessionProvider >
)
export default Providers