import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare, faFile } from '@fortawesome/free-solid-svg-icons'

export const Contact = () => {
    return (
        <div id="contact" className="contact">
             <section className="about-title">
                <h1 className="main-header">Contact</h1>
            </section>
            <ul className="contact-layout">
                <li className="contact-item"><a className="contact-link" href="https://www.linkedin.com/in/tristan-oshier-678420196/" target="_linkedin" ><div className="contact-content"><FontAwesomeIcon icon={faLinkedin} size="4x"></FontAwesomeIcon><p>LinkedIn</p></div></a></li>
                <li className="contact-item"><a className="contact-link" href="mailto:tristan.oshier2000@gmail.com" ><div className="contact-content"><FontAwesomeIcon icon={faEnvelopeSquare} size="4x"></FontAwesomeIcon><p>Email</p></div></a></li>
                <li className="contact-item"><a className="contact-link" href={require("../assets/Tristan Oshier's Resume.pdf")} download><div className="contact-content"><FontAwesomeIcon icon={faFile} size="4x"></FontAwesomeIcon><p>Resume</p></div></a></li>
            </ul>
        </div>
    )
}
