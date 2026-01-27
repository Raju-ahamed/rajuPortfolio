import React, { useState } from 'react';
import Nav from '../nav/Nav';
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from 'react-icons/io';

const navigation = [
    {
        id: 1,
        data: "Home",
        path: "/",
    },
    {
        id: 2,
        data: "About",
        path: "/about",
    },
    {
        id: 3,
        data: "Services",
        path: "/services",
    },
    {
        id: 4,
        data: "Blog",
        path: "/blog",
    },
    {
        id: 5,
        data: "Contact",
        path: "/contact",
    },
];
const links = navigation.map(nav => <Nav nav={nav}></Nav>);
const NavBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='flex justify-between mx-auto p-3 border border-b-fuchsia-950 rounded-b-xl bg-cyan-950'>
            <div className='flex gap-2'>
                <span onClick={() => setOpen(!open)} className='text-2xl font-bold mt-1.5'>
                    {
                        open ? <IoMdClose /> : <CiMenuFries />
                    }
                </span>
                <ul className={`md:hidden absolute duration-500 ${open ? 'top-18' : '-top-70'} bg-cyan-950 border rounded-2xl h-60 w-40 border-fuchsia-950`}>
                    {links}
                </ul>
                <h1 className='text-3xl'>RA<span className='text-red-600'>JU</span></h1>
            </div>
            <ul className='md:flex hidden'>
                {links}
            </ul>
            <img className='w-8 h-8 rounded-4xl' src="https://ibb.co.com/zVwFXP5W" alt="" srcset="" />
        </nav>

    );
};

export default NavBar;