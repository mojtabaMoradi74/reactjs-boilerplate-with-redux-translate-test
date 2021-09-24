
import styled, { css } from "styled-components";
import H1 from 'reusableComponent/H1';


let styles = {

  div_home_container: styled.div`
  ${(({ theme }) => theme && css`
  padding: ${theme.spacing.medium.rem} 0 ;                                          
  `)};
 `,
  h1: styled(H1)`
  ${(({ theme }) => theme && css`

  `)};
`,
  div_content: styled.div`
${(({ theme }) => theme && css`
margin-top:${theme.spacing.medium.rem} ;                                        
`)};
`,
}

export default styles;
