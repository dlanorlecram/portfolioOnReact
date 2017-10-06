import React, { Component } from 'react';
import {
  GalleryProjects,
  Card,
  CardContent,
  Description,
  CardTitle
} from '../project.css.js'

export default class Projects extends Component {
  componentDidMount(){
    this.screenWidth = window.screen.width

    /*
    *  Sur l'évènement resize,
    *  changer la classe 'lowerscreen' ~> 'higherscreen'
    **/

    window.addEventListener('resize', function(){
      let cards = document.querySelectorAll('.card');

      const changeClass = (oldClassName, newClassName) => {
        cards.forEach((el) => {
          if(el.classList.contains(oldClassName)){
            el.classList.replace(oldClassName, newClassName)
          }
        })
      }

      if(window.screen.width >= 767){
        changeClass('lowerscreen', 'higherscreen')
      }else{
        changeClass('higherscreen', 'lowerscreen')
      }
    })
  }

/*
*  Handle pour ajouter une classe sur la carte projet;
*  But ajouter accéder au contenu + lien vers projet.
**/

  handleCardClick(e){
    //e.stopPropagation();
    //e.currentTarget.preventDefault();

    let $el= e.currentTarget;
    const $node = document.querySelectorAll('.card');

    function addClass(classname){
      if(!($el.classList.contains(classname)) && e.target.tagName !== 'BUTTON'){
        $node.forEach(node => {
          console.log(node.classList)
          if(node.classList.contains(classname)){
            console.log('j\'nlève')
            node.classList.remove(classname)
          }
        })
        $el.classList.add(classname)
      }
    }

  /**
  *  Condition pour un Format:
  *  window.screen.width <= 767px = [ Mobile, tablet ]
  *  idem >= 768px = [Ipad, Fullwindow]
  **/

    if(window.screen.width <= 767){
      addClass('lowerscreen')
    }else{
      addClass('higherscreen')
    }

  }

  handleCloseClick(e){
    let el = e.currentTarget.closest('.card').classList.contains('lowerscreen') ? 'lowerscreen' : 'higherscreen'
    console.log(el)
    let ze = e.currentTarget.closest('.card');
    ze.classList.remove(el)
    console.log(ze.classList)
  }

  render(){

    const nodeProjects = this.props.dataProject.map( (obj, key) =>
    <Card
      key={ key }
      onClick={ (e) => this.handleCardClick(e) }
      data-cat={ obj.cat }
      className='card'>
      <h2>
        { obj.title }
        <button onClick={e => this.handleCloseClick(e)}>
          <i style={{
              verticalAlign: 'baseline',
              pointerEvents: 'none',
              paddingLeft: 1
            }}
            className='icon ion-close-round'>
          </i>
        </button>
      </h2>
      <picture>
        <img alt='name of project' src='http://via.placeholder.com/400x300/F3C880/fff'/>
      </picture>
      <Description>
        <CardTitle className='to-hide'>{ obj.title }</CardTitle>
        <div>
          { obj.tech.map((tech,key) =>
            <i key={ key } className={ 'devicon-'+tech } ></i>)
          }
        </div>
        </Description>
        <CardContent>
          The Realtime Database is a NoSQL database and as such has different optimizations and functionality compared to a relational database. The Realtime Database API is designed to only allow operations that can be executed quickly. This enables you to build a great realtime experience that can serve millions of users without compromising on responsiveness.
          <a href='#'>Voir</a>
        </CardContent>
      </Card>
    );

    return(
      <GalleryProjects className='gallery-projects'>
        { nodeProjects }
      </GalleryProjects>
    )
  }
}
