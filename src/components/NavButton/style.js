import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const A = styled.a`
  color: #bdbec1;
  font-weight: bold;
  font-size: 120%;
  text-decoration: none;
  border-top: 1px solid var(--secondary-color);
  padding-top: 5px;
  &:hover {
    border-top: 1px solid var(--primary-color);
    color: var(--primary-color);
  }
`;

export const StyledNavLink = styled(NavLink).attrs({
  activeClassName: 'selected',
})`
  color: #bdbec1;
  font-weight: bold;
  font-size: 120%;
  text-decoration: none;
  border-top: 1px solid var(--secondary-color);
  padding-top: 5px;
  &.selected {
    color: var(--primary-color);
    border-top: 1px solid var(--primary-color);
  }
  &:hover {
    border-top: 1px solid var(--primary-color);
    color: var(--primary-color);
  }
`;
