import { useEffect, useState } from "react";
import skills from "../../src/data/skills.json";
import { getImageUrl } from "../../src/utils";
import { motion } from "framer-motion";
import { Progress } from "antd";

const Skill = () => {
    return (
        <section
            id="skill"
            className=" section w-6/6 justify-center items-center mx-auto text-white select-none px-10"
        >
            <div className="">
                <h1 className="text-4xl text-center pb-9 text-primary flex items-center justify-center  font-bold tracking-widest">
                    My Skills
                </h1>

                <div className="flex">
                    <div className="flex w-3/6 select-none justify-center items-center gap-28">
                        <motion.div
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8 }}
                            className="flex-wrap lg:w-3/6 justify-center items-center select-none"
                        >
                            <div className="flex flex-wrap justify-center items-center color-gradient gap-10">
                                {skills.map((skill, id) => {
                                    return (
                                        <div key={id} className=" flex flex-col items-center">
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

                    <div className="flex w-3/6 select-none justify-center items-center gap-28">
                        <motion.div
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8 }}
                            className=" flex flex-wrap lg:w-3/6 justify-center items-center select-none"
                        >
                            <div className=" flex flex-wrap justify-center items-center flex-row gap-8 color-gradient">
                                <div className="flex flex-col items-center">
                                    <Progress type="circle" percent={85} size={90} />
                                    <p className="p-1">HTML</p>
                                </div>

                                <div className="flex flex-col items-center">
                                    <Progress type="circle" percent={75} size={90} />
                                    <p className="p-1">CSS</p>
                                </div>

                                <div className="flex flex-col items-center">
                                    <Progress type="circle" percent={70} size={90} />
                                    <p className="p-1">Tailwind</p>
                                </div>

                                <div className="flex flex-col items-center">
                                    <Progress type="circle" percent={65} size={90} />
                                    <p className="p-1">JavaScript</p>
                                </div>

                                <div className="flex flex-col items-center">
                                    <Progress type="circle" percent={60} size={90} />
                                    <p className="p-1">React</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* <h1 className="text-4xl text-center text-primary flex items-center justify-center  font-bold tracking-widest">Experience</h1>

            <div className="flex">

                <div className="flex w-3/6 select-none justify-center items-center gap-28">

                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className="flex-wrap lg:w-3/6 justify-center items-center select-none"
                    >
                        <div className="flex flex-wrap justify-center items-center color-gradient gap-10">
                            {skills.map((skill, id) => {
                                return (
                                    <div key={id} className=" flex flex-col items-center">
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

                <div className="flex w-3/6 select-none justify-center items-center gap-28">

                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className=" flex flex-wrap lg:w-3/6 justify-center items-center select-none"
                    >
                        <div className=" flex flex-wrap justify-center items-center flex-row gap-8 color-gradient">
                            <div className="flex flex-col items-center">
                                <Progress type="circle" percent={85} size={90} />
                                <p className="p-1">HTML</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <Progress type="circle" percent={75} size={90} />
                                <p className="p-1">CSS</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <Progress type="circle" percent={70} size={90} />
                                <p className="p-1">Tailwind</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <Progress type="circle" percent={65} size={90} />
                                <p className="p-1">JavaScript</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <Progress type="circle" percent={60} size={90} />
                                <p className="p-1">React</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div> */}

            {/* <div className="flex w-3/6 select-none justify-center items-center gap-28">

                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="flex-wrap lg:w-3/6 justify-center items-center select-none"
                >
                    <div className="flex flex-wrap justify-center items-center color-gradient gap-10">
                        {skills.map((skill, id) => {
                            return (
                                <div key={id} className=" flex flex-col items-center">
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

            <div className="flex w-3/6 select-none justify-center items-center gap-28">

                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className=" flex flex-wrap lg:w-3/6 justify-center items-center select-none"
                >
                    <div className=" flex flex-wrap justify-center items-center flex-row gap-8 color-gradient">
                        <div className="flex flex-col items-center">
                            <Progress type="circle" percent={85} size={90} />
                            <p className="p-1">HTML</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <Progress type="circle" percent={75} size={90} />
                            <p className="p-1">CSS</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <Progress type="circle" percent={70} size={90} />
                            <p className="p-1">Tailwind</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <Progress type="circle" percent={65} size={90} />
                            <p className="p-1">JavaScript</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <Progress type="circle" percent={60} size={90} />
                            <p className="p-1">React</p>
                        </div>
                    </div>
                </motion.div>
            </div> */}
        </section>
    );
};

export default Skill;
