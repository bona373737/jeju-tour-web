import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.div`
    box-sizing: border-box;
    width: 80%;
    height: 90vh;
    position: relative;
    top: 0;
    /* right: 0; 오른쪽으로 정렬하고 싶은데 왜 안먹지 ㅋㅋㅋ*/
    left: 20%;
    background-color: white;
    padding: 20px 20px;
    .login{

    }
    .userInform{
        
    }
`;

const Sidebar = () => {
    return (
        <SidebarContainer>
            {/* 로그인상태에 따라 조건부 렌더링 */}
            <div className='login'>
                로그인/회원가입
            </div>
            <div className="userInform">
                <h1>Hello</h1>
                <h1>Bona!</h1>
            </div>

            {/* menu 링크 */}
            <ul>
                <li><NavLink to=''>내 저장</NavLink></li>
                <li><NavLink to=''>내 리뷰</NavLink></li>
                <li><NavLink to=''>내 문의</NavLink></li>
                <li><NavLink to=''>여행도구</NavLink></li>
                <li><NavLink to=''>고객센터</NavLink></li>
                <li>로그아웃</li>
            </ul>

        </SidebarContainer>
    );
};

export default Sidebar;