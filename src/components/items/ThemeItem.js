/**
 * @Filename: ThemeItem.js
 * @Author: 이재이(loveleej87@gmail.com)
 * @Description: 홈 페이지 추천 테마 리스트 아이템 컴포넌트
 */
import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import Theme1 from "../../assets/img/곶자왈.jpeg";

const ThemeItemContainer = styled.div`
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

    .themeitem_text {
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

const ThemeItem = memo(() => {
    return (
        <ThemeItemContainer>
            <NavLink to="/theme/:id">
                <img src={Theme1} alt="theme1" />
                <div className="themeitem_text">
                    <p className="font5">제주의 걷기 좋은 길</p>
                    <h1 className="font1">곶자왈</h1>
                </div>
            </NavLink>
        </ThemeItemContainer>
    );
});

export default ThemeItem;
