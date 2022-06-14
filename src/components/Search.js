import React, { memo, useCallback } from 'react';
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
    animation: ${isOpen ? fadeIn : fadeOut} 0.1s ease-out;
    transition: visibility 0.1s ease-out;
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
    width: 100%;
    height: 20vh;
    top: 6.6vh;
    left: 0;
    background-color: var(--white);
    z-index: 11;
    ${(props) => modalSettings(props.isOpen)}
`;

const Form = styled.div`
    position: absolute;
    width: 100%;
    height: 6.6vh;
    top: 0;
    left: 0;
    
    input {
        position: relative;
        width: 10vw;
        top: 32%;
        right: 10%;
        height: 3.5vh;
        border: 1px solid var(--sky);
        z-index: 11;
    }

    ${(props) => modalSettings(props.isOpen)}
`;

const Search = memo(({ isOpen }) => {
    const onSearchSubmit = useCallback(e => {
        e.preventDefault();
    }, []);

    return (
        <>
            <Background isOpen={isOpen} />
            <ModalSection isOpen={isOpen}>
            </ModalSection>
            <Form onSubmit={onSearchSubmit} isOpen={isOpen}>
                <input type='search' name='search' placeholder='검색어를 입력하세요.' />
                <button type='submit'>검색</button>
            </Form>
        </>
    );
});

export default Search;
