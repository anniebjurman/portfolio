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
            return true
        })
        setCreatedWith(cwList)

    }, [props.createdWith, props.color])

    return (
        <div className="outerCont">
            {createdWith.map(cw => (
                <a href={cw.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }} key={cw.title}>
                <motion.div
                    initial={{ scale: 1.07 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5, }}
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