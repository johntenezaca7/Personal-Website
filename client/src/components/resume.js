import React from 'react';

const Resume = () => {
        return(
            <div className="resume-layout" >
              <div className="res-content">
                <div className="res-skills">
                    <h3>Skills</h3>
                    <h4>Programing</h4>
                    <h5>Strong : <br/><span id="tab">JavaScript (ES6)</span>, HTML/CSS, Bootstrap, ReactJS, Redux, NodeJS, ExpressJS, Git, MongoDB, MySQL, Mongoose </h5>
                    <h5>Experienced : <br /> <span id="tab"> Mocha/Jest/Chai</span>,  jQuery, AWS, Socket.io, Firebase, Bookshelf, Knex, PostgresSQL </h5>
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
                        <h5>Eletrical Engineering AS  2015 </h5>
                    </div>
                </div>
              </div>
            </div>
        )
    }

export default Resume;