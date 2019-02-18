import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component{
  render(){
    return(
      <header id='header'>
      <nav>
        <ul>
          <li id='name'><NavLink exact={true}  activeClassName='selected' to='/'>Phillip_Troutman</NavLink></li>
          <li><NavLink activeClassName='selected' to='/speaking'>_speaking</NavLink></li>
          <li><a href='mailto:philliptroutman21@gmail.com'>_email</a></li>
          <li><a href='https://github.com/troutman21'>_programming</a></li>
          <li><a href='https://twitter.com/_Troutman_'>_twitter</a></li>
        </ul>
      </nav>
    </header>
    );
  }
}

export default Header;