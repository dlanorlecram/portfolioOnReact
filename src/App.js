import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar from './components/navbar/index';
import Intro from './containers/Home/intro/intro';
import Project from './containers/Home/project/project';
import Footer from './components/footer/index';
import Buttons from './components/button/buttons';
import data_skill from './data/index';
import firebase from './database/database.js';
import '../node_modules/devicon-2.2/devicon.css';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.randomKey = this.randomKey.bind(this);
    this.magicNumber = this.randomKey(data_skill.length);

    this.state = {
      skill: data_skill[this.magicNumber].percent,
      projects: [],
      strCntrHome: 0,
      shouldCreateCursor: false,
      nextWriting: false
    }
  }

  componentDidMount() {

  /**
   *  Set skill when component did mount
   **/

    const database = firebase.database();
    let dbRefProject = database.ref('projects')
    dbRefProject.on("value", snapshot => {
      let projects = snapshot.val()
      console.log(projects);
      this.setState({projects})
    })

  }

  randomKey(max){
    let number= Math.floor( Math.random() * max )
    return number;
  }



  render() {

    return (
      <div>
        <Navbar/>
        <Intro/>
  {/* Container Skill */}
        <div className='container-skill'>
          <p className='text-background'>À propos</p>
          <div>
            <h2>En quelque mots…</h2>
            <p className='content-text'>Le développement web m’est devenu une passion lors de ma formation sur Wordpress en DSAA.<br/>Puis, j’ai eu l’opportunité d’intégrer la Code Académie à Rennes pour une durée de 8 mois, ce qui m’a permis d’acquérir et développer de nouvelles compétences dans les langages web et d’adopter une autre méthode de travail (SCRUM).</p>
            <div>
              <span className='skill-percent'>{this.state.skill}%</span>
              <Buttons
                magicnumber={ this.magicNumber }
                containerButton={'container-buttons'}
                defaultClass={'button-skill'}
                changeSkill={this.updateShowSkill}
                classSelected={'button-selected'}
                dataButton={data_skill}
                opt={'percent'}/>
            </div>
          </div>
        </div>
        <Project data={this.state.projects} />
        <Footer />
      </div>
    );
  }
}
App.propTypes = {
  changeSkill: PropTypes.func,
}
export default App;
