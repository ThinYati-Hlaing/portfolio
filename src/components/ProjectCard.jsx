import { getImageUrl } from "../../src/utils";
import { motion } from "framer-motion";
import { FaCaretUp, FaCode } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

const ProjectCard = ({
    project: { title, imageSrc, description, demo, source },
}) => {
    return (
        <section className=" section " id="project">
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.8 }} className="card-container group relative overflow-hidden border-2 border-white/60 rounded-xl lg:mb-28 mb-5">
                <div className=" group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                    src={getImageUrl(imageSrc)}
                    alt={`Image of ${title}`}
                    className="image group-hover:scale-105 transition-all duration-500 h-full p-3 m-2 border rounded-lg bg-white"

                />
                <h3 className="card-title  absolute -bottom-full group-hover:bottom-16 left-7 text-primary transition-all duration-500 z-50">{title}</h3>
                <FaCaretUp className="text-[60px] text-fuchsia-800 flex justify-center items-center mx-auto" />
                <div className="links absolute -bottom-full group-hover:bottom-5 transition-all duration-500 z-50">
                    <a href={demo} className="link bg" target="_blank" >
                        <SiNetlify className=" text-3xl" />
                    </a>
                    <a href={source} className="link bg" target="_blank">
                        <FaCode className="flex justify-center items-center" />
                    </a>
                </div>
            </motion.div>

        </section>
    );
};

export default ProjectCard;