
import styled, { css } from "styled-components";
import { NavLink } from 'react-router-dom';

const borderBottom = '2px solid white';

let styles = {

  header: styled.header`
  display: flex;
  justify-content: space-around;
  ${({ theme }) => theme && css`
  background-color: ${theme.color.primary};
  `}
  border-bottom: 1px solid #f6f6f6;
  padding: 1em 0;
  `,
  nav: styled.nav`
    flex: 1;
    display: flex;
    justify-content: space-between;
    max-width: 95%;
  `,
}

export default styles;
