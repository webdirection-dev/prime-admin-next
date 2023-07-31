import LeftBarButton from '@/components/ui/btns/LeftBarButton'
import Logo from '@/components/ui/Logo'
import ThemeButton from '@/components/ui/btns/ThemeButton'
import ActiveBarButton from '@/components/ui/btns/ActiveBarButton'
import { Locale } from '@/i18n.config'
import { test } from '@/utils/language/dictionaries/test'
// import { getDictionary } from '@/utils/language/dictionary'

export default async function Header() {

    return (
        <header
            className='fixed top-0 left-0 flex align-items-center w-full h-5rem px-5 z-3'
            style={{
                backgroundColor: "var(--surface-card)",
                transition: 'left .2s',
                boxShadow: '0 3px 5px rgba(0, 0, 0, .02), 0 0 2px rgba(0, 0, 0, .05), 0 1px 4px rgba(0, 0, 0, .08)'
            }}
        >
            <Logo />
            <LeftBarButton />
            <ThemeButton />
            <ActiveBarButton />
            {/* <ActiveBarButton lang={lang} activeBar={activeBar} /> */}
        </header>
    )
}


// import LeftBarButton from '@/components/ui/btns/LeftBarButton'
// import Logo from '@/components/ui/Logo'
// import ThemeButton from '@/components/ui/btns/ThemeButton'
// import ActiveBarButton from '@/components/ui/btns/ActiveBarButton'
// import { Locale } from '@/i18n.config'
// import { test } from '@/utils/language/dictionaries/test'
// // import { getDictionary } from '@/utils/language/dictionary'

// export default async function Header({ lang }: { lang: Locale }) {
//     // const { activeBar } = await getDictionary(lang)
//     const txt = await test[lang].activeBar



//     return (
//         <header
//             className='fixed top-0 left-0 flex align-items-center w-full h-5rem px-5 z-3'
//             style={{
//                 backgroundColor: "var(--surface-card)",
//                 transition: 'left .2s',
//                 boxShadow: '0 3px 5px rgba(0, 0, 0, .02), 0 0 2px rgba(0, 0, 0, .05), 0 1px 4px rgba(0, 0, 0, .08)'
//             }}
//         >
//             <Logo />
//             <LeftBarButton />
//             <ThemeButton />
//             <ActiveBarButton lang={lang} txt={test[lang].activeBar} />
//             {/* <ActiveBarButton lang={lang} activeBar={activeBar} /> */}
//         </header>
//     )
// }