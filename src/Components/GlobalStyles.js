import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    html, body, h1, p, a, span, button  {
        font-family: 'Nanum Gothic', sans-serif;
        color:#fff;
        font-weight: 400;
    }
    input {
        font-family: 'Nanum Gothic', sans-serif;
    }
    .react-clock__face {
        background-color: rgba(255,255,255,0.9);
    }

    `;

export default globalStyles;
