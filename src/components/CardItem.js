import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import Theme1 from "../assets/img/곶자왈.jpeg";

const Content = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 10%;

    img {
        width: 80%;
        border-radius: 6px;
        position: absolute;
        left: 10%;
        margin-bottom: 10%;
        margin: 0 auto;
    }

    .carditem_text {
        width: 80%;
        position: relative;
        padding-top: 6%;
        padding-bottom: 20%;
        left: 15%;

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
                    <p className="font5">제주의 걷기 좋은 길</p>
                    <h1 className="font1">곶자왈</h1>
                </div>
            </NavLink>
        </Content>
    );
});

export default CardItem;
