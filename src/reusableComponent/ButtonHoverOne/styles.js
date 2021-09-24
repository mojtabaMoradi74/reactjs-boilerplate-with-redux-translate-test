
import Button from "reusableComponent/Button";
import styled, { css } from "styled-components";


let styles = {

  //   div_increase_container: styled.div`
  //     display: flex;
  //     flex-direction: column;
  //     ${(({ theme }) => theme && css`
  //     padding:${theme.spacing.large.rem} 0;
  //     `)};
  //  `,
  //   h3: styled.h3``,
  //   div_buttons_container: styled.div`
  //    display: flex;
  //    ${(({ theme }) => theme && css`
  //    margin:${theme.spacing.tiny.rem} -${theme.spacing.tiny.rem};
  //    button{
  //     margin:0 ${theme.spacing.tiny.rem};

  //    }
  //     `)};
  //    `,
  button: styled(Button)`

    ${(({ theme }) => theme && css`
       font-size:${theme.font.size.large.rem};
       padding: ${theme.spacing.small.rem} ${theme.spacing.medium.rem};
    `)};
    background-color: white;
    border: 1px solid #488cff;
   
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: white;
    transition: all 0.25s ease;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    &:after {
      display: block;
    width: 100%;
    height: 0;
    position: absolute;
    content: '';
    opacity: 1;
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    background: #488cff;
    top: 0;
   }

   span {
    color: #488cff;

    z-index: 10;
   }

   &:hover{
     span{
       color: white;
     }

     &:after {
    top: auto;
    bottom: 0;
    height: 100%;
   }
  }
  
  `,

}

export default styles;
