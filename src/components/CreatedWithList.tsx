import "./CreatedWithList.css";
import { CreatedWith } from "../enums";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ICreatedWith } from "../interfaces";
import { createdWithInfo } from "../constants";

function CreatedWithList(props: any) {
    const [createdWith, setCreatedWith] = useState<ICreatedWith[]>([]);

    useEffect(() => {
        const cwList: ICreatedWith[] = []
        props.createdWith.map((cw: CreatedWith) => {
            let info = createdWithInfo.get(cw)
            if (info) {
                cwList.push(info)
            }
        })
        setCreatedWith(cwList)

    }, [props.createdWith, props.accColor])

    return (
        <div className="outerCont">
            {createdWith.map(cw => (
                <a href={cw.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }} key={cw.title}>
                <motion.div
                    layout
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    className="cwCont"
                >
                    <div className="iconCont">
                        <img src={"./images/created_with/" + cw.img} alt="HEJ"/>
                    </div>
                    <h2 className="cwTitle">{cw.title}</h2>
                </motion.div>
                </a>
            ))}
        </div>
    )
}

export default CreatedWithList;