/** 
 * @Filename: App.js
 * @Author: 구본아(bona373737@gmail.com)
 * @Description: 컴포넌트 정의 프로그램
 */
import React from "react";

import Header from "./components/header/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import axios from "axios";
axios.defaults.withCredentials = true;


const App = () => {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
};

export default App;
