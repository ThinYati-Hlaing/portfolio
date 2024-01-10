import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"
const Contact = () => {
    return (
        <footer id="contact" className="flex justify-center items-center bg-purple-800 lg:flex-row md:flex-row ssm:flex-col  text-white">
            <div className="  flex flex-row  lg:w-1/1 ssm:w-fit p- gap-8 select-none">
                <div className="flex flex-col justify-start items-start left-0 p-8">
                    <h2 className=" text-4xl mb-12 text-center font-bold tracking-widest ">Contact</h2>
                    <p className=" text-2xl mb-12 text-center font-medium tracking-widest">Feel free to reach out!</p>
                </div>

                <div className="flex flex-col p-7">
                    <div className="flex mb-5 gap-4">
                        <FaEnvelope size={38} className="border-4  border-indigo-200 hover:border-indigo-100 bg-white text-purple-600 rounded-full" />
                        <a href="thinyatihlaing6@email.com" target="_blank" rel="noopener noreferrer" >thinyatihlaing6@email.com</a>
                    </div>

                    <div className=" flex mb-5 gap-4">
                        <FaLinkedin size={38} className="border-4 border-indigo-200 hover:border-indigo-100 bg-white text-purple-600 rounded-full" />
                        <a href="https://www.linkedin.com/in/thin-yati-hlaing-38594624a/" target="_blank" rel="noopener noreferrer">linkedin.com/thin-yati-hlaing</a>
                    </div>

                    <div className=" flex mb-5 gap-4">
                        <FaGithub size={38} className="border-4 border-indigo-200 hover:border-indigo-100 bg-white text-purple-600 rounded-full" />
                        <a href="https://github.com/ThinYati-Hlaing" target="_blank" rel="noopener noreferrer">github.com/ThinYati-Hlaing</a>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Contact