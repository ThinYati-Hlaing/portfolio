import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import Profile from "../assets/profile.jpg"
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section
            id="home"
            className=" min-h-[80vh] lg:min-h-[70vh] flex flex-col lg:flex-row w-full justify-center items-center z-10 px-20 text-white"
        >
            <div className="select-none w-full">
                <div className="">
                    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 1 }} className=" text-3xl mb-5 font-normal text-slate-300">

                        <motion.h1 initial={{ opacity: 0, y: 40 }} transition={{ duration: 1 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="text-5xl mb-5 font-medium text-slate-200">THIN YATI HLAING</motion.h1>
                        <span className="font-semibold mr-4">I'm a</span>
                        <TypeAnimation
                            sequence={[
                                'Web Developer',
                                1000,
                                'Desinger',
                                1000,
                            ]}
                            speed={20}
                            deletionSpeed={20}
                            className="text-4xl text-primary font-extrabold"
                            wrapper="span"
                            repeat={Infinity}
                        />
                    </motion.div>
                    <hr />
                    <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 1 }} className=" mt-10 mb-5 text-lg text-slate-500 font-sans whitespace-normal">
                        I'm passionate about creating designs, coding, and continuously
                        learning to gain more experience along my journey.
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 1 }} >
                        <button className="gradient bg-white text-purple-500 px-10 py-2 mb-2 rounded-full hover:bg-indigo-100 hover:text-purple-700">
                            Contact Me
                        </button>

                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 1 }} className=" flex mt-2 space-x-3 p-2 cursor-pointer ">
                        <div>
                            <a
                                href="https://www.facebook.com/thin.y.hlaing.311?mibextid=2JQ9oc"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {" "}
                                <FaFacebook
                                    size={38}
                                    className="gradient border-2 border-indigo-200 hover:border-indigo-100 bg-white text-purple-600 rounded-full"
                                />
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/ThinYati-Hlaing" target="_blank"
                                rel="noopener noreferrer">
                                <FaLinkedin
                                    size={38}
                                    className="gradient border-2 border-indigo-200 hover:border-indigo-100 bg-white text-purple-600  rounded-full "
                                />
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/ThinYati-Hlaing" target="_blank"
                                rel="noopener noreferrer">
                                <FaGithub
                                    size={38}
                                    className="gradient border-2 border-indigo-200 hover:border-indigo-100 rounded-full"
                                />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>


            <div div className="flex flex-auto justify-center items-center p-10" >
                <motion.div initial={{ opacity: 0, y: -60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.8 }}>
                    <div className=" w-72 h-72">
                        <img
                            src={Profile}
                            className=" mx-5 hidden lg:flex md:felx rounded-full w-72 h-72  p-2 gradient items-center drop-shadow-2xl"
                            alt="logo"
                        />
                    </div>
                </motion.div>
            </div >

        </section >
    );
};

export default Hero;
