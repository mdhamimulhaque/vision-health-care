import React from 'react';


const AppointmentCard = ({ appointDta, handleModalOpen }) => {
    const { serviceTitle, doctorName, doctorTitle, img, slots } = appointDta;

    return (
        <div className="w-full lg:w-1/2 xl:w-1/3 px-4 ">
            <div className="p-10 bg-white md:px-7 xl:px-10 rounded-[20px]bg-white shadow-md hover:shadow-lg mb-8">
                <div className='flex flex-col md:flex-row lg:justify-between  md:gap-6 lg:gap-2 min-h-[150px]'>
                    <div className="doctor_info_box flex gap-2 sm:flex-col">
                        <div className="w-[120px] h-[90px] rounded-2xl"  >
                            <img src={img} alt="" className='object-cover' />
                        </div>
                        <div className="doctor_name_title_box">
                            <h4 className='font-semibold text-xl'>{doctorName}</h4>
                            <p>{doctorTitle}</p>
                        </div>
                    </div>
                    <div className="service_ifo_box">
                        <h4 className="font-semibold text-xl text-dark mb-3 text-teal-400">
                            {serviceTitle}
                        </h4>
                        <p className="text-body-color">{slots.length > 0 ? slots[0] : "Try another day"}</p>
                        <p className="text-body-color">{slots.length} {slots.length > 1 ? "spaces" : "space"} Available</p>
                        <button
                            onClick={() => handleModalOpen(appointDta)}
                            disabled={slots.length === 0}
                            className={
                                `mt-4 mb-2 inline-flex items-center justify-center rounded-md p-2.5 
                                ${slots.length !== 0 ? "bg-emerald-400 hover:bg-emerald-500"
                                    : "bg-red-400 text-gray-300"}  text-white`
                            }>
                            Book Appointment
                        </button>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default AppointmentCard;