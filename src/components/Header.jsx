import './sass/Header.scss'
import { useRef, useEffect } from 'react';

export default function Header(){
    const ref = useRef(null);
    var prevScroll = 0;

    useEffect(() => {
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
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
        <section id='navDesktop' ref={ref}>
            <h1> 
            <span>&#60; </span>
                Tien 
            <span> /&#62;</span>
            </h1>
            
            <nav>
                <a href="#home">Accueil</a>
                <a href="#about">À propos</a>
                <a href="#projects">Portfolio</a>
                <a href="#foot">Contact</a>
            </nav>
        </section>
    )
}