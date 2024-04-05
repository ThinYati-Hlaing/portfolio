import { useEffect, useState } from "react";
import skills from "../../src/data/skills.json";
import { getImageUrl } from "../../src/utils";
import { motion } from "framer-motion";
import { ChakraProvider, Box, CircularProgress, CircularProgressLabel } from '@chakra-ui/react';

const Skill = () => {

    return (
        <section
            id="skill"
            className=" section flex justify-center items-center lg:flex-row md:flex-row ssm:flex-col p-16 text-white select-none"
        >
            <div className="flex flex-col lg:w-1/2 ssm:w-fit select-none justify-center items-center mb-12">
                <h1 className="text-4xl p-16 text-center text-primary flex items-center justify-center  font-bold tracking-widest">Experiences</h1>

                <motion.div initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.8 }} className="  flex flex-row flex-wrap justify-center items-center w-96 select-none">

                    <div className=" flex flex-wrap justify-center items-center color-gradient p-7 gap-11 lg:gap-y-20">
                        {skills.map((skill, id) => {
                            return (
                                <div key={id} className=" flex flex-col items-center gap-6">
                                    <div className="">
                                        <img
                                            className=" w-16 md:w-16 sm:w-14 rounded-full"
                                            src={getImageUrl(skill.imageSrc)}
                                            alt={skill.title}
                                        />
                                    </div>
                                    <p className=" text-lg  font-medium m-2">{skill.title}</p>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>

            <div className=" flex flex-col
             lg:w-1/2 ssm:w-fit select-none justify-center items-center">
                <h1 className=" text-4xl p-3 text-center text-primary font-bold tracking-widest mb-8">Skills</h1>

                <motion.div initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.8 }} className="flex flex-col flex-wrap justify-center items-center w-96 select-none gap-6">

                    <ChakraProvider>
                        <Box>
                            <div className=" grid lg:grid-cols-3 grid-cols-3 md:gap-8 md:p-4 lg:gap-20 text-lg color-gradient">
                                <div className="" >
                                    <CircularProgress isIndeterminate value={80} size="110px" thickness="6px" color="orange.400">
                                        <CircularProgressLabel className="text-purple-300">80%</CircularProgressLabel>
                                    </CircularProgress>
                                    <div className=" flex justify-center items-center mt-3">HTML</div>
                                </div>

                                <div className="" >
                                    <CircularProgress isIndeterminate value={75} size="110px" thickness="7px" color=" purple.500">
                                        <CircularProgressLabel className="text-purple-300">75%</CircularProgressLabel>
                                    </CircularProgress>
                                    <div className="flex justify-center items-center mt-3">CSS</div>
                                </div>

                                <div className="color-gradient" >
                                    <CircularProgress isIndeterminate value={65} size="110px" thickness="7px" color="blue.600">
                                        <CircularProgressLabel className="text-purple-300">65%</CircularProgressLabel>
                                    </CircularProgress>
                                    <div className="flex justify-center items-center mt-3">Tailwind</div>
                                </div>


                                <div className="" >
                                    <CircularProgress isIndeterminate value={75} size="110px" thickness="7px" color="yellow.400">
                                        <CircularProgressLabel className=" text-purple-300">75%</CircularProgressLabel>
                                    </CircularProgress>
                                    <div className="flex justify-center items-centert mt-3" >JavaScript</div>
                                </div>

                                <div className="" >
                                    <CircularProgress isIndeterminate value={60} size="110px" thickness="7px" color="blue.300">
                                        <CircularProgressLabel className=" text-purple-300">60%</CircularProgressLabel>
                                    </CircularProgress>
                                    <div className="flex justify-center items-center mt-3">React</div>
                                </div>
                            </div>

                        </Box>

                    </ChakraProvider>


                </motion.div>

            </div>



        </section>
    );
};

export default Skill;
