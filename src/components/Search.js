import React, { memo } from "react";
import styled, { css, keyframes } from "styled-components";

// animations
const fadeIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;

const fadeOut = keyframes`
    0% { opacity: 1; }
    100% { opacity: 0; }
`;

// components
const modalSettings = (isOpen) => css`
    visibility: ${isOpen ? "visible" : "hidden"};
    z-index: 15;
    animation: ${isOpen ? fadeIn : fadeOut} 0.15s ease-out;
    transition: visibility 0.15s ease-out;
`;

const Background = styled.div`
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    z-index: 9;
    background-color: rgba(0, 0, 0, 0.6);
    ${(props) => modalSettings(props.isOpen)}
`;

const ModalSection = styled.div`
    position: absolute;
    width: 400px;
    height: 400px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 1);
    padding: 16px;
    ${(props) => modalSettings(props.isOpen)}
`;

const Search = memo(({ isOpen }) => {
    return (
        <>
            <Background isOpen={isOpen} />
            <ModalSection isOpen={isOpen}>
            </ModalSection>
        </>
    );
});

export default Search;
