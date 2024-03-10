import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-teal-600 hover:text-teal-800" smooth to="/#about">
                About
            </HashLink>
            <HashLink className="px-4 font-extrabold text-teal-600 hover:text-teal-800" smooth to="/#services">
                Services
            </HashLink>
            <HashLink className="px-4 font-extrabold text-teal-600 hover:text-teal-800" to="/">
                Portfolio
            </HashLink>
            <HashLink className="px-4 font-extrabold text-teal-600 hover:text-teal-800" to="/contact">
                Contact Us
            </HashLink>
            <Link className="text-white bg-teal-500 hover:bg-emerald-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/get-demo">
                Demo our products
            </Link>
        </>
    )
}

export default NavLinks;