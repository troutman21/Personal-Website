import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from '../NavBar';

class Header extends Component {
  render() {
    return (
      <header id="header">
        <NavBar />
      </header>
    );
  }
}

export default Header;
