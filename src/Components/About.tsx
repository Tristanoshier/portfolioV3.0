import React from 'react'

export const About = () => {
    return (
        <div id="about" className="about">
            <section className="about-title">
                <h1 className="main-header">About</h1>
            </section>
            
            <section className="about-section">
                <p className="about-text">I'm currently a full-stack developer seeking a position in Software Development/Web Development that will challenge me and further my coding skills. I enjoy problem-solving, creative thinking, and am very adaptable to any team environment. Throughout past educational and work experiences, I have met strict project deadlines, developed unique floor plans, and have worked in many different team environments. All of these experiences have prepared me for a multitude of situations I will face on the job in the tech world.</p>
                <img className="about-img" src={require("../assets/Tristan.jpg")} alt="picture of me" />
            </section>
        </div>
    )
}
