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
    ${reset};
    *{

    }
    a{
        text-decoration: none;
    }
    :root{
        --main-color1 : black;
        --main-color2 : tomato; 
    }
`;

export default GlobalStyles;