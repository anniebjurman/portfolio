import './App.css';
import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import Filter from './Filter';
import { motion, AnimatePresence } from 'framer-motion';

interface IProject {
  id: string;
  title: string;
  img: string;
  filter: string[];
}

function App() {
  const proj: any[] = [
    {id: 0, title: "Trimma INSIKT", img: 'insikt.png', filter: ['design']},
    {id: 1, title: "Grona Mackan", img: 'mackan.png', filter: ['design']},
    {id: 2, title: "NASA Space app Challenge", img: 'nasa.png', filter: ['design', 'angular']},
    {id: 3, title: "Hackaton", img: 'hackaton1.png', filter: ['design']},
    {id: 4, title: "VB ost5", img: 'insikt.png', filter: ['design', 'react', 'angular']},
    {id: 5, title: "VB ost2", img: 'insikt.png', filter: ['design', 'angular']},
    {id: 6, title: "VB ost3", img: 'insikt.png', filter: ['design', 'react']},
    {id: 7, title: "VB ost4", img: 'insikt.png', filter: ['design']},
    {id: 8, title: "VB ost5", img: 'insikt.png', filter: ['angular']}
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
          <a  href='https://www.linkedin.com/in/annie-bjurman-53ba02226/'
              target="_blank"
          >
            <motion.img
              className='icon'
              src={"../icons/linkedin.svg"}
              alt=""
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            />
          </a>
          <a  href='https://github.com/anniebjurman'
              target="_blank"
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
      <Filter projects={projects} setFiltered={setFiltered} activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>
      <motion.div layout className='projects'>
        <AnimatePresence>
          {filtered.map(p => {
            return <ProjectCard key={p.id} project={p}/>
          })}
        </AnimatePresence>

      </motion.div>
    </div>
  );
}

export default App;
