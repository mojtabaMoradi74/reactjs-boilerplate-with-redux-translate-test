
import styled, { css } from "styled-components";
import { NavLink } from 'react-router-dom';
const borderBottom = '2px solid white';

let styles = {
  ul_box: styled.ul`
  padding: 0;
  display: flex;
  list-style: none;
 `,
  li_item: styled.li`
  ${({ theme }) => theme && css`
  margin: 0  ${theme.spacing.small.em};
  `}
 `,
  navLink: styled(NavLink)`
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  ${({ theme }) => theme && css`
  padding: ${theme.spacing.small.em} ${theme.spacing.small.em};
  color:${theme.color.grey50};
  `}
  &:hover {
   border-bottom: ${borderBottom};
    };
  &.active {  
    border-bottom:${borderBottom};
  }
 `
}

export default styles;
