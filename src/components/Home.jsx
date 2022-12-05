import './sass/Home.scss'

export default function Home(){
    return(
        <section id='home'>
            <img src="./images/guyIcon.svg" alt="guyIcon" />
            <div className='contenuHome'>
                <h2>Bonjour, je suis</h2>
                <h1>Tien Tien <br></br>Truong</h1>
                <p>Développeur Web Front-end</p>
            </div>
        </section>
    )
}