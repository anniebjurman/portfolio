import './ProjectInformation.css';
import { motion } from "framer-motion";
import { useLocation } from 'react-router-dom';
import CreatedWithList from '../components/CreatedWithList';
import { IProject } from '../interfaces';
import { useEffect } from 'react';
import { GithubIcon } from '../icons';
import AnimateArrow from '../components/AnimateArrow';

function ProjectInformation(props: any) {
    const location = useLocation()
    const { project } = location.state
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
                <div className='projTitle'>
                    <h1 className='projectTitle'>{project.title}</h1>
                    {getGithubLinkElement(project, iconColor)}
                    {/* <h3>github</h3> */}
                </div>
                <div className='infoContainer'>
                    <div className='cwOuterContainer'>
                        <p>Created with</p>
                        <div className='cwContainer'>
                            <CreatedWithList createdWith={project.createdWith} color={project.color} />
                        </div>
                    </div>
                    {getDescriptionElement(project)}
                </div>
                {getImgElement(project)}
            </div>
            <footer></footer>
        </motion.div>
    )
}

function getGithubLinkElement(p: IProject, iconColor: string): JSX.Element {
    if (p.github) {
        return (
            <div className='githubArrowCont'>
                {/* <AnimateArrow color={"black"} text="Check it out!" /> */}
                <a href={p.github}
                    target="_blank"
                    rel="noreferrer"
                >
                    <motion.div
                        className='i'
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                        {/* {GithubIcon(iconColor)} */}
                        <h3>github</h3>
                    </motion.div>
                </a>
            </div>
        )
    } else {
        return <></>
    }
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
                src={"./images/" + p.img[i]}
                alt='TODO' key={i}
            />
        )
        i++
    }

    return <div className='imgContainer'>{res}</div>
}

// function getDescriptionElement(p: IProject): JSX.Element {
//     var res: JSX.Element[] = []
//     var words = p.description.split(" ")

//     let i = 0;
//     while (i < words.length) {
//         if (words[i] === "\n") {
//             res.push(<>
//                 <br></br><br></br>
//             </>
//             )
//         } else if (p.accWords.includes(words[i])) {
//             res.push(<span style={{ fontWeight: 'bold' }} key={i}>{words[i] + " "}</span>)
//         } else {
//             res.push(<span key={i}>{words[i] + " "}</span>)
//         }
//         i++;
//     }

//     return <p className='desciption'>{res}</p>
// }

function getDescriptionElement(p: IProject): JSX.Element {
    return (
        <div className='desciption'>
            <p>
                <span style={{ fontWeight: 'bold' }}>What? </span>
                {p.what}
            </p>
            <p>
                <span style={{ fontWeight: 'bold' }}>When? </span>
                {p.when}
            </p>
            <p>
                <span style={{ fontWeight: 'bold' }}>With who? </span>
                {p.with_who}
            </p>
            <p>
                <span style={{ fontWeight: 'bold' }}>Focus? </span>
                {p.focus}
            </p>
        </div>
    )
}

export default ProjectInformation;