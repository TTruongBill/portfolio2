import './sass/App.scss';
import Header from './Header';
import Home from './Home';
import About from './About';
import ProjectList from './ProjectList';
import Footer from './Footer';
import { useEffect, useState, useRef} from 'react';
export default function App() {
  const [projects, setProjects] = useState([]);
 
  return (
      <div className="App">
        <Header/>
        <Home/>
        <About/>
        <ProjectList projects={projects} setProjects={setProjects} />
        <Footer/>
      </div>
  );
}