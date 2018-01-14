import React from 'react';

const Resume = () => {
        return(
            <div className="resume-layout" >
            <h1>Resume</h1>
            <br />
              <div className="res-content">
                <div className="res-skills">
                    <h2>Skills</h2>
                    <h3>Programing</h3>
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
                <div className="res-ex-ed">
                    <div className="res-ex">
                        <h2>Experience</h2>
                            <h3>Crossfire Sound Productions <br /> Brooklyn NY  2015- 2017<br />		     
                            <h4>Audio Technician/ Warehouse Manager</h4></h3>                             
                                <h5>On-site production setups and teardowns.<br />
                                Quality testing and repairing of pro-audio equipment.<br />
                                Methodized and prepared rental packages of high-end audio equipment.</h5>

                    
                    </div>
                    <div className="res-ed">
                        <h2>Education</h2>
                        <div> 
                            <h3>CUNY City college of Technology</h3>
                            <h5>Electrical Engineering AS  2015 </h5>
                            <h3>Hack Reactor</h3> 
                            <h5>Advanced  Software Engineering Immersive </h5>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        )
    }

export default Resume;