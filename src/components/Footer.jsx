import './sass/Footer.scss'

export default function Footer(){
    return(
        <div className="foot" id="foot">
            <h1>Contact</h1>
            <form action="" className='contactForm'>
                <input id="name" type="text" placeholder='Nom'/>
                <input id="email" type="email" placeholder='Email'/>
                <textarea name="content" id="content" placeholder='Message'></textarea>
                <input id="submit" type="submit" />
            </form>
        </div>
    )
}
