/**
 * @filename GlobalStyles.js
 * @description 전역으로 적용할 style정의, 색상,폰트값 변수정의
 * 
 */
import React from 'react';
import { createGlobalStyle } from 'styled-components';

/**기본스타일 reset*/
import reset from 'styled-reset';
// import './assets/css/reset.css';


const GlobalStyles = createGlobalStyle`
    ${ reset };
    *{

    }
    a { text-decoration: none; }
    
    :root {
        --blue : #0058FF;
        --sky : #E3EEFF; 
        --gray : #666;
        --black : #000;
        --subblue: #7E84A3;
    }

    .menufont {
            font-family: ‘SUIT’, sans-serif;
            font-weight: 200;
            font-size: 36px;
            color: #000;

        .titlefont {
            font-size: 36px;
        }

        .subfont {
            font-weight: 600;
            font-size: 18px;
        }
    }
`;

export default GlobalStyles;