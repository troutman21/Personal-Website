import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from '../Navigation';

class Header extends Component {
  render() {
    return (
      <header id="header">
        <Navigation />
      </header>
    );
  }
}

export default Header;
