import React, { Component } from 'react';
import {
  GalleryProjects,
  Card,
  CardContent,
  Description,
  CardTitle,
  Picture,
  SubCardContent,
  BottomLink,
  BottomLinkMobile
} from '../project.css.js'

export default class Projects extends Component {
  componentDidMount(){

    /*
    *  Sur l'évènement resize,
    *  changer la classe 'lowerscreen' ~> 'higherscreen'
    **/

    window.addEventListener('resize', function(){
      let cards = document.querySelectorAll('.card');
      //console.log(cards)
      const removeClass = (oldClassName) => {
        cards.forEach((el) => {
          if(el.classList.contains(oldClassName)){
            el.classList.remove(oldClassName)
          }
        })
      }
      if(window.innerWidth >= 767){
        removeClass('lowerscreen')
      }
    })
  }

/*
*  Handle pour ajouter une classe sur la carte projet;
*  But ajouter accéder au contenu + lien vers projet.
**/

  handleCardClick(el){
    let $el= el.currentTarget.parentNode;
    const $node = document.querySelectorAll('.card');

    function addClass(classname){
      if(!($el.parentNode.classList.contains(classname))){
        $node.forEach(node => {
          if(node.classList.contains(classname)){
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

    if(window.innerWidth <= 767){
      addClass('lowerscreen')
    }
    else{
      addClass('higherscreen')
    }

  }

  handleCloseClick(e){
    let el = e.currentTarget.closest('.card').classList.contains('lowerscreen') ? 'lowerscreen' : 'higherscreen'
    let ze = e.currentTarget.closest('.card');
    ze.classList.remove(el)
  }

  render(){

    const nodeProjects = this.props.dataProject.map( (obj, key) =>
    <Card
      key={ key }
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
      <Picture onClick={ (e) => this.handleCardClick(e) }>
        <img alt='name of project' src={obj.img? obj.img : 'http://via.placeholder.com/400x300/FECD0B/fff'}/>
      </Picture>
      <Description>
        <CardTitle className='to-hide'>{ obj.title }</CardTitle>
        <div>
          { obj.tech.map((tech,key) =>
            <i key={ key } className={ 'devicon-'+tech } ></i>)
          }
        </div>
      </Description>
      <CardContent>
        { obj.content }
        <BottomLinkMobile style={{textAlign: 'center',}}>
          { obj.depot !== undefined ? <a href={obj.depot} target='_blank'>
            <i className='icon ion-network'></i>
          </a> : null }
          { obj.url !== undefined ? <a href={obj.url} target='_blank'>
            <i className='icon ion-link'></i>
          </a> : null }
        </BottomLinkMobile>
      </CardContent>
      <SubCardContent>
        <div>
          <span>{ obj.title }</span>
          <button onClick={ (e) => this.handleCloseClick(e) }><i className='icon ion-close-round'></i></button>
        </div>
        <div>
          <p>{ obj.content }</p>
          <BottomLink>
            { obj.depot !== undefined ?
              <a href={obj.depot} target='_blank'>
              <i className='icon ion-network'></i>
              </a> : null }
            { obj.url !== undefined ? <a href={obj.url} target='_blank'>
              <i className='icon ion-link'></i>
            </a> : null }
          </BottomLink>
        </div>
      </SubCardContent>
    </Card>
    );

    return(
      <GalleryProjects className='gallery-projects'>
        { nodeProjects }
      </GalleryProjects>
    )
  }
}
