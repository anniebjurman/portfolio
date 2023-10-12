import './ProjectInformation.css';
import { motion } from "framer-motion";
import { useNavigate, useLocation, Link } from 'react-router-dom';
import CreatedWithList from '../components/CreatedWithList';
import { IProject } from '../interfaces';
import { useEffect } from 'react';

function ProjectInformation(props: any) {
    const location = useLocation()
    const { project, scrollPos } = location.state

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
        >
            <div className='container' style={{ backgroundColor: project.color }}>
                <div className='icons'>
                    <Link to={'/'} state={{scrollPos: scrollPos}}>
                        <motion.img
                            className='i'
                            src={"../icons/back.svg"}
                            alt=""
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        />
                    </Link>
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
        res.push(<img className={cn} src={"../images/" + p.img[i]} alt='TODO' key={i}/>)
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