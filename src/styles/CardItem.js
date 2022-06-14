import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

import Theme1 from "../assets/img/곶자왈.jpeg";

const Content = styled.div`
    width: 80%;
    height: 100%;
    margin: 0 auto;
    padding-top: 10%;
    position: relative;
    top: 7vh;

    img {
        display: flex;
        margin: 0 auto;
        width: 100%;
        border-radius: 6px;

        span {
            position: relative;
            top: 10%;
        }
    }
`;

const CardItem = () => {
    return (
        <Content>
            <NavLink to="/magazine/:id">
                <img src={Theme1} alt="theme1" />
                <span className="menufont">여행컨텐츠</span>
            </NavLink>
        </Content>
    );
};

export default CardItem;