import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import Theme1 from "../assets/img/곶자왈.jpeg";

const Content = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 10%;
    margin: 0 auto;

    img {
        width: 80%;
        border-radius: 6px;
        position: absolute;
        left: 10%;
        margin-bottom: 10%;
    }

    .carditem_text {
        width: 80%;
        margin: 0 auto;
        position: relative;
        padding-top: 6%;
        padding-bottom: 20%;
        left: 5%;

        p,
        h1 {
            color: var(--white);
        }

        p {
            padding-bottom: 2%;
        }
    }
`;

const CardItem = memo(() => {
    return (
        <Content>
            <NavLink to="/magazine/:id">
                <img src={Theme1} alt="theme1" />
                <div className="carditem_text">
                    <p className="font3">제주의 걷기 좋은 길</p>
                    <h1 className="font1">곶자왈</h1>
                </div>
            </NavLink>
        </Content>
    );
});

export default CardItem;
