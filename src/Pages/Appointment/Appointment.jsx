import React from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AvailableAppoints from './AvailableAppoints/AvailableAppoints';

const Appointment = () => {
    return (
        <div className='bg-emerald-50 '>
            <AppointmentBanner />
            <AvailableAppoints />
        </div>
    );
};

export default Appointment;