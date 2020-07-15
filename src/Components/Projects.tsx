import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog, faSpaceShuttle, faRecordVinyl } from '@fortawesome/free-solid-svg-icons';

export const Projects = () => {
    return (
        <div id="projects" className="projects">
            <section className="about-title">
                <h1 className="main-header">Projects</h1>
            </section>
            <div className="project-section">
                <div className="app-layout">
                    <a href="https://tat-petpals-client.herokuapp.com/" target="_blank">
                        <div className="pet-app">
                            <FontAwesomeIcon className="pet-app-icon" icon={faDog} size="4x"></FontAwesomeIcon>
                        </div>
                    </a>
                    <p className="app-name">PetPals</p>
                </div>
                <div className="app-layout">
                    <a href="https://solarsystemvisualizer-75b91.firebaseapp.com/" target="_blank">
                        <div className="solar-app">
                            <FontAwesomeIcon className="solar-app-icon" icon={faSpaceShuttle} size="3x"></FontAwesomeIcon>
                        </div>
                    </a>
                    <p className="app-name">Solar System Visualizer</p>
                </div>
                <div className="app-layout">
                    <a href="https://to-myrecords-client.herokuapp.com/" target="_blank">
                        <div className="record-app">
                            <FontAwesomeIcon className="record-app-icon" icon={faRecordVinyl} size="4x"></FontAwesomeIcon>
                        </div>
                    </a>
                    <p className="app-name">MyRecords</p>
                </div>
            </div>
        </div>
    )
}
