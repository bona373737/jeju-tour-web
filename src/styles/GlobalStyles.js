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

    html { 
        font-family: ‘SUIT’, sans-serif;
        font-size: 12px;
    }
    a { text-decoration: none; }
    button { border: 0; }
    
    :root {
        --blue : #0058FF;
        --subblue: #7E84A3;
        --sky : #E3EEFF; 
        --subsky : #F4F7FC;
        --gray : #666;
        --subgray : #E0E0E0;
        --black : #000;
        --white : #fff;
        --red : red;
    }

    // 제일 큰 폰트. 잡지페이지 장소 이름 넣을 때 적용
    .font1 {
        font-weight: 200;
        font-size: 3rem;
    }

    .font2 {
        font-weight: 600;
        font-size: 2rem;
        color: var(--black);
    }

    // sub title: font4에 비해 강조된 느낌 
    .font3 {
        font-weight: 600;
        font-size: 1.3rem;
    }

    // 본문 내용글에 적용
    .font4 {
        font-weight: 400;
        font-size: 1.3rem;
        line-height: 0.7cm;
    }

    .font5 {
        font-weight: 400;
        font-size: 1.1em;
    }
`;

export default GlobalStyles;
