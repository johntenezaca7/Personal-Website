import React from 'react';

const Applications = () => {
        return(
            <div>
               <div className="app-list">
                    <div className="gigem"> 
                        <div className="gif-el">
                         <img src="https://media.giphy.com/media/l49JKZe1X617RcvpC/giphy.gif" alt="gigem-gif" />
                        </div>
                        <div className="app-text">
                            <h3>Gig-em</h3>
                            <h5>A platform which allows fans to crowd-source local shows for their local artists</h5>
                            <h4>Tech Stack: <br/> React, Redux, WebPack, Node/Express, MySQL/Sequelize, Firebase </h4>
                            <p> -Set up development/production environments for effective testing and staging.<br />
                                -Designed frontend using Balsamiq, Bootstrap, React, and Redux.<br />
                                -Crafted API, SQL schema, and data storage framework to store data for both users and bands.<br />
                            </p>
                        </div>

                    </div>
                    <div className="brev">
                        <div className="gif-el"> 
                        <img src="https://media.giphy.com/media/3oFzmnuZejJf1EWOGY/200w_d.gif" alt="gigem-gif" />
                        </div>
                        <div className="app-text">
                            <h3>Brevity</h3>
                            <h5>Gamified algorithmic interview question training application.</h5>
                            <h4>Tech Stack: <br/> React, Node/Express, MongoDB/Mongoose </h4>
                            <p>-Wireframed system architecture to help manage complexity.<br />
                               -Created a responsive SPA experience using React, Materialize, and CSS.<br />
                               -Data-checking endpoint integration utilizing Axios, Node/Express, and Mongo.
                            </p>
                        </div>
                    </div>
                    <div className="your-m">
                        <div className="gif-el">
                        <img src="https://media.giphy.com/media/3o75218yIhlZQyf888/200w_d.gif" alt="gigem-gif" />                    
                        </div>
                        <div className="app-text">
                            <h3>YourMeteorologist</h3>
                            <h5>Instant Atmospheric Data  aggregator based on cities.</h5>
                            <h4>Tech Stack: <br/> React, Redux, Node/Express, MongoDB/Mongoose </h4>
                            <p>-Implemented React-Sparklines to display data from API.<br />
                                -Created Passport oAuth to retrieve previous queries for user.<br />     
                                -Updates previous query daily using React’ Lifecycle methods. 
                            </p>
                           
                        </div>
                    </div>
                   
                </div>
            </div>
        )
    }

export default Applications;
