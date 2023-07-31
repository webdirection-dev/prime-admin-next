'use client'
import { Provider } from "react-redux"
import { SessionProvider } from "next-auth/react"
import { store } from '../../../utils/lib/store'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import myTheme from '@/utils/styles/theme'

const Providers = ({ children }: { children: React.ReactNode }) => (
    <SessionProvider>
        <Provider store={store}>
            <CacheProvider>
                <ChakraProvider theme={myTheme}>
                    {children}
                </ChakraProvider>
            </CacheProvider>
        </Provider>
    </SessionProvider >
)
export default Providers