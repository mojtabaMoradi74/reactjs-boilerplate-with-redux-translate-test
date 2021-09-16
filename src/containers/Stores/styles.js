
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";


let styles = {
  div_container: styled.div`
  ${({ theme }) => theme && css`
   padding: ${theme.spacing.tiny.rem};
  `}
  `,
  ul_wrap: styled.ul`
   ${({ theme }) => theme && css`
   display: flex;
   margin: 0 -${theme.spacing.medium.rem};
  `}
  `,
  li_item: styled.li`
  text-transform: uppercase;
  `,
  navLink: styled(NavLink)`
  ${({ theme }) => theme && css`
   color:${theme.color.gray700};
   font-weight:${theme.font.weight.large};
   padding: ${theme.spacing.medium.rem};
  `}

  &.active{
    color: blue;
  }
  `
}

export default styles;
