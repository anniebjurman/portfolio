import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ProjectInformation from './pages/ProjectInformation';

function App() {

  return (
    <div id="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="project" element={<ProjectInformation />} />
      </Routes>
    </div>
  );
}

export default App;
