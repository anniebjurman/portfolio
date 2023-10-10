import './ProjectInformation.css';
import { motion } from "framer-motion";
import { useNavigate, useLocation } from 'react-router-dom';
import CreatedWithList from '../components/CreatedWithList';
import { CreatedWith } from '../Enums';

function ProjectInformation(props: any) {
    const navigate = useNavigate();

    const location = useLocation()
    const { project } = location.state
    // let imagePath: string = "../images/" + p.img;

    let toHome = (event: any) => {
        navigate('/');
    }

    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
        >
            <div className='cardCont' style={{ backgroundColor: project.color }}>
                <div className='container'>
                    <div className='icon'>
                        <motion.img
                            className='icon'
                            src={"../icons/back.svg"}
                            alt=""
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                            onClick={toHome}
                        />
                    </div>
                    <div className='center'>
                        <h1>{project.title}</h1>
                    </div>
                    <CreatedWithList createdWith={project.createdWith}/>
                    <p>Enim dolor cillum nisi voluptate et ea est. Qui tempor do fugiat ipsum nulla.
                        Commodo fugiat ut aliquip exercitation ullamco veniam velit nostrud dolor nostrud proident
                        consectetur elit eiusmod. Minim deserunt quis aliquip consequat cillum ea magna. Est qui pariatur
                        laborum labore labore sint.</p>
                    <p>Enim dolor cillum nisi voluptate et ea est. Qui tempor do fugiat ipsum nulla.
                        Commodo fugiat ut aliquip exercitation ullamco veniam velit nostrud dolor nostrud proident
                        consectetur elit eiusmod. Minim deserunt quis aliquip consequat cillum ea magna. Est qui pariatur
                        laborum labore labore sint.</p>
                </div>
            </div>
        </motion.div>
    )

}

export default ProjectInformation;