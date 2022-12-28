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
        let nav = ref.current;
        var currentScroll = window.pageYOffset;
            if (currentScroll > 0 && prevScroll <= currentScroll){
                window.setTimeout((()=>{nav.classList.remove("is-visible");
                                        nav.classList.add("is-hidden");}), 300);
            } else {
                window.setTimeout((()=>{ nav.classList.remove("is-hidden");
                                        nav.classList.add("is-visible");}), 300);
            }
        prevScroll = currentScroll;
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
                    <a href="#home">Accueil</a>
                    <a href="#about">À propos</a>
                    <a href="#projects">Portfolio</a>
                    <a href="#foot">Contact</a>
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
                        <a href="#home">Accueil</a>
                        <a href="#about">À propos</a>
                        <a href="#projects">Portfolio</a>
                        <a href="#foot">Contact</a>
                    </nav>
                </div>
               
            </section>
        </div>

    )
}