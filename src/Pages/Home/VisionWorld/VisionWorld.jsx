import React from 'react';

const VisionWorld = () => {
    return (
        <section className='container  mx-auto '>
            <div className=" flex gap-4  flex-col px-6  lg:h-[32rem] lg:flex-row lg:items-center ">
                <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                    <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="https://img.freepik.com/free-photo/ophthalmologist-examining-woman-with-optometrist-trial-frame-female-patient-check-vision-ophthalmological-clinic_657921-169.jpg?w=1380&t=st=1668350428~exp=1668351028~hmac=c3d0194f71066a8b08f93093596870642701ed2ab28481c3afd262a7452046b1" alt="glasses photo" />
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="lg:max-w-lg">
                        <div className="title_box mt-4 lg:mt-0">
                            <span className='p-1 mb-2 bg-emerald-200 text-emerald-700'>Reinvent Yourself</span>
                        </div>
                        <h1 className="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl mb-2">
                            Life Is All About Your Vision In World
                        </h1>
                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>

                        <div className="mt-8 space-y-5">
                            <p className="flex items-center -mx-2 text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <span className="mx-2">Lorem ipsum dolor sit amet, conse adipiscing elit.</span>
                            </p>

                            <p className="flex items-center -mx-2 text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <span className="mx-2">Lorem ipsum dolor sit amet, conse adipiscing elit.</span>
                            </p>

                            <p className="flex items-center -mx-2 text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <span className="mx-2">Easy to Use</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionWorld;