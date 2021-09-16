import { createGlobalStyle, css } from "styled-components";
import devices from "utils/devices";
// import devices from "values/const/devices";
// import device from "values/const/devices";
// ============================== fonts

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    scroll-behavior: smooth;
  
    ${({ theme }) => theme && css`
      background: ${theme.color.gray50};
      font-family: ${theme.font.family} !important;
      direction: ${theme.direction};
      font-size:  ${theme.font.base};
    `}
  }

  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  ul.ba {
    list-style-type: none;
}
ul {
    list-style-position: outside;
}

 
  li::marker {
    display:none !important;
}
  p,
  label {
    /* font-family: Graphik, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif; */
    line-height: 1.5em;
  }
  label{
    color:${({ theme }) => theme.color.gray500};
    font-weight:600;
  }

  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
}
button:focus {
  outline: none;
  
}

  textarea:focus, input:focus{
    outline: none;
    border-color: inherit;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  *:focus {
    outline: none;
  }

  ol, ul,li {
    list-style: none;
    margin:0;
    margin-top: 0;
    margin-bottom: 0;
  }

  .image-slider-bullets{
    box-shadow : unset !important;
  }

  input, button, textarea, select {
    // font: inherit;
    // color: inherit;
    // padding: 0;
    // margin: 0;
    // border: 0;
    box-sizing: border-box;
    letter-spacing:1px;
    // border-radius: 0;
}

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .custom-modal-title{
    font-size : 17px;
  }

  .btn {
    font-size : 13px;
  }

  button, input {
    border-radius: 3px;
}

input{
  overflow: hidden !important;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type=number] {
    -moz-appearance:textfield; /* Firefox */
}
/* =-------------------------------------------------------------------- */
`;

export default GlobalStyle;
