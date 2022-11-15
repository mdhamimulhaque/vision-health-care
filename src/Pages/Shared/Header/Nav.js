import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LOGO from "../../../img/logo.png";

export const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navbarData = [
        {
            id: 1,
            name: "Home",
            path: '/'
        },
        {
            id: 2,
            name: "About",
            path: '/about'
        },
        {
            id: 3,
            name: "Appointment",
            path: '/appointment'
        },
        {
            id: 4,
            name: "Reviews",
            path: '/reviews'
        },

        {
            id: 5,
            name: "Contact",
            path: '/contact'
        },
    ]

    return (
       
    );
};
