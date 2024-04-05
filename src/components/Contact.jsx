import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";

const Contact = () => {

    const form = useRef();
    const [formData, setFormData] = useState(
        {
            user_name: '',
            user_email: '',
            message: ''
        }
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setFormData({
            user_name: '',
            user_email: '',
            message: ''
        })

        emailjs
            .sendForm('service_ozasp38', 'template_a9lfnl9', form.current, {
                publicKey: 'mktHPfo3SkNi5qY2t',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <footer
            id="contact"
            className=" lg:section justify-around items-center  text-white "
        >
            <div initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.8 }} className=" flex justify-center items-center flex-col lg:flex-row select-none">
                <motion.div initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.8 }} className="flex flex-col">
                    <h2 className=" text-4xl mb-12 text-primary  font-bold tracking-widest ">
                        Get in Touch
                    </h2>
                    <p className=" text-2xl  text-primary font-medium tracking-widest">
                        Feel free to reach out!
                    </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.8 }} className="flex flex-col p-20">
                    {/* <div className="flex mb-5 gap-4">
                        <FaEnvelope size={38} className="border-4  border-indigo-200  bg-white text-purple-600 rounded-full" />
                        <a href="thinyatihlaing6@gmail.com" target="_blank" rel="noopener noreferrer" >thinyatihlaing6@gmail.com</a>
                    </div>

                    <div className=" flex mb-5 gap-4">
                        <FaLinkedin size={38} className="border-4 border-indigo-200  bg-white text-purple-600 rounded-full" />
                        <a href="https://www.linkedin.com/in/thin-yati-hlaing-38594624a/" target="_blank" rel="noopener noreferrer">linkedin.com/thin-yati-hlaing</a>
                    </div>

                    <div className=" flex mb-5 gap-4">
                        <FaGithub size={38} className="border-4 border-indigo-200  bg-white text-purple-600 rounded-full" />
                        <a href="https://github.com/ThinYati-Hlaing" target="_blank" rel="noopener noreferrer">github.com/ThinYati-Hlaing</a>
                    </div> */}

                    <form ref={form} onSubmit={sendEmail} className="flex-col border-2  rounded-2xl items-start gap-y-5 pb-20 p-6 mb-8">

                        <input name="user_name" type="text"
                            id="user_name"
                            value={formData.user_name}
                            onChange={handleChange} className="bg-transparent border-b py-4 outline-none w-full placeholder:text-white focus:border-primary transition-all " placeholder="Your name" />

                        <input name="user_email" id="user_email"
                            value={formData.user_email}
                            onChange={handleChange} className="bg-transparent border-b py-4 outline-none w-full placeholder:text-white focus:border-primary transition-all" placeholder="Your email" />

                        <textarea name="message" id="message"
                            value={formData.message}
                            onChange={handleChange} className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-primary transition-all resize-none mb-12" placeholder="Your message" ></textarea>

                        <input value="Send Message" type="submit" className="gradient bg-white text-purple-500 px-10 py-2 mb-2 rounded-full hover:bg-indigo-100 hover:text-purple-700" />

                    </form>

                </motion.div>
            </div>
        </footer>
    );
};

export default Contact;
