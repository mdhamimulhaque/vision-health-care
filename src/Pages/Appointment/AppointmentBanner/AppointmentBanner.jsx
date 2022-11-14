import React from 'react';

const AppointmentBanner = () => {
    return (
        <section className='container mx-auto'>
            <div class=" overflow-hidden relative lg:flex lg:items-center">
                <div class="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 class="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl mb-2">
                        <span class="block">
                            Get Your appointment
                        </span>
                    </h2>
                    <p class="text-md mt-4 text-gray-400">
                        Search Spaces,Make an Appointment
                    </p>
                    <div class="lg:mt-0 lg:flex-shrink-0">
                        <div class="mt-12 inline-flex rounded-md shadow">
                            <button type="button" class="py-2 px-4  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Get started
                            </button>
                        </div>
                    </div>
                </div>
                <div class="flex items-center gap-8 p-8 lg:p-24">
                    <img src="https://img.freepik.com/free-photo/filling-medical-record_1098-18239.jpg?w=1380&t=st=1668401753~exp=1668402353~hmac=1b0a701fd6eb4b2eff0c3efc94aeb5a0a1d1b1d606561dd46a4f310fc8c71078"
                        class="rounded-lg w-1/2 shadow-lg" alt="Tree" />
                    <div>
                        <img src="https://img.freepik.com/free-photo/cheerful-doctor-gesturing-thumb-up_23-2147896156.jpg?w=1380&t=st=1668401619~exp=1668402219~hmac=94e90a6342f2b8ac0e965647e70c64bb7c9fde2c21e50a80107a929552f291d9"
                            class="rounded-lg mb-8 shadow-lg" alt="Tree" />

                        <img src="https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg?w=996&t=st=1668401856~exp=1668402456~hmac=e6bd952573b7864868a16f7e520821ad1099f12f677a3acdeca01bd6ac578259" class="rounded-lg shadow-lg" alt="Tree" />
                    </div>
                </div>
            </div>
        </section>


    );
};

export default AppointmentBanner;