import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../NavBar';
import { HeaderStyleWrapper } from './style';

class Header extends Component {
  render() {
    return (
      <HeaderStyleWrapper>
        <NavBar />
      </HeaderStyleWrapper>
    );
  }
}

export default Header;
