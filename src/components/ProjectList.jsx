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
            <h2>Projets</h2>
            <h1>Mes Récents Travaux</h1>
            <p>Au cours de mes trois dernières années dans le monde du Web, voici les projets les plus récent que j'ai réalisé.</p>
            <div className='projectList'>
                {
                    projects.map(project => <Project key={project.id} {...project} />)
                }
            </div>
        </section>
        
    )
}