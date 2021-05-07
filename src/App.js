import React, { Component } from 'react';
import Navbar from './components/navbar/index';
import Intro from './containers/Home/intro/intro';
import About from './containers/Home/about/about';
import Project from './containers/Home/project/project';
import Footer from './components/footer/index';
import firebase from './database/database.js';
import '../node_modules/devicon-2.2/devicon.css';
//import './App.css';

class App extends Component {
  state = { projects: [] }


  componentDidMount() {

  /**
   *  Set skill when component did mount
   **/
    const database = firebase.database();
    let dbRefProject = database.ref('projects')
    dbRefProject.on("value", snapshot => {
      let projects = snapshot.val()
      this.setState({projects})
    })

  }


  render() {

    return (
      <div>
        <Navbar/>
        <Intro/>
        <About/>
        <Project data={this.state.projects} />
        <Footer />
      </div>
    );
  }
}

export default App;
