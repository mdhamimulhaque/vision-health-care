import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import BookingModal from '../../../components/BookingModal/BookingModal';
import Loading from '../../../components/Loading/Loading';
import AppointmentCard from '../AppointmentCard/AppointmentCard';

const AvailableAppoints = ({ selectedDate }) => {

    const [modalData, setModalData] = useState(null);

    const date = format(selectedDate, 'PP');

    const { data: appointmentData = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentServices', date],
        queryFn: async () => {
            const res = await fetch(`https://vision-health-server-mdhamimulhaque.vercel.app/appointmentServices?date=${date}`)
            const data = await res.json();
            return data;
        }
    })

    //    ---> modal handle open
    const handleModalOpen = (e) => {
        setModalData(e)
    }
    // ---> handle modal close
    const handleModalClose = () => {
        setModalData(null)
    }
    // ---> loader set
    if (isLoading) {
        return <Loading />
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
                        setModalData={setModalData}
                        refetch={refetch}
                    />
                }

            </div>
        </section>
    );
};

export default AvailableAppoints;