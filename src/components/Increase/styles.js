
import styled, { css } from "styled-components";


let styles = {

  div_increase_container: styled.div`
    display: flex;
    flex-direction: column;
    ${(({ theme }) => theme && css`
    padding:${theme.spacing.large.rem} 0;
    `)};
 `,
  span: styled.span`
   ${(({ theme }) => theme && css`
    padding:${theme.spacing.tiny.rem};
    margin:${theme.spacing.medium.rem};
    background:  ${theme.color.primary};
    color:${theme.color.white};
    width: 35px;
    height: 35px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:${theme.font.size.xLarge.rem};
    `)};
  `,
  div_buttons_container: styled.div`
   display: flex;
   ${(({ theme }) => theme && css`
   margin:${theme.spacing.tiny.rem} -${theme.spacing.tiny.rem};
   button{
    margin:0 ${theme.spacing.tiny.rem};
   }
    `)};
  `,
}

export default styles;
