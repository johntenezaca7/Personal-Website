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
                            {/* <p> We leveraged </p> */}
                        </div>

                    </div>
                    <div className="moovi">
                    <div className="app-image"> </div>
                        <div>
                            {/* <h1>YourM</h1> */}
                           
                        </div>
                    </div>
                   
                </div>
            </div>
        )
    }

export default Applications;
