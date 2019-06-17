import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavButton extends Component {
  render() {
    const { navLink, to, children, linkHref } = this.props;
    if (navLink) {
      return (
        <NavLink exact={true} activeClassName="selected" to={to}>
          <li>{children}</li>
        </NavLink>
      );
    }
    return (
      <a href={linkHref}>
        <li>{children}</li>
      </a>
    );
  }
}

export default NavButton;
