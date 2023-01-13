import './sass/Home.scss'

export default function Home(){
    return(
        <section id='home'>
            <img src="./images/tienIcon.svg" alt="guyIcon" />
            <div className='contenuHome'>
                <h1>Bonjour, je suis</h1>
                <h2>Tien Tien Truong</h2>
                <p>Développeur Web Front-end</p>
            </div>
        </section>
    )
}