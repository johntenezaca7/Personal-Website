import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons'
import Home from './components/home';
import Applications from './components/applications';
import Blog from './components/blog';
import Resume from './components/resume';
import AboutMe from './components/aboutMe';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nav: 'home'
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick(e){
    this.setState({
      nav: e.target.value
    });
  }

  renderContent(){
    switch(this.state.nav) {
      case 'home':
        return(
          <div>
            <h1>Domain Knowledge</h1>
            <br />
            <Home />
            </div>
        );
      case 'applications':
        return(
          <div >
            <h1>Applications</h1>
            <Applications />
          </div>
        );
      case 'blog':
        return(
          <div>
            <Blog />
          </div>
        );
      case 'resume':
        return(
          <div>
            <Resume />
          </div>
        );
      case 'about-me':
        return(
          <AboutMe />
        );
      default:
        return;
    }
  }

  render() {
    return (
      <div className="main-wrapper">
        <div className="side-profile">
          <div></div> 
          <div className="side-profile-content">
            <div className="profile-picture">
              <div className="picture-border">
              <img className="picture-border"src="https://firebasestorage.googleapis.com/v0/b/gigem-185b4.appspot.com/o/images%2F928e3b82-fe06-48b3-86b1-db14c255e11d.jpg?alt=media&token=8b745e9a-f3a7-40af-8bae-69a53484ec15" alt="profile" />
              </div>
              <div className="name-status">
                  <h4>John Tenezaca 
                  <p>New York City, NY</p>
                  </h4>
                  
                  <h5>Full Stack Javascript Software Engineer </h5>
              </div>
            </div>
            <div className="personal-state">
                <div className="personal-mes">
                  <p>
                    Hello! My name is John and I am a <span className="highlight">Full Stack Javascript Engineer!</span> I
                     have a passion for building intuitive, interactive and invaluable web applications. <br/>
                    Technologies that I have used are but not limited to :
                            <ul>
                              <li><span className="highlight">MongoDB/MySQL</span></li>
                              <li><span className="highlight">Node.js/Express</span></li>
                              <li><span className="highlight">React</span></li>
                            </ul>
                
                    Contact me at: <span className="highlight">johntenezaca7@gmail.com</span>


                  </p>
                  </div>
              </div>
              <div className="social-media-icons">
                <SocialIcon network="linkedin" url="https://linkedin.com/in/jtenez" color="white" style={{ height: 30, width: 30 }} className="social-media" />
                <SocialIcon network="github"  url=" https://github.com/johntenezaca7" color="white" style={{ height: 30, width: 30 }}   className="social-media"/>
                {/* <SocialIcon network="medium" color="white" style={{ height: 30, width: 30 }}   className="social-media"/> */}
                <SocialIcon network="google"  url=" https://plus.google.com/u/0/102071269308724801257" color="white" style={{ height: 30, width: 30 }}   className="social-media"/>
                <SocialIcon network="twitter" url="https://twitter.com/john_tenezaca" color="white" style={{ height: 30, width: 30 }}   className="social-media"/>             
              </div>   
          </div>
        </div>
        <div className="profile-content ">
            <div className="display-content">
              <div className="content-nav">
                <button className="nav-link" value="home" onClick={this.onClick}>Home</button>
                <button className="nav-link" value="about-me" onClick={this.onClick}>About Me</button>
                <button className="nav-link" value="resume" onClick={this.onClick}>Resume</button>
                {/* <button className="nav-link" value="blog" onClick={this.onClick}>Blog</button> */}
                <button className="nav-link" value="applications" onClick={this.onClick}>Applications</button>               
              </div>
              <div className="current-content">
                {this.renderContent()}
              </div>``
            </div>
        </div>
      </div>
    );
  }
}

export default App;


  
