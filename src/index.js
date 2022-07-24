/** 
 * @Filename: index.js
 * @Author: 구본아(bona373737@gmail.com)
 * @Description: 프로그램 메인 시작점
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import GlobalStyles from "./GlobalStyles";
import Meta from "./Meta";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalStyles />
            <Meta />
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
