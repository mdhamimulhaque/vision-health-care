import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const BookingModal = ({ handleModalClose, modalData, selectedDate, setModalData, refetch }) => {
    const { serviceTitle, doctorName, doctorTitle, img, slots } = modalData;
    const { user } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const from = e.target;
        const name = from.fullName.value;
        const phone = from.phone.value;
        const email = from.email.value;
        const slot = from.slot.value;
        const date = from.date.value;

        const booking = {
            appointmentDate: date,
            treatment: serviceTitle,
            patient: name,
            phone,
            email,
            slot
        }
        // ---> insert booking data
        fetch(`http://localhost:5000/bookings`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setModalData(null);
                    refetch()
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <>

            <div className="relative flex justify-center items-center">

                <div id="menu" className={modalData ? 'w-full h-full bg-gray-900 bg-opacity-80 top-0 fixed sticky-0' : 'hidden'}>
                    <div className="2xl:container  2xl:mx-auto py-10 px-4 md:px-28 flex justify-center items-center">
                        <div className="w-96 md:w-auto  relative flex flex-col justify-center items-center bg-white py-16 px-4 md:px-24 xl:py-24 xl:px-36">
                            <div className="doctor_info_box text-center">
                                <h2 className='text-2xl lg:text-3xl font-semibold mb-4 text-emerald-400 px-2'>{serviceTitle}</h2>
                                <div className='flex gap-1'>
                                    <div className="w-[120px] h-[90px] bg-primary rounded-2xl mx-auto"  >
                                        <img src={img} alt="" className='object-cover' />
                                    </div>
                                    <div className="doctor_name_title_box">
                                        <h4 className='font-semibold text-xl'>{doctorName}</h4>
                                        <p>{doctorTitle}</p>
                                    </div>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className='w-[320px] px-2'>
                                <div className="mb-5">
                                    <input
                                        type="text"
                                        name="date"
                                        disabled
                                        value={format(selectedDate, 'PP')}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#34D399] focus:shadow-md"
                                    />
                                </div>
                                <div className="mb-5">
                                    <select name="slot" id="countries" className="bg-gray-50 border border-emerald-300 text-[#6B7280]  text-sm rounded-lg focus:ring-emerald-400 focus:border-emerald-500 block w-full p-2.5"
                                    >
                                        {
                                            slots.map(slot =>
                                                <option key={slot}
                                                    value={slot}>{slot}
                                                </option>
                                            )
                                        }
                                    </select>
                                </div>
                                <div className="mb-5">
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={user?.displayName}
                                        disabled
                                        placeholder='Full Name'
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#34D399] focus:shadow-md"
                                    />
                                </div>
                                <div className="mb-5">
                                    <input
                                        type="number"
                                        name="phone"
                                        placeholder='Phone Number'
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#34D399] focus:shadow-md"
                                    />
                                </div>
                                <div className="mb-5">
                                    <input
                                        type="email"
                                        name="email"
                                        value={user?.email}
                                        disabled
                                        placeholder='Email'
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#34D399] focus:shadow-md"
                                    />
                                </div>
                                <div>
                                    <button className='mt-4 mb-2 inline-flex items-center justify-center rounded-md p-2.5 bg-emerald-400 hover:bg-emerald-500 text-white w-full'>Submit</button>
                                </div>
                            </form>

                            <button type='submit' onClick={handleModalClose} className="text-gray-800 dark:text-gray-400 absolute top-8 right-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" aria-label="close">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default BookingModal;