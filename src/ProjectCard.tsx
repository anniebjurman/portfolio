import './ProjectCard.css';
import { motion } from "framer-motion";

function ProjectCard(props: any) {
    let p = props.project;
    let imagePath: string = "../images/" + p.img;

    return (
        <motion.div layout animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}}>
            <img src={imagePath} alt="" />
            <h2>{p.title}</h2>
        </motion.div>
    )

}

export default ProjectCard;