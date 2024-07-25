import './Home.css';
import { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import Filter from '../components/Filter';
import { motion, AnimatePresence } from 'framer-motion';
import { FilterCategories } from '../enums'
import { IProject } from '../interfaces';
import { projects as proj } from '../constants';
import { CvIcon, LinkedInIcon } from '../icons';
// import CvAnnieBjurman2023 from '../files/cv_annie_bjurman_2023.pdf';
// import { useMediaQuery } from "react-responsive";
import { DarkModeToggle } from '../components/DarkModeToggle';
import { useColorScheme } from '../components/useColorScheme';
// import { useMediaPredicate } from "react-media-hook";

function Home() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [filtered, setFiltered] = useState<IProject[]>([]);
  const [activeFilter, setActiveFilter] = useState(FilterCategories.ALL);
  const [iconColor, setIconColor] = useState<string>("#000");
  const { isDark, setIsDark } = useColorScheme();

  useEffect(() => {
    setThings();
  }, [isDark]);

  const setThings = () => {
    setProjects(proj);
    setFiltered(proj);

    isDark ? setIconColor('#FFFBF5') : setIconColor('#1c1c1c');

  }

  // function initLocalColorScheme() {
  //   const dark = localStorage.getItem('colorScheme');
  //   dark == undefined ? : ;
  //   setIsDark(isD)
  // }

  return (
    <div className="base">
      <div className='header'>
        <h1>ab.</h1>
        <div className='icons'>
          {/* <div className='iconGroup'> */}
          <a href='https://www.linkedin.com/in/annie-bjurman-53ba02226/'
            target="_blank"
            rel="noreferrer"
            className='a_icon'
          >
            <motion.div
              className='icon'
              whileHover={{ scale: 1.1 }}
            >
              {/* {LinkedInIcon(iconColor)} */}
              <h3>linkedIn</h3>
            </motion.div>
          </a>
          <a href={require('../files/cv_annie_bjurman_2024.pdf')}
            target="_blank"
            rel="noreferrer"
            className='a_icon'
          >
            <motion.div
              className='icon'
              whileHover={{ scale: 1.2 }}
            >
              {/* {CvIcon(iconColor)} */}
              <h3>cv</h3>
            </motion.div>
          </a>
          {/* </div> */}
          {/* <DarkModeToggle/> */}
          <a className='a_icon'>
            <motion.div
              className='icon'
              whileHover={{ scale: 1.1 }}
              onClick={() => {
                setIsDark(!isDark)
                console.log("dark", isDark)
              }}
            >
              {isDark ? <h3>light mode</h3> : <h3>dark mode</h3>}
            </motion.div>
          </a>
        </div>
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
      <footer></footer>
    </div>
  );
}

export default Home;
