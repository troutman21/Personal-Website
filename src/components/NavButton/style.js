import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const A = styled.a`
  color: #bdbec1;
  text-decoration: none;
`;

export const StyledNavLink = styled(NavLink).attrs({
  activeClassName: 'selected',
})`
  color: #bdbec1;
  text-decoration: none;
  &.selected {
    color: var(--primary-color);
  }
`;
