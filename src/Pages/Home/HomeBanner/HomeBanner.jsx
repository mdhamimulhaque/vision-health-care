import React from 'react';
import { FaBriefcaseMedical, FaUserMd, FaClinicMedical } from "react-icons/fa";
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';


const HomeBanner = () => {
    return (
        <section
            className="relative bg-[url(https://img.freepik.com/free-photo/little-girl-checking-up-her-sight-ophthalmology-center_1303-27499.jpg?w=996&t=st=1668350460~exp=1668351060~hmac=3172632fe2814029610f3670c376d19eea349b8a0a3688184a79e9e837dafeae)] bg-cover bg-center bg-no-repeat w-full"
        >
            <div
                className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"
            ></div>

            <div
                className="relative container mx-auto py-28 lg:flex lg:h-4/5 lg:items-center px-2"
            >
                <div className="max-w-xl">
                    <h1 className="text-3xl  font-semibold sm:text-5xl ">
                        Our Service will make you see us with
                        <strong className="block font-semibold text-emerald-400">
                            new eyes
                        </strong>
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                        It is a long established fact that a reader will be distracted by the readable content  of a page when looking at its layout.</p>

                    <ul className='mt-4'>
                        <li className='flex items-center gap-2 mt-2'>
                            <FaClinicMedical className='text-emerald-400' />
                            <span>Operation Theatre</span></li>
                        <li className='flex items-center gap-2 mt-2'>
                            <FaUserMd className='text-emerald-400' />
                            <span>Outdoor Checkup</span></li>
                        <li className='flex items-center gap-2 mt-2'>
                            <FaBriefcaseMedical className='text-emerald-400' />
                            <span>Emergency Care</span>
                        </li>
                    </ul>
                    <PrimaryButton >Get Appointment</PrimaryButton>
                </div>
            </div>
        </section>

    );
};

export default HomeBanner;