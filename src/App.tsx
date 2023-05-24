import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

function App() {

  useEffect(() => {
    //fetch data
  }, [])

  const projects = [
    {id: 0, title: "VB ost"},
    {id: 1, title: "VB ost2"},
    {id: 2, title: "VB ost3"},
    {id: 3, title: "VB ost4"},
    {id: 4, title: "VB ost5"},
    {id: 5, title: "VB ost2"},
    {id: 6, title: "VB ost3"},
    {id: 7, title: "VB ost4"},
    {id: 8, title: "VB ost5"}
  ]

  return (
    <div className="App">
      <div className='projects'>
        {projects.map(p => {
          return <ProjectCard key={p.id} project={p}/>
        })}

      </div>
    </div>
  );
}

export default App;
