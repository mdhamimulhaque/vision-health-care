import React, { useState } from 'react';
import { HiMenu, HiX } from "react-icons/hi";
import LOGO from "../../../img/logo.png";

const Header = () => {
    const navbarData = [
        {
            id: 1,
            name: "Home",
            path: '/home'
        },
        {
            id: 2,
            name: "About",
            path: '/about'
        },
        {
            id: 3,
            name: "Services",
            path: '/services'
        },
        {
            id: 4,
            name: "Appointment",
            path: '/appointment'
        },
        {
            id: 5,
            name: "Contact Us",
            path: '/contact'
        },
    ]

    const [open, setOpen] = useState(false)
    return (
        <header className='px-2 py-2 lg:px-5 flex justify-between items-center z-50 bg-emerald-300'>
            <div className="logo flex items-center text-white">
                <img className='w-10' src={LOGO} alt="" />
                <span className='ml-2 text-xl font-semibold '>Vision Health Center</span>
            </div>

            <div
                className="nav_icon cursor-pointer lg:hidden absolute top-4 right-4"
                onClick={() => { setOpen(!open) }}>
                {
                    open ?
                        <HiX className="h-8 w-8 text-white" />
                        : <HiMenu className="h-8 w-8 text-white" />
                }
            </div>

            <nav>
                <ul
                    className={`lg:flex font-semibold absolute top-12 transition-all duration-500 right-0 lg:static bg-emerald-300 w-full text-center z-[-1]
                 ${open ? "top-12 z-30" : "top-[-500px]"}`}>
                    {
                        navbarData?.map(navItem =>
                            <li
                                key={navItem?.id}
                                className='ml-4 text-white hover:text-emerald-500 transition-all duration-500 text-lg px-4 py-2 my-3'>
                                <a href={navItem?.path}>{navItem?.name}</a>
                            </li>
                        )
                    }

                </ul>
            </nav>
        </header>
    );
};

export default Header;