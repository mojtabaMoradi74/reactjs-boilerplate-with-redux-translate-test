
import styled, { css } from "styled-components";


let styles = {
  div_container: styled.div`
    flex: 1 1 auto;
    flex-direction: column;
 `,


  main: styled.main`
   margin: 0 auto;
   max-width: 90%;
   ${({ theme }) => theme && css`
   margin: 0  ${theme.spacing.small.em};
   padding: ${theme.spacing.large.em};
   `}
  `,
}

export default styles;
