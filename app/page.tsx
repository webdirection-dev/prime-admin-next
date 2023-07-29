import TopPanel from '@/components/servers-components/layouts/dashboard/TopPanel'
import { CardTitle } from '@/components/ui/CardTitle'
import Card from '@/components/ui/withChildren/Card'

export default function Home() {
    return (
        <div className='grid mr-5'>
            <TopPanel />

            <article className='col-12 lg:col-6'>
                <Card>
                    <CardTitle title={'recent sales'} />
                </Card>

                <Card>
                    <CardTitle title={'best selling products'} btn={true} />
                </Card>
            </article>

            <article className='col-12 lg:col-6'>
                <Card>
                    <CardTitle title={'sales overview'} />
                </Card>

                <Card>
                    <CardTitle title={'notifications'} btn={true} />
                </Card>

                <Card>
                    <CardTitle title={'advertisement'} />
                </Card>
            </article>
        </div>
    )
}
