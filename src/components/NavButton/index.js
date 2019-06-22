import React, { Component } from 'react';
import { A, StyledNavLink } from './style';

class NavButton extends Component {
  render() {
    const { navLink, to, children, linkHref } = this.props;
    if (navLink) {
      return (
        <StyledNavLink exact={true} to={to}>
          <li>{children}</li>
        </StyledNavLink>
      );
    }
    return (
      <A href={linkHref}>
        <li>{children}</li>
      </A>
    );
  }
}

export default NavButton;
