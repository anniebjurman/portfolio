import './Home.css';
import { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import Filter from '../components/Filter';
import { motion, AnimatePresence } from 'framer-motion';

interface IProject {
  id: string;
  title: string;
  img: string;
  filter: string[];
}

function Home() {
  const proj: any[] = [
    { id: 0, title: "Trimma INSIKT", img: 'insikt.png', filter: ['design'], color: "#8DC2E9" },
    { id: 1, title: "Grona Mackan", img: 'mackan2.png', filter: ['design'], color: "#B9DA98" },
    { id: 2, title: "NASA Space app Challenge", img: 'nasa.png', filter: ['design', 'angular'], color: "#CD93B0" },
    { id: 3, title: "Hackon", img: 'hackaton1.png', filter: ['design'], color: "#8fdba9" },
    { id: 4, title: "Mind Mentor", img: 'mindMentor.png', filter: ['design', 'reactNative'], color: "#B5B8FA" },
    { id: 7, title: "The Maze Game", img: 'maze2.png', filter: ['computerGraphics'], color: "#8DC2E9" },
    { id: 5, title: "Vasterbottensost", img: 'vb.png', filter: ['design'], color: "#E97C7C" },
    { id: 6, title: "OpenGL animation", img: 'animation1.png', filter: ['computerGraphics'], color: "#FACA85" },
    { id: 8, title: "titel", img: 'placeholder.png', filter: ['angular', 'design', 'react'], color: "#B9DA98" }
  ]

  const [projects, setProjects] = useState<IProject[]>([]);
  const [filtered, setFiltered] = useState<IProject[]>([]);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    setThings();
  }, []);

  const setThings = () => {
    setProjects(proj);
    setFiltered(proj);
  }

  return (
    <div className="App">
      {/* <ShowProjectInformation /> */}
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
