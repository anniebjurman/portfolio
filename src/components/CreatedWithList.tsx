import "./CreatedWithList.css";
import { CreatedWith } from "../Enums";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ICreatedWith } from "../Interfaces";

function CreatedWithList(props: any) {
    const [createdWith, setCreatedWith] = useState<ICreatedWith[]>([]);

    useEffect(() => {
        const cwList: ICreatedWith[] = []
        props.createdWith.map((cw: CreatedWith) => {
            cwList.push(GetInfo(cw))
        })
        setCreatedWith(cwList)

    }, [props.createdWith, props.accColor])

    return (
        <div className="outerCont">
            {createdWith.map(cw => (
                <a href={cw.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
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

function GetInfo(index: any): ICreatedWith {
    switch (index) {
        case CreatedWith.ADOBE_XD:
            return {
                title: 'Adobe XD',
                img: 'adobe_xd.png',
                link: 'https://helpx.adobe.com/se/xd/get-started.html'
            }
        case CreatedWith.BLENDER:
            return {
                title: 'Blender',
                img: 'blender.png',
                link: 'https://www.blender.org/'
            }
        case CreatedWith.ANDROID_STUDIO:
            return {
                title: 'Android Studio',
                img: 'android.png',
                link: 'https://developer.android.com/studio'
            }
        case CreatedWith.CSS:
            return {
                title: 'CSS',
                img: 'css.png',
                link: 'https://www.w3schools.com/css/'
            }
        case CreatedWith.FIGMA:
            return {
                title: 'Figma',
                img: 'figma.png',
                link: 'https://figma.com'
            }
        case CreatedWith.FIREBASE:
            return {
                title: 'Firebase',
                img: 'firebase.png',
                link: 'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwi4n5CewuuBAxUcCqIDHcR5AtYYABAAGgJsZQ&ase=2&gclid=Cj0KCQjw7JOpBhCfARIsAL3bobdXRAMqdFDBRBUOrEKFoq1_fiwWu7UBb0rtN5njioIR5eh0Y6Onh2gaAkHrEALw_wcB&ohost=www.google.com&cid=CAESVeD2UtCERVYvju3HM61BVtRd_3plKDfVIk0b4kSfE6fglpGVqiLfomIJREC30jtwNFHHQYWiqa8guhUqqzDtHm3-_7ODDIeQ9d7AIY--QOW2-aZrAK4&sig=AOD64_06ybDb-Wd09fLufpnA-NEHCX11lA&q&nis=4&adurl&ved=2ahUKEwiT-IaewuuBAxUcVPEDHbpyAScQ0Qx6BAgGEAE'
            }
        case CreatedWith.FRAMER_MOTION:
            return {
                title: 'Framer Motion',
                img: 'framer_motion.png',
                link: 'https://www.framer.com/motion/'
            }
        case CreatedWith.HTML:
            return {
                title: 'HTML',
                img: 'html.png',
                link: 'https://www.w3schools.com/html/'
            }
        case CreatedWith.JAVA:
            return {
                title: 'Java',
                img: 'java.png',
                link: 'https://www.java.com/sv/'
            }
        case CreatedWith.KOTLIN:
            return {
                title: 'Kotlin',
                img: 'kotlin.png',
                link: 'https://kotlinlang.org/'
            }
        case CreatedWith.OPENGL:
            return {
                title: 'Open GL',
                img: 'open_gl.svg',
                link: 'https://www.opengl.org/'
            }
        case CreatedWith.PYTHON:
            return {
                title: 'Python',
                img: 'python.png',
                link: 'https://www.python.org/'
            }
        case CreatedWith.REACT_NATIVE:
            return {
                title: 'React Native',
                img: 'react.png',
                link: 'https://reactnative.dev/'
            }
        case CreatedWith.REACT:
            return {
                title: 'React',
                img: 'react.png',
                link: 'https://react.dev/'
            }
        case CreatedWith.TAILWIND:
            return {
                title: 'Tailwind',
                img: 'tailwind.png',
                link: 'https://tailwindcss.com/'
            }
        case CreatedWith.TYPESCRIPT:
            return {
                title: 'Typescript',
                img: 'typescript.png',
                link: 'https://www.typescriptlang.org/'
            }
        default:
            return {
                title: '',
                img: '',
                link: ''
            }
    }
}

export default CreatedWithList;