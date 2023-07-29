import { cardsInfo } from '@/utils/db-local/card-info'
import Card from '../../../ui/withChildren/Card'
import CardInfo from './CardInfo'

export default function TopPanel() {

    return (
        <>
            {cardsInfo.map(card => (
                <article key={card.type} className="col-12 lg:col-6 xl:col-3">
                    <Card>
                        <CardInfo {...card} />
                    </Card>
                </article>
            ))}
        </>
    )
}