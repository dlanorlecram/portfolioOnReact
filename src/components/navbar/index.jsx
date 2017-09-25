import React, {Component} from 'react';
import './navbar.css'

export default class Navbar extends Component {
  constructor(props){
    super();
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle(e){
    console.log(e.target.classList.contains('active'))
    e.target.classList.toggle('active')
  }

  render(){

    return (
      <nav style={{
        backgroundColor: 'rgba(255, 255, 255,0.95)',
        zIndex: 1
        }}>
        <div className='menu-toggle' onClick={this.handleToggle}></div>
      </nav>
    )
  }
}
