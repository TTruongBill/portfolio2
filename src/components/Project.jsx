import './sass/Project.scss';
import { useState } from 'react';
import ProjectInfo from './ProjectInfo';

export default function Project({title, img, imgName, link, content, date}){

    const [boxActive, setBoxActive] = useState(false);

    return(
        <div>
            <section className='project' onClick={()=>{if(boxActive == false){setBoxActive(true)}}}>
                <img src={"./images/" + img + ".jpg"} alt="" />
                <section className="projectText">
                    <h1>{title}</h1>
                </section>
            </section>
            <ProjectInfo title={title} img={img} imgName={imgName} link={link} content={content} date={date} setBoxActive={setBoxActive} boxActive={boxActive}></ProjectInfo>
        </div>
       
    )
}