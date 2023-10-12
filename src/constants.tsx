import { CreatedWith, FilterCategories } from "./enums"
import { ICreatedWith, IProject } from "./interfaces"

const projects: IProject[] = [
    {
        id: 0,
        title: "Trimma INSIKT",
        img: ['insikt.png', 'insikt3.png', 'insikt4.png', 'insikt5.png'],
        filter: [FilterCategories.DESIGN],
        color: "#9DCA7C",
        createdWith: [CreatedWith.ADOBE_XD],
        mobile: true,
        description: "Framtagande av en designlösning för mobila enheter för Trimmas (nuvarande Twoday) produkt Insikt. Detta genomfördes i grupp under kursen “DBT” på Umeå Universitet vårterminen 2022.",
        accWords: ['designlösning', 'grupp', 'vårterminen', '2022.']
    },
    {
        id: 2,
        title: "NASA Space app Challenge",
        img: ['nasa.png', 'nasa2.png'],
        filter: [FilterCategories.DESIGN, FilterCategories.ANGULAR],
        color: "#CD93B0",
        createdWith: [CreatedWith.HTML, CreatedWith.CSS],
        mobile: false,
        description: "Hej!",
        accWords: []
    },
    {
        id: 3,
        title: "Hackon",
        img: ['hackaton1.png'],
        filter: [FilterCategories.DESIGN],
        color: "#8fdba9",
        createdWith: [CreatedWith.ADOBE_XD],
        mobile: true,
        description: "Hej!",
        accWords: []
    },
    {
        id: 4,
        title: "Mind Mentor",
        img: ['mindMentor.png'],
        filter: [FilterCategories.DESIGN, FilterCategories.REACT_NATIVE],
        color: "#B5B8FA",
        createdWith: [CreatedWith.ADOBE_XD],
        mobile: true,
        description: "Hej!",
        accWords: []
    },
    {
        id: 7,
        title: "The Maze Game",
        img: ['maze2.png'],
        filter: [FilterCategories.COMPUTER_GRAPHICS],
        color: "#8DC2E9",
        createdWith: [CreatedWith.PYTHON, CreatedWith.OPENGL],
        mobile: false,
        description: "Hej!",
        accWords: []
    },
    {
        id: 5,
        title: "Västerbottensost",
        img: ['vb5.png', 'vb2.png', 'vb3.png', 'vb4.png'],
        filter: [FilterCategories.DESIGN],
        color: "#CDAD58",
        createdWith: [CreatedWith.ADOBE_XD],
        mobile: false,
        description: "Hej!",
        accWords: []
    },
    {
        id: 6,
        title: "OpenGL animation",
        img: ['animation1.png'],
        filter: [FilterCategories.COMPUTER_GRAPHICS],
        color: "#FACA85",
        createdWith: [CreatedWith.PYTHON, CreatedWith.OPENGL],
        mobile: false,
        description: "Hej!",
        accWords: []
    },
    {
        id: 8,
        title: "Vad säger systemet?",
        img: ['vss.jpeg'],
        filter: [FilterCategories.ANDROID, FilterCategories.DESIGN],
        color: "#83c9b3",
        createdWith: [CreatedWith.ANDROID_STUDIO, CreatedWith.KOTLIN],
        mobile: true,
        description: "Hej!",
        accWords: []
    },
    {
        id: 9,
        title: "Thirty",
        img: ['thirty.png'],
        filter: [FilterCategories.DESIGN, FilterCategories.ANDROID],
        color: "#f5b895",
        createdWith: [CreatedWith.ANDROID_STUDIO, CreatedWith.KOTLIN],
        mobile: true,
        description: "Hej!",
        accWords: []
    },
    {
        id: 10,
        title: "Portfolio",
        img: ['placeholder.png'],
        filter: [FilterCategories.DESIGN, FilterCategories.REACT],
        color: "#dc9ede",
        createdWith: [CreatedWith.REACT, CreatedWith.FRAMER_MOTION],
        mobile: false,
        description: "Hej!",
        accWords: []
    }
]

const createdWithInfo: Map<CreatedWith, ICreatedWith> = new Map()
createdWithInfo.set(
    CreatedWith.ADOBE_XD,
    {
        title: 'Adobe XD',
        img: 'adobe_xd.png',
        link: 'https://helpx.adobe.com/se/xd/get-started.html'
    })
createdWithInfo.set(
    CreatedWith.BLENDER,
    {
        title: 'Blender',
        img: 'blender.png',
        link: 'https://www.blender.org/'
    }
)
createdWithInfo.set(
    CreatedWith.ANDROID_STUDIO,
    {
        title: 'Android Studio',
        img: 'android.png',
        link: 'https://developer.android.com/studio'
    }
)
createdWithInfo.set(
    CreatedWith.CSS,
    {
        title: 'CSS',
        img: 'css.png',
        link: 'https://www.w3schools.com/css/'
    }
)
createdWithInfo.set(
    CreatedWith.FIGMA,
    {
        title: 'Figma',
        img: 'figma.png',
        link: 'https://figma.com'
    }
)
createdWithInfo.set(
    CreatedWith.FIREBASE,
    {
        title: 'Firebase',
        img: 'firebase.png',
        link: 'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwi4n5CewuuBAxUcCqIDHcR5AtYYABAAGgJsZQ&ase=2&gclid=Cj0KCQjw7JOpBhCfARIsAL3bobdXRAMqdFDBRBUOrEKFoq1_fiwWu7UBb0rtN5njioIR5eh0Y6Onh2gaAkHrEALw_wcB&ohost=www.google.com&cid=CAESVeD2UtCERVYvju3HM61BVtRd_3plKDfVIk0b4kSfE6fglpGVqiLfomIJREC30jtwNFHHQYWiqa8guhUqqzDtHm3-_7ODDIeQ9d7AIY--QOW2-aZrAK4&sig=AOD64_06ybDb-Wd09fLufpnA-NEHCX11lA&q&nis=4&adurl&ved=2ahUKEwiT-IaewuuBAxUcVPEDHbpyAScQ0Qx6BAgGEAE'
    }
)
createdWithInfo.set(
    CreatedWith.FRAMER_MOTION,
    {
        title: 'Framer Motion',
        img: 'framer_motion.png',
        link: 'https://www.framer.com/motion/'
    }
)
createdWithInfo.set(
    CreatedWith.HTML,
    {
        title: 'HTML',
        img: 'html.png',
        link: 'https://www.w3schools.com/html/'
    }
)
createdWithInfo.set(
    CreatedWith.JAVA,
    {
        title: 'Java',
        img: 'java.png',
        link: 'https://www.java.com/sv/'
    }
)
createdWithInfo.set(
    CreatedWith.KOTLIN,
    {
        title: 'Kotlin',
        img: 'kotlin.png',
        link: 'https://kotlinlang.org/'
    }
)
createdWithInfo.set(
    CreatedWith.OPENGL,
    {
        title: 'Open GL',
        img: 'open_gl.svg',
        link: 'https://www.opengl.org/'
    }
)
createdWithInfo.set(
    CreatedWith.PYTHON,
    {
        title: 'Python',
        img: 'python.png',
        link: 'https://www.python.org/'
    }
)
createdWithInfo.set(
    CreatedWith.REACT_NATIVE,
    {
        title: 'React Native',
        img: 'react.png',
        link: 'https://reactnative.dev/'
    }
)
createdWithInfo.set(
    CreatedWith.REACT,
    {
        title: 'React',
        img: 'react.png',
        link: 'https://react.dev/'
    }
)
createdWithInfo.set(
    CreatedWith.TAILWIND,
    {
        title: 'Tailwind',
        img: 'tailwind.png',
        link: 'https://tailwindcss.com/'
    }
)
createdWithInfo.set(
    CreatedWith.TYPESCRIPT,
    {
        title: 'Typescript',
        img: 'typescript.png',
        link: 'https://www.typescriptlang.org/'
    }
)


export { projects, createdWithInfo }