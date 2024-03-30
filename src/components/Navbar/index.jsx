import React from "react"
import './index.css';
import Logo from '../../assets/002.png';
import { Link } from 'react-router-dom'
//import { Link } from "@mui/material";

const navbar = () => {
    return (
        <nav class="bg-white fixed w-full z-20 top-0 start-0 border-b">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link
                    to="Home/">
                    <a class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={Logo}
                            alt="The Memory Makers"
                            className="h-[35px] w-[250px]"
                        />
                    </a>
                </Link>


                <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <Link
                        to="Search/">
                        <button className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-content" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </Link>


                    <Link
                        to="Login/">
                        <button className="btn btn-ghost rounded-full text-info">Login</button>
                    </Link>

                    <Link
                        to="Singup/">
                        <button className="btn w-50 rounded-full btn-outline btn-info ">Sing up</button>
                    </Link>

                    <button data-collapse-toggle="navbar-user" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <Link
                                to="Artists/">
                                <button className="block py-5 px-3 btn btn-ghost rounded-full text-info">Artists</button>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="Gallery/">
                                <button className="block py-5 px-3 btn btn-ghost rounded-full text-info">Gallery</button>
                            </Link>

                        </li>

                        <div className="dropdown">
                            <li>
                                <div tabIndex={0} role="button" className="btn btn-ghost rounded-full m-1 text-info">Community</div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 text-info" style={{ background: '#f9fafb' }}>
                                    <Link
                                        to="BLOG/">
                                        <li><a>BLOG</a></li>
                                    </Link>

                                    <Link
                                        to="Item2/">
                                        <li><a>Item 2</a></li>
                                    </Link>
                                </ul>
                            </li>
                        </div>

                    </ul>
                </div>
            </div>
        </nav>

    )
}
export default navbar