import './Home.css';
import { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import Filter from '../components/Filter';
import { motion, AnimatePresence } from 'framer-motion';
import { FilterCategories } from '../enums'
import { IProject } from '../interfaces';
import { projects as proj } from '../constants';
import { CvIcon, DarkModeIcon, LinkedInIcon } from '../icons';
// import CvAnnieBjurman2023 from '../files/cv_annie_bjurman_2023.pdf';
import { useMediaQuery } from "react-responsive";

function Home() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [filtered, setFiltered] = useState<IProject[]>([]);
  const [activeFilter, setActiveFilter] = useState(FilterCategories.ALL);
  // const iconColor = "#000"
  const [iconColor, setIconColor] = useState<string>("#000");
  // const [isDark, setIsDark] = useState<boolean>(true);

  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
    (isSystemDark) => {
      console.log("system", isSystemDark)
      // setIsDark(isSystemDark)
      // console.log("dark?", isDark)
      isSystemDark ? setIconColor('#f4f4f4') : setIconColor('#353e5b');
    }
  );

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
          <a href={require('../files/cv_annie_bjurman_2023.pdf')}
            target="_blank"
            rel="noreferrer"
          >
            <motion.div
              className='icon, cv'
              whileHover={{ scale: 1.2 }}
            >
              {CvIcon(iconColor)}
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
