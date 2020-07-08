import React from 'react'

export const Skills = () => {
    return (
        <div id="skills" className="skills">
            <section className="about-title">
                <h1 className="main-header">Skills</h1>
            </section>
    
            <table className="skill-table">
                <tr className="skill-header">
                    <th className="skill-header-item">- Languages -</th>
                    <th className="skill-header-item">- Frameworks -</th>
                    <th className="skill-header-item">- Backend -</th>
                    <th className="skill-header-item">- Tools -</th>
                </tr>
                <tr className="skill-row">
                    <td className="skill-item">JavaScript/TypeScript</td>
                    <td className="skill-item">React</td>
                    <td className="skill-item">Node.js</td>
                    <td className="skill-item">Git/GitHub</td>
                </tr>
                <tr className="skill-row">
                    <td className="skill-item">C#</td>
                    <td className="skill-item">Express</td>
                    <td className="skill-item">PostgreSQL</td>
                    <td className="skill-item">Postman</td>
                </tr>
                <tr className="skill-row">
                    <td className="skill-item">HTML</td>
                    <td className="skill-item">.NET Core & Framework</td>
                    <td className="skill-item">Heroku</td>                
                </tr>
                <tr className="skill-row">
                    <td className="skill-item">CSS</td>
                    <td></td>
                    <td className="skill-item">Firebase</td>
                </tr>
                <tr className="skill-row">
                    <td></td>
                    <td></td>
                    <td className="skill-item">SQL</td>
                    <td></td>
                </tr>
            </table>
        </div>
    )
}
