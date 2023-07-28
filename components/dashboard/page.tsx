import Card from '../ui/withChildren/Card'

export default function Dashboard() {

    return (
        <div className='grid'>
            <div className="col-12 lg:col-6 xl:col-3">
                <Card>
                    <div className="flex justify-content-between mb-3"><div>
                        <span className="block text-500 font-medium mb-3">Orders</span>
                        <div className="text-900 font-medium text-xl">152</div>
                    </div>

                        <div className="flex align-items-center justify-content-center bg-blue-100 border-round"
                        // style="width: 2.5rem; height: 2.5rem;"
                        >
                            <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                        </div>
                    </div>

                    <span className="text-green-500 font-medium">24 new </span>
                    <span className="text-500">since last visit</span>
                </Card>
            </div>
        </div>
    )
}