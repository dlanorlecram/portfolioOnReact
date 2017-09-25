import React, { Component } from 'react';
import Navbar from './components/navbar/index';
import Footer from './components/footer/index';
import Buttons from './components/button/buttons';
import Projects from './components/project/index';
import data_skill from './data/index';
//import writer from './utils';
import firebase from './database/database.js';
import '../node_modules/devicon-2.2/devicon.css';
import './App.css';

const str_subtitle = 'Un développeur front-end, diplômé d’un Master I en design produit (DSAA). Vous pouvez me trouver sur Linkedin, Twitter et Github.'
const str_presentation = 'Salut, je m’appelle\nRonald Marcel!';

class App extends Component {
  constructor(props){
    super(props);

    this.updateShowSkill = this.updateShowSkill.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.randomKey = this.randomKey.bind(this);
    this.magicNumber = this.randomKey(data_skill.length);
    this.state = {
      presentation: '',
      subtitle: str_subtitle,
      skill: data_skill[this.magicNumber].percent,
      projects: [],
      counter: 0
    }
  }
  static defaultProps = {
    magicnumbers:this.magicNumber
  }
  componentDidMount() {
  /**
   *  Set skill when component did mount
   **/

    // const buttonSelected = document.querySelector('.button-selected');
    // const nodeDataSkill = Number(buttonSelected.dataset.percent);
    // this.setState({skill: nodeDataSkill})

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

  /**
   *  Launch Writer
   **/
    this.counter = 0;

    setTimeout(() => {
      this.timerWriter = setInterval(() => this.sayHello(str_presentation,'presentation'), 120)
    },2000)


  }

  componentWillMount(){


  }

  componentWillUpdate(nextProps, nextState) {

  }

  writerHandle($node, $string, timing, callback){
    const str = $string;
    let counter = 0;
    const node = document.querySelector($node);
    // console.log(node);
  }

  sayHello($string, statename){
    // this.setState((prevState,props) => ({
    //   counter: prevState.counter+1}))
    console.log('valeur de counter: '+this.counter)
    console.log($string.length-1)
    if(this.counter > $string.length-1 ){
      clearInterval(this.timerWriter)
    }else{
      this.setState((prevState, props) =>({
        presentation: prevState[statename]+$string[this.counter]
      }))
      console.log(this.counter +'est inférieur à 5')
    }

    this.counter++
  }

  randomKey(max){
    let number= Math.floor(Math.random() * max)
    return number;
  }

  /**
   *  Handle
   **/

  updateShowSkill(newSkill){
    let newRestSkill = Math.abs(Number(this.state.skill - newSkill));
    let currentSkill = Number(this.state.skill);

    function timerUpdate(){
      if(currentSkill < newSkill){
        if(newRestSkill <= 0){
          clearInterval(timerUpdate);
        }else{
          currentSkill++;
          this.setState({skill: currentSkill});
          newRestSkill--
        }
      }else{
        if(newRestSkill <= 0){
          clearInterval(timerUpdate);
        }else{
          currentSkill--
          this.setState({skill: currentSkill})
          newRestSkill--
        }
      }
    }
    setInterval(timerUpdate.bind(this), 50);
  }

  render() {
    // const varnumber = this.randomKey(data_skill.length);
    // console.log(varnumber)
    return (
      <div>
        <Navbar/>
        <div className='intro'>
          <div className='picture-wrapper'>
            <div className='inner'></div>
          </div>
          <h1 className='presentation-header'>
            {this.state.presentation}
            <span className='cursor'>_</span>
          </h1>
          <p className='subtitle-header'>
            {this.state.subtitle}
            <span className='cursor'>_</span>
          </p>
        </div>
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
  {/* Container projects */}
        <div className='container-project'>
          <div className='filter-bloc'>
            <p>
              Filtre:
            </p>
            <Buttons
              containerButton={'filters'}
              defaultClass={'button-filter'}
              changeSkill={this.updateShowSkill}
              classSelected={'filter-selected'}
              dataButton={['Tout','Website','Design']}
              opt={''}/>
          </div>
          <Projects dataProject={ this.state.projects } />
        </div>
  {/* Container footer */}
        <Footer />
      </div>
    );
  }
}
// App.defaultProps = {
//   magicnumbers: App.magicNumber
// }
export default App;
