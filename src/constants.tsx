import { CreatedWith, FilterCategories } from "./enums"
import { ICreatedWith, IProject } from "./interfaces"

const projects: IProject[] = [
    {
        id: 0,
        title: "Mobile design of INSIKT",
        img: ['insikt.png', 'insikt3.png', 'insikt4.png', 'insikt5.png'],
        filter: [FilterCategories.DESIGN],
        color: "#9DCA7C",
        createdWith: [CreatedWith.ADOBE_XD],
        mobile: true,
        what: `A clickable design prototype for using the digital desktop product INSIKT (today owned by Twoday) on mobile devices.`,
        when: `Spring semester 2021`,
        with_who: `A group of four people.`,
        focus: `How to design user-friendly interfaces for mobile devices.`,
        github: null
    },
    {
        id: 4,
        title: "Mind Mentor",
        img: ['mind_mentor1.png', 'mind_mentor2.png', 'mind_mentor3.png', 'mind_mentor4.png'],
        filter: [FilterCategories.DESIGN, FilterCategories.REACT_NATIVE],
        color: "#B5B8FA",
        createdWith: [CreatedWith.FIGMA, CreatedWith.REACT_NATIVE],
        mobile: true,
        what: `An app for early teenagers of Australia.
         The app focused on improving mental health and giving young people a fun way to work on their insecurities or in a de-dramatized way talk to a psychologist.
          This was carried out as a collaboration with a university in Australia.`,
        when: `Spring semester 2022.`,
        with_who: `A group of four people.`,
        focus: `Collaboration with an external marketing team, the design process and development of the app.`,
        github: 'https://github.com/anniebjurman/TFSM_project/tree/main'
    },
    {
        id: 7,
        title: "The Maze Game",
        img: ['maze_game3.png', 'maze_game2.png'],
        filter: [FilterCategories.COMPUTER_GRAPHICS],
        color: "#8DC2E9",
        createdWith: [CreatedWith.PYTHON, CreatedWith.OPENGL],
        mobile: false,
        what: `A maze game where the goal is to navigating the maze and find three red pyramids before the time runs out.`,
        when: `During my exchange studies in Reykjavik Iceland (fall semester 2022).`,
        with_who: `Just me.`,
        focus: `Understanding computer graphics and the Open GL Pipeline.`,
        github: 'https://github.com/anniebjurman/CG_maze_game'
    },
    {
        id: 8,
        title: "Vad säger systemet?",
        img: ['vss0.jpg', 'vss1.jpg', 'vss3.jpg', 'vss4.jpg'],
        filter: [FilterCategories.ANDROID],
        color: "#83c9b3",
        createdWith: [CreatedWith.FIGMA, CreatedWith.ANDROID_STUDIO, CreatedWith.KOTLIN, CreatedWith.FIREBASE],
        mobile: true,
        what: ``,
        when: ``,
        with_who: `Just me.`,
        focus: ``,
        github: null
    },
    {
        id: 5,
        title: "Product home for Västerbottensost",
        img: ['vb5.png', 'vb2.png', 'vb3.png', 'vb4.png'],
        filter: [FilterCategories.DESIGN],
        color: "#CDAD58",
        createdWith: [CreatedWith.ADOBE_XD],
        mobile: false,
        what: `A prototype of a digital product home for Västerbottensost`,
        when: `Spring semester 2020`,
        with_who: `A group of four people`,
        focus: `Understanding the company's vision and apply that in the design of the prototype.`,
        github: null
    },
    {
        id: 6,
        title: "Space Animation",
        img: ['final_animation1.png', 'final_animation3.png'],
        filter: [FilterCategories.COMPUTER_GRAPHICS],
        color: "#FACA85",
        createdWith: [CreatedWith.PYTHON, CreatedWith.OPENGL, CreatedWith.BLENDER],
        mobile: false,
        what: `A animation that takes place in space where two people are stranded on a small platform.`,
        when: `During my exchange studies in Reykjavik Iceland (fall semester 2022).`,
        with_who: `Just me.`,
        focus: `Understanding computer graphics and the Open GL Pipeline.`,
        github: null
    },
    {
        id: 9,
        title: "Thirty",
        img: ['thirty1.jpg', 'thirty2.jpg', 'thirty3.jpg', 'thirty4.jpg'],
        filter: [FilterCategories.ANDROID],
        color: "#f5b895",
        createdWith: [CreatedWith.FIGMA, CreatedWith.ANDROID_STUDIO, CreatedWith.KOTLIN],
        mobile: true,
        what: ``,
        when: ``,
        with_who: `Just me.`,
        focus: ``,
        github: null
    },
    {
        id: 10,
        title: "Portfolio",
        img: ['portfolio1.png', 'portfolio2.png'],
        filter: [FilterCategories.DESIGN, FilterCategories.REACT],
        color: "#dc9ede",
        createdWith: [CreatedWith.FIGMA, CreatedWith.REACT, CreatedWith.FRAMER_MOTION, CreatedWith.TYPESCRIPT],
        mobile: false,
        what: `A portfolio with the purpose to showcase different projects.`,
        when: `Summer 2023`,
        with_who: `Just me.`,
        focus: `Building a simple but well-made website to display different projects, that can easily grow as more projects are developed.`,
        github: null
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
createdWithInfo.set(
    CreatedWith.JAVA_SCRIPT,
    {
        title: 'Java Script',
        img: 'javascript.svg',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    }
)


export { projects, createdWithInfo }