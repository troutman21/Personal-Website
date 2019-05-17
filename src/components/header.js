import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header id="header">
        <nav>
          <ul>
            <NavLink exact={true} activeClassName="selected" to="/">
              <li id="name">Phillip_Troutman</li>
            </NavLink>
            <div id="sub-nav">
              <NavLink activeClassName="selected" to="/speaking">
                <li>_speaking</li>
              </NavLink>
              <a href="mailto:philliptroutman21@gmail.com">
                <li>_email</li>
              </a>
              <a href="https://github.com/troutman21">
                <li>_programming</li>
              </a>
              <a href="https://twitter.com/_Troutman_">
                <li>_twitter</li>
              </a>
            </div>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
