import './sass/About.scss'
import Skill from './Skill'

export default function About(){
    return(
        <div className="about" id="about">
            <h2>À Propos</h2>
            <h1>Qui Je Suis</h1>
            <p>En tant que finissant en multimédia, j’ai acquis des connaissances et des habiletés qui me permettent d’être efficace et organisé.</p> 
            <p> La programmation de jeux vidéos et de sites web sont mes intérêts principaux. </p>
            <p> J’apprends rapidement et je m’adapte facilement aux situations inattendues grâce à ma patience et ma débrouillardise.</p>

            <div>
                <section className="skill" id="skillLanguage">
                    <h2>LANGAGES</h2>
                    <div>
                    <Skill nameTitle="HTML" nameCSS="HTML" nameImg="html"></Skill>
                    <Skill nameTitle="CSS" nameCSS="CSS" nameImg="css"></Skill>
                    <Skill nameTitle="JavaScript" nameCSS="JS" nameImg="JS"></Skill>
                    <Skill nameTitle="C#" nameCSS="CS" nameImg="CS"></Skill>
                    <Skill nameTitle="Php" nameCSS="PHP" nameImg="php"></Skill>
                    </div>
                </section>
                <section className="skill" id="skillDesign">
                    <h2>DESIGN(ADOBE CC)</h2>
                    <div>
                        <Skill nameTitle="Photoshop" nameCSS="PS" nameImg="PS"></Skill>
                        <Skill nameTitle="Adobe Illustrator" nameCSS="AI" nameImg="AI"></Skill>
                        <Skill nameTitle="Premiere Pro" nameCSS="PR" nameImg="PR"></Skill>
                        <Skill nameTitle="After Effects" nameCSS="AE" nameImg="AE"></Skill>
                        <Skill nameTitle="Adobe XD" nameCSS="XD" nameImg="XD"></Skill>
                    </div>
                </section>
                <section className="skill" id="skillOther">
                    <h2>AUTRES</h2>
                    <div>
                        <Skill nameTitle="Github" nameCSS="GH" nameImg="git"></Skill>
                        <Skill nameTitle="ReactJS" nameCSS="React" nameImg="react"></Skill>
                        <Skill nameTitle="Unity" nameCSS="Unity" nameImg="unity"></Skill>
                    </div>
                </section>
            </div>
        </div>
    )
}



let item = {
            "yes":  [
            {
                "id": 1,
                "salute": [{
                    "hello": "hello",
                    "bye": "bye"
                }]
                }],
            "no":[
            {
                "id": 1,
                "salute": [{
                    "hello": "hello",
                    "bye": "bye"
                }]
            }]
            
            }