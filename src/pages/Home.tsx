import './Home.css';
import { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import Filter from '../components/Filter';
import { motion, AnimatePresence } from 'framer-motion';
import { CreatedWith, FilterCategories } from '../Enums'

interface IProject {
  id: string;
  title: string;
  img: string;
  filter: string[];
  color: string;
  createdWith: CreatedWith[];
}

function Home() {
  const proj: any[] = [
    {
      id: 0,
      title: "Trimma INSIKT",
      img: 'insikt.png',
      filter: [FilterCategories.DESIGN],
      color: "#8DC2E9",
      createdWith: [CreatedWith.ADOBE_XD]
    },
    {
      id: 2,
      title: "NASA Space app Challenge",
      img: 'nasa.png',
      filter: [FilterCategories.DESIGN, FilterCategories.ANGULAR],
      color: "#CD93B0",
      createdWith: [CreatedWith.HTML, CreatedWith.CSS]
    },
    {
      id: 3,
      title: "Hackon",
      img: 'hackaton1.png',
      filter: [FilterCategories.DESIGN],
      color: "#8fdba9",
      createdWith: [CreatedWith.ADOBE_XD]
    },
    {
      id: 4,
      title: "Mind Mentor",
      img: 'mindMentor.png',
      filter: [FilterCategories.DESIGN, FilterCategories.REACT_NATIVE],
      color: "#B5B8FA",
      createdWith: [CreatedWith.ADOBE_XD]
    },
    {
      id: 7,
      title: "The Maze Game",
      img: 'maze2.png',
      filter: [FilterCategories.COMPUTER_GRAPHICS],
      color: "#8DC2E9",
      createdWith: [CreatedWith.PYTHON, CreatedWith.OPENGL]
    },
    {
      id: 5,
      title: "Västerbottensost",
      img: 'vb.png',
      filter: [FilterCategories.DESIGN],
      color: "#E97C7C",
      createdWith: [CreatedWith.ADOBE_XD]
    },
    {
      id: 6,
      title: "OpenGL animation",
      img: 'animation1.png',
      filter: [FilterCategories.COMPUTER_GRAPHICS],
      color: "#FACA85",
      createdWith: [CreatedWith.PYTHON, CreatedWith.OPENGL]
    },
    {
      id: 8,
      title: "Vad säger systemet?",
      img: 'vss.jpeg',
      filter: [FilterCategories.ANDROID, FilterCategories.DESIGN],
      color: "#83c9b3",
      createdWith: [CreatedWith.ANDROID_STUDIO, CreatedWith.KOTLIN]
    },
    {
      id: 9,
      title: "Thirty",
      img: 'thirty.png',
      filter: [FilterCategories.DESIGN, FilterCategories.ANDROID],
      color: "#f5b895",
      createdWith: [CreatedWith.ANDROID_STUDIO, CreatedWith.KOTLIN]
    },
    {
      id: 10,
      title: "Portfolio",
      img: 'placeholder.png',
      filter: [FilterCategories.DESIGN, FilterCategories.REACT],
      color: "#dc9ede",
      createdWith: [CreatedWith.REACT, CreatedWith.FRAMER_MOTION]
    }
  ]

  const [projects, setProjects] = useState<IProject[]>([]);
  const [filtered, setFiltered] = useState<IProject[]>([]);
  const [activeFilter, setActiveFilter] = useState(FilterCategories.ALL);

  useEffect(() => {
    setThings();
  }, []);

  const setThings = () => {
    setProjects(proj);
    setFiltered(proj);
  }

  return (
    <div className="App">
      <div className='icons'>
        <div className='darkIconCont'>
          <motion.img
            className='icon'
            src={"../icons/dark.svg"}
            alt=""
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          />
        </div>
        <div className='iconGroup'>
          <a href='https://www.linkedin.com/in/annie-bjurman-53ba02226/'
            target="_blank"
            rel="noreferrer"
          >
            <motion.img
              className='icon'
              src={"../icons/linkedin.svg"}
              alt=""
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            />
          </a>
          <a href='https://github.com/anniebjurman'
            target="_blank"
            rel="noreferrer"
          >
            <motion.img
              className='icon'
              src={"../icons/github.svg"}
              alt=""
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            />
          </a>
        </div>
      </div>
      <div className='header'>
        {/* <motion.h1
          initial={{x:-1000}}
          animate={{x: [0, 900, 0]}}
          transition={{
            duration: "2",
          }}
        >
          annie.
        </motion.h1> */}
        <h1>annie.</h1>
      </div>
      <hr></hr>
      <Filter projects={projects} setFiltered={setFiltered} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <motion.div layout className='projects'>
        <AnimatePresence>
          {filtered.map(p => {
            return <ProjectCard key={p.id} project={p} />
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Home;
