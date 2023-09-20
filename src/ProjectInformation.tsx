import { useState } from 'react';
import './ProjectInformation.css';
import { motion } from "framer-motion";

function ProjectInformation(props: any) {
    let p = props.project;
    // let imagePath: string = "../images/" + p.img;

    let onTrigger = (event: any) => {
        props.parentCallback(null);
        event.preventDefault();
    }

    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
        >
            <div className='cardCont' style={{ backgroundColor: p.color }}>
                <div className='container'>
                    <div className='icon'>
                        <motion.img
                            className='icon'
                            src={"../icons/close1.svg"}
                            alt=""
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                            onClick={onTrigger}
                        />
                    </div>
                    <div className='center'>
                        <h1>{p.title}</h1>
                    </div>
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