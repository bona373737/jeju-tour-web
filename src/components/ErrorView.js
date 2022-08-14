/**
 * @Filename: ErrorView.js
 * @Author: 구나래(nrggrnngg@gmail.com)
 * @Description: 에러 화면 컴포넌트
 */
import React from 'react';
import styled from "styled-components";

const ErrorContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    background-color: #fff;
    width: 100%;
    height: 100%;
    padding-top: 20%;
    text-align: center;

    h1 {
        padding-bottom: 12%;
    }
`;

const ErrorView = ({error}) => {
    return (
        <ErrorContainer>
            <h1 className="font1"> {error.code} Error</h1>
            <p className="font2"> {error.message} </p>
        </ErrorContainer>
    );
};

export default ErrorView;