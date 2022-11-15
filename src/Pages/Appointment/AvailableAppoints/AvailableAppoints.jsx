import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../../../components/BookingModal/BookingModal';
import AppointmentCard from '../AppointmentCard/AppointmentCard';

const AvailableAppoints = ({ selectedDate }) => {

    const [appointmentData, setAppointmentData] = useState([]);
    const [modalData, setModalData] = useState(null)

    useEffect(() => {
        fetch(`appointmentData.json`)
            .then(res => res.json())
            .then(data => setAppointmentData(data))
    }, [])

    //    ---> modal handle open
    const handleModalOpen = (e) => {
        setModalData(e)
    }
    // ---> handle modal close
    const handleModalClose = () => {
        setModalData(null)
    }

    return (
        <section className="">
            <div className="container mx-auto">
                <div className='text-center'>
                    <div className="title_box mt-4 lg:mt-0">
                        <span className='p-1 mb-2 bg-emerald-200 text-emerald-700'>Appointments</span>
                    </div>
                    <h1 className="text-3xl text-center font-bold tracking-wide text-gray-800 lg:text-5xl mb-8">
                        Available Appointments on<span className='underline decoration-emerald-400'> {format(selectedDate, 'PP')}</span>
                    </h1>
                </div>
                <div className="flex flex-wrap my-10">
                    {
                        appointmentData.map(appointDta =>
                            <AppointmentCard
                                key={appointDta._id}
                                appointDta={appointDta}
                                handleModalOpen={handleModalOpen}
                            />)
                    }
                </div>

                {
                    modalData &&
                    <BookingModal
                        handleModalClose={handleModalClose}
                        modalData={modalData}
                        selectedDate={selectedDate}
                    />
                }

            </div>
        </section>
    );
};

export default AvailableAppoints;