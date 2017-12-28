import React, { Component } from 'react';
import Home from './components/home';
import Applications from './components/applications';
import Blog from './components/blog';
import Resume from './components/resume';
import Contact from './components/contact';


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
            <Home />
            </div>
        );
      case 'applications':
        return(
          <div>
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
      case 'contact':
        return(
          <div>
            <Contact />
          </div>
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
              <div className="picture-border"></div>
            </div>
            <div className="side-nav-tabs">
              <button className="nav-link" value="home" onClick={this.onClick}>Home</button>
              <button className="nav-link" value="applications" onClick={this.onClick}>Applications</button>
              <button className="nav-link" value="blog" onClick={this.onClick}>Blog</button>
              <button className="nav-link" value="resume" onClick={this.onClick}>Resume</button>
              <button className="nav-link" value="contact" onClick={this.onClick}>Contact</button>
            </div>
            <div className="social-media">
            </div>
          </div>
        </div>
        <div className="profile-content ">
            <div className="display-content">
              <div className="personal-state">
                <h1>John Tenezaca</h1>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                   ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                   voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                   cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
              </div>
              <div className="current-content">
                {this.renderContent()}
              </div>
              <div className="profile-footer"></div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;


  
