import React from 'react';
import { Picture, Titre, Subtitle } from './intro.css.js'

export default class Intro extends React.Component {

  render() {

    return(
      <div className='intro'>
        <Picture>
          <div></div>
        </Picture>
        <Titre>
          Salut, je m’appelle<br/>Ronald Marcel!
        </Titre>
        <Subtitle>
          Un développeur front-end, diplômé d’un Master I en design produit (DSAA). Vous pouvez me trouver sur <a href="aez">Linkedin</a>, <a href='aeze'>Twitter</a> et <a href='ze'>Github</a>.
        </Subtitle>
      </div>
    )
  }
}
