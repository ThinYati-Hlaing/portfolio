import skills from "../../src/data/skills.json";
import { getImageUrl } from "../../src/utils";

const Skill = () => {
    return (
        <section
            id="skill"
            className=" flex lg:flex-row md:flex-row ssm:flex-col  justify-center items-center p-20 space-y-8   text-white select-none"
        >
            <div className="lg:w-1/2 ssm:w-fit select-none">
                <div className="  flex flex-row flex-wrap justify-center items-center w-96 select-none gap-6">
                    <h1 className="text-4xl p-8 text-center mt-3 font-bold tracking-wider">Experiences</h1>

                    <div className=" flex flex-wrap justify-center items-center p-7 gap-8">
                        {skills.map((skill, id) => {
                            return (
                                <div key={id} className="  flex flex-col items-center gap-6">
                                    <div className="">
                                        <img
                                            className=" w-14 md:w-14 sm:w-14 rounded-full"
                                            src={getImageUrl(skill.imageSrc)}
                                            alt={skill.title}
                                        />
                                    </div>
                                    <p className=" text-lg font-medium m-2">{skill.title}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className=" lg:w-1/2 ssm:w-fit select-none">
                <div className="flex flex-col lg:w-auto ssm:w-96 px-5">
                    <h1 className="text-4xl mb-12 text-center font-bold tracking-widest">Skills</h1>

                    <div className=" relative mb-4">
                        <h3 className=" text-xl mb-2">HTML</h3>
                        <div className=" bg-gray-200 rounded-lg">
                            <div
                                className="bg-blue-200 h-3 rounded-lg"
                                style={{ width: "80%" }}
                            />
                            <div className=" absolute right-0 text-lg -mt-10 leading-4">
                                80%
                            </div>
                        </div>
                    </div>
                    <div className="relative mb-4">
                        <h3 className="text-xl mb-2">CSS</h3>
                        <div className="bg-gray-200 rounded-lg">
                            <div
                                className="bg-blue-200 h-3 rounded-lg"
                                style={{ width: "60%" }}
                            />
                            <div className=" absolute right-0 text-lg -mt-10 leading-4">
                                60%
                            </div>
                        </div>
                    </div>
                    <div className="relative mb-4">
                        <h3 className="text-xl mb-2">Tailwind CSS</h3>
                        <div className="bg-gray-200 rounded-lg">
                            <div
                                className="bg-blue-200 h-3 rounded-lg"
                                style={{ width: "70%" }}
                            />
                            <div className=" absolute right-0 text-lg -mt-10 leading-4">
                                70%
                            </div>
                        </div>
                    </div>
                    <div className="relative mb-4">
                        <h3 className="text-xl mb-2">JavaScript</h3>
                        <div className="bg-gray-200 rounded-lg">
                            <div
                                className="bg-blue-200 h-3 rounded-lg"
                                style={{ width: "60%" }}
                            />
                            <div className=" absolute right-0 text-lg -mt-10 leading-4">
                                60%
                            </div>
                        </div>
                    </div>

                    <div className="relative mb-4">
                        <h3 className="text-xl mb-2">React JS</h3>
                        <div className="bg-gray-200 rounded-lg">
                            <div
                                className="bg-blue-200 h-3 rounded-lg"
                                style={{ width: "40%" }}
                            />
                            <div className=" absolute right-0 text-lg -mt-10 leading-4">
                                40%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;
