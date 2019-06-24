import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../NavBar';
import { StyledHeader } from './style';

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <NavBar />
      </StyledHeader>
    );
  }
}

export default Header;
