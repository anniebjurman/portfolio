import './ProjectCard.css';
import { motion } from "framer-motion";

function ProjectCard(props: any) {
    let p = props.project;
    let imagePath: string = "../images/" + p.img;

    let onTrigger = (event: any) => {
        props.parentCallback(p);
        event.preventDefault();
    }

    return (
        <motion.div
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            onClick={onTrigger}
        >
            <div className='cardImgCont' style={{ backgroundColor: p.color }}>
                <img className='cardImage' src={imagePath} alt="" />
            </div>
            <h2>{p.title}</h2>
        </motion.div>
    )

}

export default ProjectCard;