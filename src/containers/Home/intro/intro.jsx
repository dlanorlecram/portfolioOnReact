import React from 'react';
//import Element from './../../../components/helpers/helpers'
import { Picture, Title, Subtitle, ContainerIntro} from './intro.css.js'
import dataSvg from './src/clouds.svg'

export default class Intro extends React.Component {

  render() {
    const linkedin= 'https://www.linkedin.com/in/ronaldmarcel/';
    const github= 'https://github.com/dlanorlecram/';
    const twitter= 'https://twitter.com/Ronald_Marcel_';
    const myBackground = {
      //backgroundColor: '#ffffff',
      backgroundSize: '18px',
      backgroundImage: `url(${dataSvg})`
    }

    return(
      <ContainerIntro id='intro' className='element' style={myBackground}>
        <Picture>
          <div></div>
        </Picture>
        <Title>
          Salut, je m’appelle<br/>Ronald Marcel!
        </Title>
        <Subtitle>
          Développeur front-end, diplômé d’un Master I en design produit (DSAA). Vous pouvez me trouver sur <a href={ linkedin } target='_blanc'>Linkedin</a>, <a href={ twitter } target='_blanc'>Twitter</a> et <a href={ github } target='_blanc'>Github</a>.
        </Subtitle>
      </ContainerIntro>
    )
  }
}
