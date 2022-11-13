import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineClock, HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";

const HomeCard = () => {
    return (
        <div className="container mx-auto -mt-20 px-2">
            <div className="grid grid-cols-12 max-w-5xl gap-4">
                <div className="grid col-span-12 lg:col-span-4 relative">
                    <Link to='/' className="group shadow-lg hover:shadow-2xl duration-200 delay-75 w-full bg-white rounded-sm py-6 pr-6 pl-9">
                        <HiOutlineClock className='text-5xl  text-emerald-400' />

                        <p className="text-2xl font-bold text-gray-500 group-hover:text-gray-700">Opening Hours</p>

                        <p className="text-sm font-semibold text-gray-500 group-hover:text-gray-700 mt-2 leading-6"> All the Lorem Ipsum generators on the Internet tend to repeat prede</p>

                        <div className="bg-emerald-400 group-hover:bg-emerald-500 h-full w-4 absolute top-0 left-0"> </div>

                    </Link>
                </div>
                <div className="grid col-span-12 lg:col-span-4 relative">
                    <Link to='/' className="group shadow-lg hover:shadow-2xl duration-200 delay-75 w-full bg-white rounded-sm py-6 pr-6 pl-9" >
                        <HiOutlineLocationMarker className='text-5xl text-emerald-400' />
                        <p className="text-2xl font-bold text-gray-500 group-hover:text-gray-700">Visit our location</p>

                        <p className="text-sm font-semibold text-gray-500 group-hover:text-gray-700 mt-2 leading-6">Brooklyn, NY 10036, United States</p>

                        <div className="bg-emerald-400 group-hover:bg-emerald-500 h-full w-4 absolute top-0 left-0"> </div>

                    </Link>
                </div>
                <div className="grid col-span-12 lg:col-span-4 relative">
                    <Link to='/' className="group shadow-lg hover:shadow-2xl duration-200 delay-75 w-full bg-white rounded-sm py-6 pr-6 pl-9">
                        <HiOutlinePhone className='text-5xl text-emerald-400' />

                        <p className="text-2xl font-bold text-gray-500 group-hover:text-gray-700">Contact us now</p>

                        <p className="text-sm font-semibold text-gray-500 group-hover:text-gray-700 mt-2 leading-6">+000 123 456789</p>

                        <div className="bg-emerald-400 group-hover:bg-emerald-500 h-full w-4 absolute top-0 left-0"> </div>

                    </Link>
                </div>
            </div>

        </div>
    );
};

export default HomeCard;