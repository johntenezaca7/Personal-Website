import React, { Component } from 'react';

class Resume extends Component {
    render(){
        return(
            <div className="resume-layout" >
                <div className="res-skills">
                    <h3>Skills</h3>
                    <div>
                        Info
                    </div>
                </div>
                <div className="res-ed">
                    <h3>Education</h3>
                    <div> Info
                    </div>
                </div>
                <div className="res-ex">
                    <h3>Experience</h3>
                    <div> Info
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume;