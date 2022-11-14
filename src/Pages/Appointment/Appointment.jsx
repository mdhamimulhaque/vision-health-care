import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AvailableAppoints from './AvailableAppoints/AvailableAppoints';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div className='bg-emerald-50 '>
            <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            <AvailableAppoints selectedDate={selectedDate} />
        </div>
    );
};

export default Appointment;