'use client'

import { Calendar, CalendarChangeEvent } from 'primereact/calendar'
import { useBtnCalendar } from './hooks/use-btn-calendar'

export default function CalendarButton() {
    const { styles, hover, isShow, date, setDate } = useBtnCalendar()

    return (
        <>
            <div
                data-close='close'
                id='calendar'
                className={"relative inline-flex justify-content-center align-items-center w-3rem h-3rem text-color-secondary border-circle cursor-pointer " + hover}
                style={styles}
            >
                {''}<i
                    data-close='close'
                    className="pi pi-calendar w-full h-full text-center"
                    style={{ fontSize: '1.5rem', paddingTop: '10px' }}
                ></i>

                {isShow && (
                    <div className='absolute z-5' style={{ right: '0', top: '47px' }} >
                        <Calendar
                            value={date}
                            onChange={(e: CalendarChangeEvent) => setDate(e.value)}
                            inline
                            showWeek
                        />
                    </div>
                )}
            </div>
        </>
    )
}