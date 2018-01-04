import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons'
import Applications from './components/applications';
import Resume from './components/resume';
import AboutMe from './components/aboutMe';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nav: 'resume'
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
    
      case 'applications':
        return(
          <div >
            <h1>Applications</h1>
            <br />
            <Applications />
          </div>
        );
      case 'resume':
        return(
          <div>
            <Resume />
          </div>
        );

      default:
        return;
    }
  }

  /*


              <div className="social-media-icons">
                <SocialIcon network="linkedin" url="https://linkedin.com/in/jtenez" color="white" style={{ height: 45, width: 45 }} className="social-media" />
                <SocialIcon network="github"  url=" https://github.com/johntenezaca7" color="white" style={{ height: 45, width: 45 }}   className="social-media"/>
                 <SocialIcon network="medium" color="white" style={{ height: 30, width: 30 }}   className="social-media"/> 
                <SocialIcon network="google"  url=" https://plus.google.com/u/0/102071269308724801257" color="white" style={{ height: 45, width: 45 }}   className="social-media"/>
                <SocialIcon network="twitter" url="https://twitter.com/john_tenezaca" color="white" style={{ height: 45, width: 45 }}   className="social-media"/>             
              </div>  
  */

  render() {
    return (
      <div className="main-wrapper">
        <div className="landing">
           <span className="profile">
              <div className="name-status">
                  <h4>John Tenezaca 
                  <p>New York City, NY</p>
                  </h4>
                  <h5>Full Stack Software Engineer </h5>
                  <div className="img-holder">
                    <span></span>
                    <div className="pic-border">
                      <img className="picture"src="https://firebasestorage.googleapis.com/v0/b/gigem-185b4.appspot.com/o/images%2F928e3b82-fe06-48b3-86b1-db14c255e11d.jpg?alt=media&token=8b745e9a-f3a7-40af-8bae-69a53484ec15" alt="profile" />
                    </div>
                    <span></span>
                  </div>
                  <div className="social-media">
                    <SocialIcon network="linkedin" url="https://linkedin.com/in/jtenez" color="white" style={{ height: 45, width: 45 }} className="social-media-icon" />
                    <SocialIcon network="github"  url=" https://github.com/johntenezaca7" color="white" style={{ height: 45, width: 45 }}   className="social-media-icon"/>
                    <SocialIcon network="google"  url=" https://plus.google.com/u/0/102071269308724801257" color="white" style={{ height: 45, width: 45 }}   className="social-media-icon"/>
                    <SocialIcon network="twitter" url="https://twitter.com/john_tenezaca" color="white" style={{ height: 45, width: 45 }}   className="social-media-icon"/>             
                   </div>  
              </div>
          </span>
        </div>
        <div className="between">
        <div className="display-content">
              <div className="content-nav">
                <button className="nav-link" value="resume" onClick={this.onClick}>Resume</button>
                <button className="nav-link" value="applications" onClick={this.onClick}>Applications</button>               
              </div>
              <div className="current-content">
                {this.renderContent()}
              </div>``
            </div>
          </div>
        <div className="profile-content ">
          <div className="about-me">
          <h1>About Me</h1>
            <br />
            <AboutMe /> 
           </div>
        </div>
      </div>
    );
  }
}

export default App;


  
