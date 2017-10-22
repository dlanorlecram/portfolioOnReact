import React, { Component } from 'react';
import Buttons from '../../../components/button/buttons';
import dataSkill from './../../../data/index';
import PropTypes from 'prop-types';
import {
  ContainerAbout,
  BackgroundTitle,
  ContentAbout,
  ControlSkill,
  SkillContainer,
} from './about.css';

export const changeSkill = () => {
  return 2+2
}

export default class About extends Component{
  constructor(props) {
    super(props);
    this.state = {
      skill: dataSkill[this.props.magicNumber].percent
    }
  }

  componentDidMount(){

    const dataPercentEnable = 'percentenable'

    function RemoveClassName(selector){
      const target = document.querySelector('#limit-scroll')
      const to = target.offsetTop + target.offsetParent.offsetTop/2 - 69
      const from = window.pageYOffset || document.documentElement.scrollTop
      console.log(from+'  :  '+ to)
      console.log(to - from)
      const tagNode = document.querySelectorAll(selector)
      tagNode.forEach((el, index) => {
        if( el.dataset[dataPercentEnable] && from >= to){
          el.classList.remove('disable')
          el.dataset[dataPercentEnable]=true
          console.log(el.dataset[dataPercentEnable])
        }
      })
    }

    window.addEventListener('scroll',function(){
      RemoveClassName(`div[data-${dataPercentEnable}]`)
    },false)
  }

  updateShowSkill(newSkill) {
    let newRestSkill = Math.abs(Number(this.state.skill - newSkill));
    let currentSkill = Number(this.state.skill);

    function timerUpdate() {
      if(currentSkill < newSkill){
        if(newRestSkill <= 0){
          clearInterval(timerUpdate);
        } else {
          currentSkill++;
          this.setState({skill: currentSkill});
          newRestSkill--;
        }
      } else {
        if(newRestSkill <= 0) {
          clearInterval(timerUpdate);
        } else {
          currentSkill--;
          this.setState({skill: currentSkill});
          newRestSkill--;
        }
      }
    }
    setInterval(timerUpdate.bind(this), 50);
  }

  render() {

    const ListItemSkill = this.props.dataSkill.map((item, key) =>
        <li key={key}>
          <p>{item.name}</p>
          <div>
            <div style={{width: `${item.percent}%`}} data-percentEnable={false} className='disable'></div>
            <div className='jauge-end' style={{width: 1, position: 'relative'}}></div>
          </div>
        </li>
    )
    console.log(ListItemSkill)

    return(
      <ContainerAbout id='about' className="element">
        <BackgroundTitle>À propos</BackgroundTitle>
        <ContentAbout>
          <h2>En quelque mots…</h2>
          <p>Le développement web m’est devenu une passion lors de ma formation sur Wordpress en DSAA.<br/>Puis, j’ai eu l’opportunité d’intégrer la Code Académie à Rennes pour une durée de 8 mois, ce qui m’a permis d’acquérir et développer de nouvelles compétences dans les langages web et d’adopter une autre méthode de travail (SCRUM).
          </p>
          <ControlSkill style={{display: 'none'}}>
            <span>{this.state.skill}%</span>
            {<Buttons
              magicnumber={ this.props.magicNumber }
              containerButton={'container-buttons'}
              defaultClass={'button-skill'}
              changeSkill={(e) => this.updateShowSkill(e)}
              classSelected={'button-selected'}
              dataButton={this.props.dataSkill}
              opt={'percent'}
            />}
          </ControlSkill>
          <SkillContainer >
            <h3 id='limit-scroll'>
              Mes compétences
            </h3>
            <ul>
              {ListItemSkill}
            </ul>
          </SkillContainer>
        </ContentAbout>
      </ContainerAbout>
    );
  }
}

/**
 *   Generate a magic number for random skill to shown
 **/

const randomKey = function(max){
  let number= Math.floor( Math.random() * max )
  return number;
}

/**
 *   Define DefaultProps
 **/

About.defaultProps = {
  dataSkill,
  magicNumber: randomKey(dataSkill.length)
}

/**
 *   PropType
 **/

About.propTypes = {
  dataSkill: PropTypes.arrayOf(PropTypes.object),
  magicNumber: PropTypes.number.isRequired
}
