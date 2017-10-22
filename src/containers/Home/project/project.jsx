import React from 'react';
import Projects from './project/index';
import Buttons from '../../../components/button/buttons';
import {
  FilterBlock,
  ContainerProject
} from './project.css.js';

export default class Project extends React.Component {

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
      <ContainerProject id='project' className='element'>
        <FilterBlock>
          <p>
            Filtre:
          </p>
          <Buttons
            e= "ddd"
            containerButton={'filters'}
            defaultClass={'button-filter'}
            changeSkill={(e) => this.updateShowSkill(e)}
            classSelected={'filter-selected'}
            dataButton={['Tout','Website','Design']}
            opt={''}/>
        </FilterBlock>
        <Projects dataProject={this.props.data} />
      </ContainerProject>
    )
  }
}
