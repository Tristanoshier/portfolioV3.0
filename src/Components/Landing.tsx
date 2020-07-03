import React, { useEffect } from 'react';
import { TimelineMax } from 'gsap';

export const Landing = () => {
    const slider = document.querySelector(".slider");
    const logo = document.querySelector("#logo");
    const hamburger = document.querySelector(".hamburger");
    const headline = document.querySelector(".headline");

    useEffect(() => {
        const tl = new TimelineMax();
        tl.fromTo(".hero", 1, {height: "0%"}, {height: "80%"});

    }, [])

    return (
        <div>
            <header>
                <nav>
                    <h3 id="Logo">Dream Vacation</h3>
                    <img className="hamburger" src={require('../assets/icons8-menu.svg')} alt="hamburger" />
                </nav>
                <section>
                    <div className="hero">
                        <img src={require('../assets/van.jpeg')} alt="van" />
                        <h1 className="headline">Tristan Oshier</h1>
                    </div>
                </section>
            </header>
            
            <div className="slider"></div>
            
        </div>
    )
}
