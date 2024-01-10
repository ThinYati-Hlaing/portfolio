import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import Profile from '../assets/profile.jpg';

const Nav = () => {
    const [toggle, setToggle] = useState(false);

    function openMenu() {
        setToggle(true);
    }

    function closeMenu() {
        setToggle(false);
    }
    return (
        <section className="fixed w-full bg-purple-600  border-b-2 top-0 z-20 py-2 px-0">
            <div className="">
                <div className="  w-full mx-100 flex justify-between items-center p-5 lg:flex-row">
                    <div className=" flex  items-center mt-0  left-0  p-3 ">
                        <img className="  mr-3 w-20 h-20 p-1 rounded-full bg-purple-500" src={Profile} alt="" />
                        <a
                            href="#"
                            className="ml-3 text-indigo-200 font-satisfy font-bold text-4xl tracking-wider flex items-center select-none"
                        >
                            YATI
                        </a>
                    </div>

                    <div className="flex justify-between ">
                        <div className=" ssm:hidden md:block lg:block space-x-3">
                            <a
                                href="#home"
                                className=" text-white font-bold ml-4 hover:bg-purple-800 hover:text-indigo-300 rounded-full px-5 py-2 text-2xl"
                            >
                                Home
                            </a>
                            <a
                                href="#skill"
                                className=" text-white font-bold ml-4 hover:bg-purple-800  hover:text-indigo-300 rounded-full px-5 py-2 text-2xl"
                            >
                                Skills
                            </a>
                            <a
                                href="#project"
                                className=" text-white font-bold ml-4 hover:bg-purple-800 hover:text-indigo-300 rounded-full px-5 py-2 text-2xl"
                            >
                                Projects
                            </a>
                            <a
                                href="#contact"
                                className=" text-white font-bold ml-4 hover:bg-purple-800 hover:text-indigo-300 rounded-full px-5 py-2 text-2xl"
                            >
                                Contact
                            </a>
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
                    </div>
                </div>

                <div className=" ssm:block md:hidden lg:hidden p-3">
                    {toggle ? (
                        <div className=" flex flex-col items-end ml-10">
                            <div className="flex flex-col bg-purple-700 px-6 py-3 rounded-xl">
                                <a href="#home" className=" text-white hover:text-indigo-300 text-xl font-bold mb-2 cursor-pointer">Home</a>
                                <a href="#skill" className=" text-white hover:text-indigo-300 text-xl font-bold mb-2 cursor-pointer">
                                    Skills
                                </a >
                                <a href="#project" className=" text-white hover:text-indigo-300 text-xl font-bold mb-2 cursor-pointer">
                                    Projects
                                </a>
                                <a href="#contact" className=" text-white hover:text-indigo-300 text-xl font-bold mb-2 cursor-pointer">
                                    Contact
                                </a >
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>

        </section>
    );
};

export default Nav;
