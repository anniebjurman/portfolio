import "./CreatedWithList.css";
import { CreatedWith } from "../Enums";
import { useEffect, useState } from "react";

interface ICreatedWith {
    title: string;
    img: string;
    link: string;
}

function CreatedWithList(props: any) {
    const [createdWith, setCreatedWith] = useState<ICreatedWith[]>([]);

    useEffect(() => {
        const cwList: ICreatedWith[] = []
        props.createdWith.map((cw: CreatedWith) => {
            cwList.push(GetInfo(cw))
        })

        setCreatedWith(cwList)

    }, [props.createdWith])

    return (
        <div>
            {createdWith.map(cw => (
                <div>
                    <h1>{cw.title}</h1>
                </div>
            ))}
        </div>
    )
}

function GetInfo(index: any): ICreatedWith {
    switch (index) {
        case CreatedWith.ADOBE_XD:
            return {
                title: 'Adobe XD',
                img: '',
                link: ''
            }
        case CreatedWith.BLENDER:
            return {
                title: 'Blender',
                img: '',
                link: ''
            }
        case CreatedWith.ANDROID_STUDIO:
            return {
                title: 'Android Studio',
                img: '',
                link: ''
            }
        case CreatedWith.CSS:
            return {
                title: 'CSS',
                img: '',
                link: ''
            }
        case CreatedWith.FIGMA:
            return {
                title: 'Figma',
                img: '',
                link: ''
            }
        case CreatedWith.FIREBASE:
            return {
                title: 'Firebase',
                img: '',
                link: ''
            }
        case CreatedWith.FRAMER_MOTION:
            return {
                title: 'Framer Motion',
                img: '',
                link: ''
            }
        case CreatedWith.HTML:
            return {
                title: 'HTML',
                img: '',
                link: ''
            }
        case CreatedWith.JAVA:
            return {
                title: 'Java',
                img: '',
                link: ''
            }
        case CreatedWith.KOTLIN:
            return {
                title: 'Kotlin',
                img: '',
                link: ''
            }
        case CreatedWith.OPENGL:
            return {
                title: 'Open GL',
                img: '',
                link: ''
            }
        case CreatedWith.PYTHON:
            return {
                title: 'Python',
                img: '',
                link: ''
            }
        case CreatedWith.REACT_NATIVE:
            return {
                title: 'React Native',
                img: '',
                link: ''
            }
        case CreatedWith.REACT:
            return {
                title: 'React',
                img: '',
                link: ''
            }
        case CreatedWith.TAILWIND:
            return {
                title: 'Tailwind',
                img: '',
                link: ''
            }
        case CreatedWith.TYPESCRIPT:
            return {
                title: 'Typescript',
                img: '',
                link: ''
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