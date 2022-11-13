import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeartbeat, FaNotesMedical, FaBong, FaBriefcaseMedical } from "react-icons/fa";


const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Cataract Surgery',
            icon: <FaHeartbeat />,
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet"
        },
        {
            id: 2,
            name: 'OptiLasik',
            icon: <FaNotesMedical />,
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet"
        },
        {
            id: 3,
            name: 'Yag Lase',
            icon: <FaBong />,
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet"
        },
        {
            id: 4,
            name: 'Contact Lenses',
            icon: <FaBriefcaseMedical />,
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet"
        }
    ]
    return (
        <section class="bg-white py-20">
            <div class="container px-6 py-10 mx-auto">
                <div className="title_box text-center">
                    <span className='p-1 mb-2 bg-emerald-200 text-emerald-700'>Our Services</span>
                </div>
                <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-5xl ">Explore Our  Main <br /><span class="text-emerald-500"> Service</span></h1>

                <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-4">

                    {
                        servicesData.map(service => {
                            return <div key={service.id} class="flex flex-col items-center p-6 space-y-3 text-center bg-emerald-50 rounded-xl hover:shadow-lg">
                                <span class="inline-block p-4 text-emerald-400 bg-emerald-100 rounded-full ">
                                    <div className='text-6xl' >
                                        {service.icon}
                                    </div>
                                </span>

                                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">{service.name}</h1>

                                <p class="text-gray-500 dark:text-gray-300">
                                    {service.info}
                                </p>

                                <Link to="/" class="flex items-center -mx-1 text-sm text-emerald-400 capitalize transition-colors duration-300 transform hover:underline hover:text-emerald-500 ">
                                    <span class="mx-1">Learn more</span>
                                    <svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </Link>
                            </div>
                        })
                    }
                </div>


            </div>
        </section>
    );
};

export default Services;