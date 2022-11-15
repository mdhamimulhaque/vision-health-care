import React from 'react';
import { DayPicker } from 'react-day-picker';
import "./AppointmentBanner.css";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <section className='container mx-auto'>
            <div className=" overflow-hidden relative lg:flex lg:items-center">
                <div className="w-full pb-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 className="text-3xl font-bold tracking-wide text-gray-800 lg:text-5xl mb-2">
                        <span className="block">
                            Get Your appointment
                        </span>
                    </h2>
                    <p className="text-md mt-4 text-gray-400">
                        Pick a Date and Show Available Spaces And Make Sure your Appointment
                    </p>
                    <div className="lg:mt-0 lg:flex-shrink-0 px-0">
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
                <div className="flex items-center gap-8 p-8 lg:p-24">
                    <img src="https://img.freepik.com/free-photo/filling-medical-record_1098-18239.jpg?w=1380&t=st=1668401753~exp=1668402353~hmac=1b0a701fd6eb4b2eff0c3efc94aeb5a0a1d1b1d606561dd46a4f310fc8c71078"
                        className="rounded-lg w-1/2 shadow-lg" alt="Tree" />
                    <div>
                        <img src="https://img.freepik.com/free-photo/cheerful-doctor-gesturing-thumb-up_23-2147896156.jpg?w=1380&t=st=1668401619~exp=1668402219~hmac=94e90a6342f2b8ac0e965647e70c64bb7c9fde2c21e50a80107a929552f291d9"
                            className="rounded-lg mb-8 shadow-lg" alt="Tree" />

                        <img src="https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg?w=996&t=st=1668401856~exp=1668402456~hmac=e6bd952573b7864868a16f7e520821ad1099f12f677a3acdeca01bd6ac578259" className="rounded-lg shadow-lg" alt="Tree" />
                    </div>
                </div>
            </div>
        </section>


    );
};

export default AppointmentBanner;