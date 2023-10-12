import './ProjectInformation.css';
import { motion } from "framer-motion";
import { useLocation, Link } from 'react-router-dom';
import CreatedWithList from '../components/CreatedWithList';
import { IProject } from '../interfaces';
import { useEffect } from 'react';
import { BackIcon, GithubIcon } from '../icons';

function ProjectInformation(props: any) {
    const location = useLocation()
    const { project, scrollPos } = location.state
    const iconColor = "#000"

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
        >
            <div className='container'>
                <div className='icons'>
                    <Link to={'/'} state={{ scrollPos: scrollPos }}>
                        <motion.div
                            className='i'
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                            {BackIcon(iconColor)}
                        </motion.div>
                    </Link>
                    <a href='https://github.com/anniebjurman'
                        target="_blank"
                        rel="noreferrer"
                    >
                        <motion.div
                            className='i'
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                            {GithubIcon(iconColor)}
                        </motion.div>
                    </a>
                </div>
                <div className='projTitle'>
                    <h1 className='projectTitle'>{project.title}</h1>
                </div>
                {getDescriptionElement(project)}
                <CreatedWithList createdWith={project.createdWith} color={project.color} />
                {getImgElement(project)}
            </div>
        </motion.div>
    )
}

function getImgElement(p: IProject): JSX.Element {
    var res: JSX.Element[] = []
    var cn: string

    if (p.mobile) {
        cn = 'mobile'
    } else {
        cn = 'desktop'
    }

    let i = 0
    while (i < p.img.length) {
        res.push(
            <motion.img
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.5, }}
                className={cn}
                src={"../images/" + p.img[i]}
                alt='TODO' key={i}
            />
        )
        i++
    }

    return <div className='imgContainer'>{res}</div>

}

function getDescriptionElement(p: IProject): JSX.Element {
    var res: JSX.Element[] = []
    var words = p.description.split(" ")

    let i = 0;
    while (i < words.length) {
        if (p.accWords.includes(words[i])) {
            res.push(<span style={{ fontWeight: 'bold' }} key={i}>{words[i] + " "}</span>)
        } else {
            res.push(<span key={i}>{words[i] + " "}</span>)
        }
        i++;
    }

    return <p className='desciption'>{res}</p>
}

export default ProjectInformation;