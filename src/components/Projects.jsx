
import projects from "../data/projects.json";
import ProjectCard from "./ProjectCard";
import styles from "../components/Project/Projects.module.css"

const Projects = () => {
    return (
        <section className={styles.container} id="project">
            <div className={styles.space}>
                <h2 className={styles.title}>Projects</h2>
                <div className={styles.projects}>
                    {projects.map((project, id) => {
                        return <ProjectCard key={id} project={project} />;
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;