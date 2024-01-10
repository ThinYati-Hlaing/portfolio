
import { getImageUrl } from "../../src/utils";
import styles from "../components/Project/ProjectCard.module.css"

const ProjectCard = ({
    project: { title, imageSrc, description, demo, source },
}) => {
    return (
        <section id="">
            <div className={styles.container}>
                <img
                    src={getImageUrl(imageSrc)}
                    alt={`Image of ${title}`}
                    className={styles.image}

                />
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.links}>
                    <a href={demo} className={styles.link}>
                        Demo
                    </a>
                    <a href={source} className={styles.link}>
                        Source
                    </a>
                </div>
            </div>

        </section>
    );
};

export default ProjectCard;