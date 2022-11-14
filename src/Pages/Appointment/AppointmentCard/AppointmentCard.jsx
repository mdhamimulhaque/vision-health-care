import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const AppointmentCard = () => {
    return (
        <div class="w-full md:w-1/2 lg:w-1/3 px-4 ">
            <div class="p-10 bg-white md:px-7 xl:px-10 rounded-[20px]bg-white shadow-md hover:shadow-lg mb-8">
                <div className='flex flex-col md:flex-row md:justify-between flex-wrap gap-4'>
                    <div className="doctor_info_box">
                        <div class="w-[120px] h-[120px] bg-primary rounded-2xl mb-4 "  >
                            <img src='https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg?w=996&t=st=1668401856~exp=1668402456~hmac=e6bd952573b7864868a16f7e520821ad1099f12f677a3acdeca01bd6ac578259' alt=""
                                className='object-cover'
                            />
                            <div className="doctor_name_title_box mt-2">
                                <h4 className='font-semibold text-xl'>Name</h4>
                                <p>Title</p>
                            </div>
                        </div>
                    </div>
                    <div className="service_ifo_box">
                        <h4 class="font-semibold text-xl text-dark mb-3">
                            Service Title
                        </h4>
                        <p class="text-body-color">8:00 AM - 9:00 AM </p>
                        <p class="text-body-color">10 SPACES AVAILABLE</p>
                        <PrimaryButton>Book Appointment</PrimaryButton>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AppointmentCard;