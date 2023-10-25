import './Home.css';
import { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import Filter from '../components/Filter';
import { motion, AnimatePresence } from 'framer-motion';
import { FilterCategories } from '../enums'
import { IProject } from '../interfaces';
import { projects as proj } from '../constants';
import { DarkModeIcon, GithubIcon, LinkedInIcon } from '../icons';

function Home() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [filtered, setFiltered] = useState<IProject[]>([]);
  const [activeFilter, setActiveFilter] = useState(FilterCategories.ALL);
  const iconColor = "#000"

  useEffect(() => {
    setThings();
  }, []);

  const setThings = () => {
    setProjects(proj);
    setFiltered(proj);
  }

  return (
    <div className="base">
      <div className='icons'>
        <div className='darkIconCont'>
          <motion.div
            className='icon'
            whileHover={{ scale: 1.2 }}
          >
            {DarkModeIcon(iconColor)}
          </motion.div>
        </div>
        <div className='iconGroup'>
          <a href='https://www.linkedin.com/in/annie-bjurman-53ba02226/'
            target="_blank"
            rel="noreferrer"
          >
            <motion.div
              className='icon'
              whileHover={{ scale: 1.2 }}
            >
              {LinkedInIcon(iconColor)}
            </motion.div>
          </a>
          <a href='https://github.com/anniebjurman'
            target="_blank"
            rel="noreferrer"
          >
            <motion.div
              className='icon'
              whileHover={{ scale: 1.2 }}
            >
              {GithubIcon(iconColor)}
            </motion.div>
          </a>
        </div>
      </div>
      <div className='header'>
        <h1>annie.</h1>
      </div>
      <hr></hr>
      <Filter projects={projects} setFiltered={setFiltered} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
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

export default Home;
