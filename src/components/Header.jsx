import './sass/Header.scss'
import { useRef, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from "@mui/icons-material/Clear";

export default function Header(){
    const ref = useRef(null);
    var prevScroll = 0;

    useEffect(() => {
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll);
    }, []);

    function onScroll(){
        if (window.innerWidth > 960){
            let nav = ref.current;
            var currentScroll = window.pageYOffset;
                if (currentScroll > 0 && prevScroll <= currentScroll){
                    window.setTimeout((()=>{nav.classList.remove("is-visible");
                                            nav.classList.add("is-hidden");}), 100);
                } else {
                    window.setTimeout((()=>{ nav.classList.remove("is-hidden");
                                            nav.classList.add("is-visible");}), 100);
                }
            prevScroll = currentScroll;
        }
    }
    
    
    return(
        <div>
            <section id='navDesktop' ref={ref}>
                <h2> 
                <span>&#60; </span>
                    Tien 
                <span> /&#62;</span>
                </h2>
                <nav>
                    <a href="#home" className="navLink">Accueil</a>
                    <a href="#about" className="navLink">À propos</a>
                    <a href="#projects" className="navLink">Portfolio</a>
                    <a href="#foot" className="navLink">Contact</a>
                </nav>
            </section>
            <section id='navMobile'>
                <h2> 
                <span>&#60; </span>
                    Tien 
                <span> /&#62;</span>
                </h2>
                <input type="checkbox" id="menu"/>
                <label htmlFor="menu"> <MenuIcon className='menuIcon' fontSize='large'></MenuIcon> </label>
                <div className='menu'>
                    <section className="top">
                        <label htmlFor="menu"><ClearIcon className='clearIcon'fontSize='large'></ClearIcon></label>
                    </section>
                    <nav>
                        <a href="#home" className="navLink">Accueil</a>
                        <a href="#about" className="navLink">À propos</a>
                        <a href="#projects" className="navLink">Portfolio</a>
                        <a href="#foot" className="navLink">Contact</a>
                    </nav>
                </div>
               
            </section>
        </div>

    )
}