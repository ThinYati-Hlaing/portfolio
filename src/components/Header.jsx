import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1, HiMoon } from "react-icons/hi";
import { BiHomeAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Profile from '../assets/profile.jpg';

const Header = () => {
    return (
        <section className=" py-3 px-20 mb-4">
            <div className=" container ">
                <div className=" flex items-center lg:flex-row">
                    <img className="  mr-3 w-16 h-16 p-1 rounded-full gradient" src={Profile} alt="" />
                    <a a href=""
                        className="text-gradient"
                    >
                        YATI

                    </a>
                    {/* <div className="flex justify-between ">
                        <div className=" ssm:hidden md:block lg:block space-x-3">
                            <Link to="home"
                                
                                className=" text-white font-bold ml-4 hover:bg-purple-800 hover:text-indigo-300 rounded-full px-5 py-2 text-2xl"
                            >
                                Home
                            </Link>
                            <Link to="skills"
                                
                                className=" text-white font-bold ml-4 hover:bg-purple-800  hover:text-indigo-300 rounded-full px-5 py-2 text-2xl"
                            >
                                Skill
                            </Link>
                            <Link to="projects"
                                
                                className=" text-white font-bold ml-4 hover:bg-purple-800 hover:text-indigo-300 rounded-full px-5 py-2 text-2xl"
                            >
                                Project
                            </Link>
                            <Link to="contact"
                                
                                className=" text-white font-bold ml-4 hover:bg-purple-800 hover:text-indigo-300 rounded-full px-5 py-2 text-2xl"
                            >
                                Contact
                            </Link>
                        </div>

                        <div className=" ssm:block md:hidden lg:hidden">
                            {toggle ? (
                                <AiOutlineClose
                                    onClick={closeMenu}
                                    size={30}
                                    className="text-white cursor-pointer"
                                />
                            ) : (
                                <HiMenuAlt1
                                    onClick={openMenu}
                                    size={30}
                                    className="text-white cursor-pointer"
                                />
                            )}
                        </div>
                    </div> */}
                </div>
            </div>

        </section>
    );
};

export default Header;
