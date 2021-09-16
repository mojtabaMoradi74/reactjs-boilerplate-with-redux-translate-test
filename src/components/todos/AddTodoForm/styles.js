import styled, { css } from "styled-components";


let styles = {
  form: styled.form`
  ${({ theme }) => theme && css`
   margin: ${theme.spacing.tiny.rem} 0;
  `}
  `,
  label: styled.form`
  ${({ theme }) => theme && css`
   margin: ${theme.spacing.tiny.rem} 0;
  `}
  `,
  div_flex: styled.div`
  display: flex;
  ${({ theme }) => theme && css`
   margin: ${theme.spacing.medium.rem} 0;
  `}
  `,
}

export default styles;
