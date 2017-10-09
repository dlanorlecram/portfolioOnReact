import React from 'react';
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
    const $nav = document.querySelector('nav');
    const $a = document.querySelector('nav>div>div>a')
    window.onscroll = () => {
      const onEventScroll = window.scrollY;
      if(window.innerWidth >= 960){
        if(onEventScroll >= window.innerHeight/2){
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
    console.log(label)
    $sibling.classList.toggle('expanded')
  }

  render() {
    const listItems = [
      ['Accueil', '#'],
      ['À propos', '#a-propos'],
      ['Projet', '#projet'],
      ['Contact', 'mailto:ronald.marcel.mr@gmail.com']
    ].map((item, key) =>
      <ListItemMenu key={key}>
        <a href={item[1]}>
          {item[0]}
        </a>
      </ListItemMenu>)

    return (
      <Nav>
        <MenuResponsive>
          <LogoName>
            <a href='/' className='hidden'>Ronald Marcel</a>
          </LogoName>
          <Ul id='menu'>
            {listItems}
          </Ul>
        </MenuResponsive>
        <HamburgerToggle style={{
            color: ((e)=>console.log(e))
          }} onClick={(e) => this.handleToggle(e)}>
          <Bar/>
          <span>
            {this.state.label ? 'FERMER' : 'MENU'}
            </span>
        </HamburgerToggle>
      </Nav>
    )
  }
}
