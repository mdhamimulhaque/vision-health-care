import React from 'react';
import { FaMehRollingEyes, FaUsers, FaGlasses, FaHandHoldingHeart, FaBookMedical, FaGrinBeamSweat } from "react-icons/fa";

const HappyClientCounter = () => {
    return (
        <section className="container mx-auto p-6 my-6 bg-emerald-100">
            <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
                <div className="flex items-center p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
                        <FaMehRollingEyes className='text-6xl lg:text-7xl text-emerald-400' />
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <p className="text-3xl font-semibold leading-none">59 +</p>
                        <p className="capitalize">SAVED EYES</p>
                    </div>
                </div>
                <div className="flex items-center p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
                        <FaUsers className='text-6xl lg:text-8xl text-emerald-400' />
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <p className="text-3xl font-semibold leading-none">20 +</p>
                        <p className="capitalize">EXPERT DOCTORS</p>
                    </div>
                </div>
                <div className="flex items-center p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
                        <FaGlasses className='text-6xl lg:text-8xl text-emerald-400' />
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <p className="text-3xl font-semibold leading-none">700 +</p>
                        <p className="capitalize">SAVED LENSES</p>
                    </div>
                </div>
                <div className="flex items-center p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
                        <FaHandHoldingHeart className='text-6xl lg:text-8xl text-emerald-400' />
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <p className="text-3xl font-semibold leading-none">1500 +</p>
                        <p className="capitalize">HAPPY PATIENTS</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HappyClientCounter;