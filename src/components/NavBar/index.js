import React, { Component } from 'react';
import NavButton from '../NavButton';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <NavButton navLink to="/">
            Phillip_Troutman
          </NavButton>
          <NavButton navLink to="/speaking">
            _speaking
          </NavButton>
          <NavButton linkHref="mailto:philliptroutman21@gmail.com">
            _email
          </NavButton>
          <NavButton linkHref="https://github.com/troutman21">
            _programming
          </NavButton>
          <NavButton linkHref="https://twitter.com/_Troutman_">
            _twitter
          </NavButton>
        </ul>
      </nav>
    );
  }
}

export default NavBar;