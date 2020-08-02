import React from 'react';
import {Link, scrollSpy} from 'react-scroll';
import {
  Nav,
  MenuResponsive,
  ListItemMenu,
  Bar,
  HamburgerToggle,
  Ul,
  LogoName
} from './navbar.css.js'

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({label: false})
  }

  componentDidMount() {

    scrollSpy.update();

    /*
    *   Change navbar's className
    **/

    const $nav = document.querySelector('nav');
    const $a = document.querySelector('.nav-link--onscroll')

    window.onscroll = () => {
      const scrollPos = window.scrollY;
      if(window.innerWidth >= 960){
        if(scrollPos >= window.innerHeight/2){
          $nav.classList.add('transition-style')
          $a.classList.remove('hidden')
        }else{
          $nav.classList.remove('transition-style')
          $a.classList.add('hidden')
        }
      }
    }
  }

  handleToggle(e) {
    const $el = e.currentTarget;
    const $sibling = $el.parentNode.firstChild
    $el.firstChild.classList.toggle('animated')
    let label = $el.firstChild.classList.contains('animated') ? true : false
    this.setState((prevState) => ({label}))
    $sibling.classList.toggle('expanded')
  }

  render() {
    const fnButton = (name, stLink) => {
      return (
        <Link type="button" activeClass="current-position" to={ stLink } spy={ true } smooth={ true } offset={ stLink === 'projet' || stLink === 'about'? -60 : null }>
          { name }
        </Link>
      )
    }

    const fnLink = (name, stLink) => {
      return (<a href={stLink}>{name}</a>)
    }

    const listItems = [
      ['Accueil', 'intro'],
      ['À propos', 'about'],
      ['Projet', 'project'],
      ['Contact', 'mailto:ronald.marcel.mr@gmail.com']
    ].map((item, key) =>
      <ListItemMenu key={key} className={key === 0 ? 'active': null} style={{visibility: key === 0 ? 'hidden': 'visible'}} >
        {item[0] !== 'Contact' ? fnButton(item[0],item[1]): fnLink(item[0],item[1])}
      </ListItemMenu>)

    return (
      <Nav>
        <MenuResponsive>
          <LogoName className='nav-link--onscroll'>
            <a href='/' className='hidden'>Ronald Marcel</a>
          </LogoName>
          <Ul id='menu'>
            {listItems}
          </Ul>
        </MenuResponsive>
        <HamburgerToggle onClick={(e) => this.handleToggle(e)}>
          <Bar/>
          <span>
            {this.state.label ? 'FERMER' : 'MENU'}
            </span>
        </HamburgerToggle>
      </Nav>
    )
  }
}
