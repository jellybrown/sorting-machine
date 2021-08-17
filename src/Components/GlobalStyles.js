import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// font-family: 'Nanum Gothic', sans-serif;

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    html, body, h1, p, a, span, button, input {
        font-family: 'Nanum Gothic', sans-serif;
        color:#fff;
        font-weight: 400;
    }
    
    `;

export default globalStyles;
