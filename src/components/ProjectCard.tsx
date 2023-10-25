import './ProjectCard.css';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

function ProjectCard(props: any) {
    let p = props.project
    let sp = props.scrollPos
    let imagePath: string = "./images/" + p.img[0]

    return (
        <motion.div
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.1 }}
        >
            <Link to={"/project"} state={{ project: p, scrollPos: sp }} style={{ textDecoration: 'none' }}>
                {/* <div className='cardImgCont' style={{ backgroundColor: p.color }}> */}
                <img className='cardImage' src={imagePath} alt="" />
                {/* </div> */}
                <h2>{p.title}</h2>
            </Link>
        </motion.div>
    )

}

export default ProjectCard;