import React from 'react';

const AboutMe = () => {
    
        return(
            <div className="about-me-content">
            <p className="tech-nar">
                <span id="tab">Alongside</span> my passion for creativity, I’ve also had an inclination towards figuring out how things worked behind the scenes.
                It was this coursity that drove me towards building my own instruments, repairing audio equipment and now building software.
                At my core, I am a full-stack software engineer who specializes in building web software.<br />
                <span id="tab">I’ve</span> built applications individually backed by both SQL and NoSQL databases coupled with intricate schema design and the implementation of popular ORMs like Sequelize, Knex and Bookshelf.
                I’ve also worked with a handful of server-side tools, most prominently NodeJS coupled with ExpressJS. When I do venture into the front-end world, my favored framework is ReactJS, although 
                I’ve experience with a variety of other frameworks including Angular and Backbone. Lastly, I’ve successfully deployed a handful of production applications on a variety of different platforms from AWS to Heroku.<br />
                <span id="tab">Given</span> my experiences with these technologies, I believe I can effectively contribute on a team of passionate engineers that share my perfectionist work ethic and a drive for building intuitive
                software that impacts its users.
                <br />
                <br />
                Contact me at:  <span className="contact">john.tenezaca7@gmail.com</span>
             </p>
                <br />
               
         </div>
        )
}

export default AboutMe;