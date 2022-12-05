import { useEffect} from 'react';
import './sass/ProjectList.scss';
import * as port from "../firebase/portfolio"
import Project from '../components/Project';

export default function ProjectList({projects, setProjects}){
    
    /*useEffect(
        () => port.lireTout().then(
            theProjets => setProjects(theProjets)
        ), [setProjects]
    );*/

    return(
        <section id='projects'>
            <h1>Projets</h1>
            <div className='projectList'>
                {
                    projects.map(project => <Project key={project.id} {...project} />)
                }
            </div>
        </section>
        
    )
}