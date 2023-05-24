import insikt from "./images/insikt.png";
import './ProjectCard.css';

function ProjectCard(props: any) {
    let p = props.project;

    return (
        <div>
            <img src={insikt} alt="" />
            <h2>{p.title}</h2>
        </div>
    )

}

export default ProjectCard;