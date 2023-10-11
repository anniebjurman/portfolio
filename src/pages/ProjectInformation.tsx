import './ProjectInformation.css';
import { motion } from "framer-motion";
import { useNavigate, useLocation } from 'react-router-dom';
import CreatedWithList from '../components/CreatedWithList';
import { IProject } from '../Interfaces';

function ProjectInformation(props: any) {
    const navigate = useNavigate();

    const location = useLocation()
    const { project } = location.state

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
                    <div className='icons'>
                        <motion.img
                            className='i'
                            src={"../icons/back.svg"}
                            alt=""
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                            onClick={toHome}
                        />
                        <a href='https://github.com/anniebjurman'
                            target="_blank"
                            rel="noreferrer"
                        >
                            <motion.img
                                className='i'
                                src={"../icons/github.svg"}
                                alt=""
                                whileHover={{ scale: 1.2 }}
                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                            />
                        </a>
                    </div>
                    <div className='projTitle'>
                        <h1 className='projectTitle'>{project.title}</h1>
                    </div>
                    {getDescriptionElement(project)}
                    <CreatedWithList createdWith={project.createdWith} />
                    <div></div>
                </div>
            </div>
        </motion.div>
    )
}

function getDescriptionElement(p: IProject) {
    var res: JSX.Element[] = []
    var words = p.description.split(" ")

    let i = 0;
    while (i < words.length) {
        if (p.accWords.includes(words[i])) {
            res.push(<span style={{ fontWeight: 'bold' }}>{words[i] + " "}</span>)
        } else {
            res.push(<span>{words[i] + " "}</span>)
        }
        i++;
    }

    return <p className='desciption'>{res}</p>
}

export default ProjectInformation;