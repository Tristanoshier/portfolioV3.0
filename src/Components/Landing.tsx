import React, { useEffect } from 'react';
import { TimelineMax } from 'gsap';

export const Landing = () => {

    useEffect(() => {
        const tl = new TimelineMax();
        tl.fromTo(".hero", 1, {height: "0%"}, {height: "80%"})
        .fromTo(".hero", 1.2, {width: "100%"}, {width: "80%"})
        .fromTo(".slider", 1.2, {x: "-100%"}, {x: "0%"}, "-=1.2") //the -=1.2 tells this animation to happen at the same time as the line above, for a smoother transition
        .fromTo("#logo", 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
        .fromTo(".nav-items", 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
        .fromTo(".headline", 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
        .fromTo(".sub-headline", 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
    }, [])

    return (
        <div>
            <header>
                <nav>
                    <h3 id="logo"><a className="nav-link" href="#">TO</a></h3>
                    <div className="nav-items">
                        <li className="nav-item"><a className="nav-link" href="#about">about</a></li>
                        <li className="nav-item"><a className="nav-link" href="#skills">skills</a></li>
                        <li className="nav-item"><a className="nav-link" href="#projects">projects</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">contact</a></li>     
                    </div>
                    {/* <img className="hamburger" src={require('../assets/icons8-menu.svg')} alt="hamburger" /> for mobile later */}
                </nav>
                <section className="landing-section">
                    <div className="hero">
                        <img src={require('../assets/landing.png')} alt="computer" />
                        <h1 className="headline">Tristan Oshier</h1>
                        <h4 className="sub-headline">Junior Software Engineer</h4>
                    </div>
                </section>
            </header>
            
            <div className="slider"></div>
            
        </div>
    )
}
