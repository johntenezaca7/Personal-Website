import React from 'react';

const Resume = () => {
        return(
            <div className="resume-layout" >
              <div className="res-content">
                <div className="res-skills">
                    <h3>Skills</h3>
                    <h4>Programing</h4>
                    <h5>Strong : <br/><span id="tab">HTML5</span>, CSS3, Javascript, React, Redux, AJAX, Passport, RESTful APIs, Node/Express, MongoDB, Mongoose, MySQL, PostgreSQL Git</h5>
                    <h5>Familiar : <br /> <span id="tab">Angular</span>,Mocha, BootStrap, JQuery,  Heroku,  AWS, Socket-io, Axios, Firebase </h5>
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
                        <h5>Advanced  Software Engineering Immersive 2017 </h5>
                        <h4>CUNY City college of Technology</h4>
                        <h5>Eletrical Engineering AS  2015 </h5>
                    </div>
                </div>
              </div>
            </div>
        )
    }

export default Resume;