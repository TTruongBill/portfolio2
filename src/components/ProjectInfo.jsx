import './sass/ProjectInfo.scss';
import ClearIcon from "@mui/icons-material/Clear";

export default function ProjectInfo({title, img, imgName, link, content, date, setBoxActive, boxActive}){

    return(
        <section className={"box" + (boxActive ? " active " : "")} >
            <ClearIcon id="closeBox" className='clearIcon' fontSize='large' onClick={()=>{if(boxActive == true){setBoxActive(false)}}}></ClearIcon>
            <h2>{title}</h2>
            <img src={"./images/" + img + ".jpg"} alt="" />
            <p dangerouslySetInnerHTML={{__html:content}}></p>
            <p>Lien vers le projet : <a href={link}>{link}</a></p>
            <p>Date de production : {date}</p>
        </section>
    )
}