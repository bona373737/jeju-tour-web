/** 
 * @Filename: App.js
 * @Author: 구본아(bona373737@gmail.com)
 * @Description: 컴포넌트 정의 프로그램
 */
import React from "react";
import styled from "styled-components";

import Header from "./components/header/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";

const AppContainer = styled.div`
`

const App = () => {
    const isMobile = () => {
        if('ontouchstart' in document.documentElement){
        }else{
            alert("모바일 환경에서 이용해주세요.")
        }
      };
    isMobile();

    return (
        <AppContainer>
            <Header />
            <Main />
            <Footer />
        </AppContainer>
    );
};

export default App;
