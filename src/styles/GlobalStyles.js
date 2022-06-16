/**
 * @filename GlobalStyles.js
 * @description 전역으로 적용할 style정의, 색상,폰트값 변수정의
 *
 */
import { createGlobalStyle } from 'styled-components';

/**기본스타일 reset*/
import reset from "styled-reset";
// import './assets/css/reset.css';

const GlobalStyles = createGlobalStyle`
    ${ reset };
    *{
        margin: 0;
        padding: 0;
    }

    html { font-family: ‘SUIT’, sans-serif; }
    a { text-decoration: none; }
    button { border: 0; }
    
    :root {
        --blue : #0058FF;
        --subblue: #7E84A3;
        --sky : #E3EEFF; 
        --gray : #666;
        --black : #000;
        --white: #fff;
    }

    .menufont {
        font-family: ‘SUIT’, sans-serif;
        font-weight: 200;
        font-size: 36px;
        color: var(--black);
    }

    .titlefont {
        font-size: 36px;
        color: var(--black);
    }

    .subfont {
        font-weight: 600;
        font-size: 18px;
        color: var(--black);
    }

    .contentfont {
        font-weight: 400;
        font-size: 16px;
        line-height: 0.7cm;
        color: var(--black);
    }
`;

export default GlobalStyles;
