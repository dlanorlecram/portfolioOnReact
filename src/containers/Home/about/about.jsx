import React, { Component } from 'react';
import Buttons from '../../../components/button/buttons';
import dataSkill from './../../../data/index';
import PropTypes from 'prop-types';
import {
  ContainerAbout,
  BackgroundTitle,
  ContentAbout,
  ControlSkill,
} from './about.css';

export default class About extends Component{
  constructor(props) {
    super(props);
    this.state = {
      skill:dataSkill[this.props.magicNumber].percent
    }
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

    return(
      <ContainerAbout id='a-propos'>
        <BackgroundTitle>À propos</BackgroundTitle>
        <ContentAbout>
          <h2>En quelque mots…</h2>
          <p>Le développement web m’est devenu une passion lors de ma formation sur Wordpress en DSAA.<br/>Puis, j’ai eu l’opportunité d’intégrer la Code Académie à Rennes pour une durée de 8 mois, ce qui m’a permis d’acquérir et développer de nouvelles compétences dans les langages web et d’adopter une autre méthode de travail (SCRUM).
          </p>
          <ControlSkill>
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
