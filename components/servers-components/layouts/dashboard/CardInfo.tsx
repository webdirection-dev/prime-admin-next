export default function CardInfo({ type, data, color, bgColor, icon, details, description }: any) {

    return (
        <>
            <div className="flex justify-content-between mb-3"><div>
                <h3 className="block text-500 font-medium capitalize mb-3">{type}</h3>
                <div className="text-900 font-medium text-xl">{data}</div>
            </div>

                <div className={"flex align-items-center justify-content-center border-round bg-" + bgColor}
                    style={{ width: '2.5rem', height: '2.5rem' }}
                >
                    <i className={icon + " pi text-xl text-" + color} />
                </div>
            </div>

            <aside>
                <span className="text-green-500 font-medium">{details}</span>
                <span> </span>
                <span className="text-500">{description}</span>
            </aside>
        </>
    )
}