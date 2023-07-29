import CardButton from './btns/CardButton'

export const CardTitle = ({ title, btn = false }: any) => {
    return (
        <div className='flex justify-content-between align-items-center mb-5'>
            <h5
                className='text-xl font-medium line-height-2 capitalize'
                style={{ color: 'var(--surface-900)' }}
            >{title}</h5>


            {btn && (
                <CardButton handlerClick={btn} />
            )}
        </div>
    )
}
