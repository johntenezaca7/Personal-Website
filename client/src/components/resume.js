import React from 'react';

const Resume = () => {
        return(
            <div className="resume-layout" >
            <h1>Resume</h1>
            <br />
              <div className="res-content">
                <div className="res-skills">
                    <h3>Skills</h3>
                    <h4>Programing</h4>
                    <div className="for-mobile">
                    <h5>Strong : <br/><span id="tab">JavaScript (ES6)</span>, HTML/CSS, Bootstrap, ReactJS, Redux, NodeJS, ExpressJS, Git, MongoDB, MySQL, Mongoose </h5>
                    <h5>Experienced : <br /> <span id="tab"> Mocha/Jest/Chai</span>,  jQuery, AWS, Socket.io, Firebase, Bookshelf, Knex, PostgresSQL </h5>
                    </div>
                    <div className="skills">
                        <ul className="lines">
                            <li className="line l--0">
                            <span className="line__label title">
                                Skill level:
                            </span>
                            </li>
                            <li className="line l--25">
                            <span className="line__label">
                                Novice
                            </span>
                            </li>
                            <li className="line l--50">
                            <span className="line__label">
                                Intermediate
                            </span>
                            </li>
                            <li className="line l--75">
                            <span className="line__label">
                                Strong
                            </span>
                            </li>
                            <li className="line l--100">
                            <span className="line__label">
                                Expert
                            </span>
                            </li>
                        </ul>
                        
                        <div className="charts">
                            <div className="chart chart--dev">
                            <span className="chart__title">Development</span>
                            <ul className="chart--horiz">
                                <li className="chart__bar" style={{'width': '85%'}}>
                                <span className="chart__label">
                                    HTML/CSS
                                </span>
                                </li>
                                <li className="chart__bar" style={{'width': '70%'}}>
                                <span className="chart__label">
                                    JavaScript
                                </span>
                                </li>
                                <li className="chart__bar" style={{'width': '70%'}}>
                                <span className="chart__label">
                                    ReactJS + Redux
                                </span>
                                </li>
                                <li className="chart__bar" style={{'width': '65%'}}>
                                <span className="chart__label">
                                    NodeJS + ExpressJS
                                </span>
                                </li>
                                <li className="chart__bar" style={{'width': '60%'}}>
                                <span className="chart__label">
                                MongoDB + Mongoose
                                </span>
                                </li>
                                <li className="chart__bar" style={{'width': '60%'}}>
                                <span className="chart__label">
                                    MySQL + Sequelize
                                </span>
                                </li>
                                <li className="chart__bar" style={{'width': '80%'}}>
                                <span className="chart__label">
                                Git + Github
                                </span>
                            </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    
                </div>
              
                <div className="res-ex">
                    <h3>Experience</h3>
    
                        <h4>Crossfire Sound Productions - Brooklyn NY  2015- 2017</h4>			     
                        <h5>Warehouse Manager</h5>
                        <h5>Methodized , repaired & prepared rental packages of high-end audio equipment.</h5>
                
                </div>
                <div className="res-ed">
                    <h3>Education</h3>
                    <div> 
                        <h4>Hack Reactor</h4> 
                        <h5>Advanced  Software Engineering Immersive </h5>
                        <h4>CUNY City college of Technology</h4>
                        <h5>Electrical Engineering AS  2015 </h5>
                    </div>
                </div>
              </div>
            </div>
        )
    }

export default Resume;