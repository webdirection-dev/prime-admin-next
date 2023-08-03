'use client'
import { Provider } from "react-redux"
import { store } from '../../../utils/lib/store'


const Providers = ({ children }: { children: React.ReactNode }) => (
    <Provider store={store}>
        {children}
    </Provider>
)
export default Providers