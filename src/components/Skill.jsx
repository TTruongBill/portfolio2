import './sass/Skill.scss'

export default function Skill({nameTitle, nameImg, nameCSS}){
    return(
        <section className='skillType'>
        <div className='skillName'>
            <h1>{nameTitle}</h1>
            <img src={"./images/" + nameImg + ".svg"} alt={nameImg + "Icon"} id={nameCSS + "Icon"}/>
        </div>
        <div className='skillSize'>
            <div className="skillContainer">
                <div id={nameCSS + "lvl"}></div>
            </div>
        </div>
        </section>
    )
}
