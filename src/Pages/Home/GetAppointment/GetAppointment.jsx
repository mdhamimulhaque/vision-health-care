import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const GetAppointment = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <div className="title_box mt-4 lg:mt-0">
                        <span className='p-1 mb-2 bg-emerald-200 text-emerald-700'>Appointment</span>
                    </div>
                    <h1 className="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl mb-2">Make an appointment Today</h1>
                    <p className="mb-4 leading-relaxed">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Your Appointment</PrimaryButton>

                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero"
                        src="https://img.freepik.com/free-photo/male-dentist-working-with-dental-microscope_329181-20732.jpg?w=1380&t=st=1668363911~exp=1668364511~hmac=48a9dfbebedf4d0b870d37a23cbd89b356f2161332191085c2e13541f7986106" />
                </div>
            </div>
        </section>
    );
};

export default GetAppointment;