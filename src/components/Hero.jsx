import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import Profile from "../assets/profile.jpg";

const Hero = () => {
    return (
        <section
            id="home"
            className=" flex justify-around items-center z-10 p-6 space-x-2 lg:flex-row md:flex-row ssm:flex-col ssm:space-y-7 mt-40  text-white"
        >
            <div className=" lg:w-1/2 ssm:w-fit select-none">
                <div className="p-5">
                    <p className=" text-3xl mb-5 font-normal text-slate-300">
                        Hello, I'm
                        <span className=" text-4xl font-medium text-slate-200">
                            THIN YATI HLAING
                        </span>
                    </p>
                    <h1 className=" text-5xl text-white font-thin">WEB DEVELOPER</h1>
                    {/* <hr /> */}
                    <p className=" mt-10 mb-5 text-slate-300 font-sans whitespace-normal">
                        I'm passionate about creating designs, coding, and continuously
                        learning to gain more experience along my journey.
                    </p>
                    <button id="contact" className=" bg-white text-purple-500 px-10 py-2 mb-2 rounded-full hover:bg-indigo-100 hover:text-purple-700">
                        Contact Me
                    </button>

                    <div className=" flex mt-2 space-x-3 p-2 cursor-pointer ">
                        <div>
                            <a
                                href="https://www.facebook.com/thin.y.hlaing.311?mibextid=2JQ9oc"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {" "}
                                <FaFacebook
                                    size={38}
                                    className=" border-4 border-indigo-200 hover:border-indigo-100 bg-white text-purple-600 rounded-full"
                                />
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/ThinYati-Hlaing" target="_blank"
                                rel="noopener noreferrer">
                                <FaLinkedin
                                    size={38}
                                    className=" border-4 border-indigo-200 hover:border-indigo-100 bg-white text-purple-600  rounded-full "
                                />
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/ThinYati-Hlaing" target="_blank"
                                rel="noopener noreferrer">
                                <FaGithub
                                    size={38}
                                    className=" border-4 border-indigo-200 hover:border-indigo-100 rounded-full"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/2 items-center ssm:w-fit">
                <img
                    src={Profile}
                    className=" rounded-2xl border-4 w-96 h-auto items-center  border-indigo-400 drop-shadow-2xl"
                    alt=""
                />
            </div>
        </section>
    );
};

export default Hero;
