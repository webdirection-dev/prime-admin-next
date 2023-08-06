import { Locale } from '@/utils/language/i18n.config'
import { getDictionary } from '@/utils/language/dictionary'
import TopPanel from '@/components/servers-components/layouts/dashboard/TopPanel'
import { CardTitle } from '@/components/ui/CardTitle'
import Card from '@/components/ui/withChildren/Card'

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
    const { tiles, btnTile }: any = await getDictionary(lang)

    return (
        <div className='grid mr-5'>
            <TopPanel tile={tiles.tile} />

            <article className='col-12 lg:col-6'>
                <Card>
                    <CardTitle title={tiles.recent.title} />
                </Card>

                <Card>
                    <CardTitle title={tiles.best.title} btn={true} btnTile={btnTile} />
                </Card>
            </article>

            <article className='col-12 lg:col-6'>
                <Card>
                    <CardTitle title={tiles.overview.title} />
                </Card>

                <Card>
                    <CardTitle title={tiles.notifications.title} btn={true} btnTile={btnTile} />
                </Card>

                <Card>
                    <CardTitle title={tiles.advertisement.title} />
                </Card>
            </article>
        </div>
    )
}