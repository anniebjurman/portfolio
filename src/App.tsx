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
    {id: 0, title: "VB ost", img: 'insikt.png', filter: ['design', 'react']},
    {id: 1, title: "VB ost2", img: 'insikt.png', filter: ['design']},
    {id: 2, title: "VB ost3", img: 'insikt.png', filter: ['design']},
    {id: 3, title: "VB ost4", img: 'insikt.png', filter: ['react']},
    {id: 4, title: "VB ost5", img: 'insikt.png', filter: ['design', 'react', 'angular']},
    {id: 5, title: "VB ost2", img: 'insikt.png', filter: ['design', 'angular']},
    {id: 6, title: "VB ost3", img: 'insikt.png', filter: ['design', 'react']},
    {id: 7, title: "VB ost4", img: 'insikt.png', filter: ['design']},
    {id: 8, title: "VB ost5", img: 'insikt.png', filter: ['angular']}
  ]

  const [projects, setProjects] = useState<IProject[]>([]);
  const [filtered, setFiltered] = useState<IProject[]>([]);
  const [activeFilter, setActiveFilter] = useState('');

  useEffect(() => {
    setThings();
  }, []);

  const setThings = () => {
    setProjects(proj);
    setFiltered(proj);
  }

  return (
    <div className="App">
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
