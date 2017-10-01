import React from 'react';
import {
  Nav,
  BoxMenuHide,
  ListItemMenu,
  Bar,
  HamburgerToggle,
  Ul
} from './navbar.js'

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({label: false})
  }

  handleToggle(e) {
    const $el = e.currentTarget;
    const $sibling = $el.parentNode.firstChild
    $el.firstChild.classList.toggle('animated')
    let label = $el.firstChild.classList.contains('animated')
      ? true
      : false
    this.setState((prevState) => ({label}))
    console.log(label)
    $sibling.classList.toggle('expanded')
  }

  render() {
    const listItems = [
      ['Accueil', '#'],
      ['Projet', '#projet'],
      ['À propos', '#a-propos'],
      ['Contact', 'mailto:ronald.marcel.mr@gmail.com']
    ].map((item, key) => <ListItemMenu key={key}>
      <a href={item[1]}>
        {item[0]}
      </a>
    </ListItemMenu>)

    return (
      <Nav isWindowFull={false}>
        <BoxMenuHide>
          <Ul id='menu'>
            {listItems}
          </Ul>
        </BoxMenuHide>
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
