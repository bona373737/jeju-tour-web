import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.div`
    box-sizing: border-box;
    width: 80%;
    height: 93vh;
    position: absolute;
    z-index: 10;
    top: 70px;
    /* right: 0; 오른쪽으로 정렬하고 싶은데 왜 안먹지 ㅋㅋㅋ*/
    left: 20%;
    /* background-color: white; */
    background-color: tomato;
    padding: 20px 20px;

    .login{
        background-color: white;
        height: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .user_inform{
        background-color: white;
        height: 15%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; 
    }
    .menu{
        margin: 15px 0;
        li{
            display: block;
            width: 100%;
            padding: 15px 0;
        }//li end
    }//menu end
`;

const Sidebar = ({setShowSidebar}) => {
    //로그인여부를 나타내는 상태값_로그인기능구현전까지 임의로 활용.
    const [isLogin, setIsLogin] = useState(true);
    
    //클릭시 페이지이동과 함께 sidebar닫아주는 함수
    const navigate = useNavigate();
    const movePage=(e)=>{
        navigate(e.target.dataset.path);
        setShowSidebar(false);
    }

    return (
        <SidebarContainer>
            {
                //로그인여부에 따라 조건부 렌더링
                isLogin? ( 
                    <div className="user_inform">
                    <h1>Hello</h1>
                    <h1>Bona!(변수)</h1>
                    </div>
                    ):(
                        <div className='login' data-path='/login' onClick={movePage}>
                        로그인/회원가입
                        </div>
                    )
            }
            {/* menu 링크 */}
            <ul className='menu'>
            <li onClick={movePage} data-path='/mylike'>내 저장</li>
            <li onClick={movePage} data-path='/myreview'>내 리뷰</li>
            <li onClick={movePage} data-path='/myqna'>내 문의</li>
            <li onClick={movePage} data-path=''>여행도구</li>
            <li onClick={movePage} data-path='/sc'>고객센터</li>
            {
                isLogin? (<li>로그아웃</li>):''
            }
            </ul>
        </SidebarContainer>
        
    );
};

export default Sidebar;