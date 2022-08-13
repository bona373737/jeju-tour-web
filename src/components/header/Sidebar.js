/** 
 * @Filename: Sidebar.js
 * @Author: 웹퍼블작업 및 전체기능구현_구본아(bona373737@gmail.com)
 *          로그아웃기능구현_구나래(nrggrnngg@gmail.com)
 * @Description: 사이드바 영역
 */
import React, { useEffect, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled,{keyframes} from 'styled-components';
import axios from 'axios';

const fadeIn = keyframes`
    from{
        transform: translateX(100%);
    }
    to{
        transform: translateX(0);
    }
`;

const SidebarContainer = styled.div`
    width: 100%;
    height: 97vh;
    position: absolute;
    top: 7vh;
    background-color: rgba(255,255,255,0);
    z-index: 80;
    animation: ${fadeIn} 0.3s;

    .sidebar_content{
        box-sizing: border-box;
        width: 70%;
        margin-left: 30%;
        height: 97vh;

        background-color: var(--white);
        padding: 20px 20px;
        .back{
            width: 100%;
            
            background-color: black;
        }
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
            justify-content: center;
            align-items: center;
            .profile_img{
                background-color: tomato;
                width: 70px;
                height: 70px;
                border-radius: 50%;
                img{
                    
                }
            }
            .profile_text{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center; 
            }
        }
        .menu{
            margin: 15px 0;
            li{
                display: block;
                width: 100%;
                padding: 15px 0;
            }//li end
        }//menu end
    }//sidebar_content end
`;

const Sidebar = ({setShowSidebar}) => {
    //로그인여부를 나타내는 상태값_로그인기능구현전까지 임의로 활용.
    const [isLogin, setIsLogin] = useState(true);
    
    //클릭시 페이지이동과 함께 sidebar닫아주는 함수
    const navigate = useNavigate();
    const movePage=useCallback((e)=>{
        navigate(e.target.dataset.path);
        setShowSidebar(false);
    },[])

    //클릭시 페이지이동과 함께 sidebar닫아주는 함수 + 비회원접속제한
    const movePage2=useCallback((e)=>{
        if(isLogin===true){
            navigate(e.target.dataset.path);
            setShowSidebar(false);
        }else{
            alert("로그인하세요")
            navigate("/login");
            setShowSidebar(false);
        }
    },[])

    //sidebar가 unmount될때 fadeout애니메이션 적용??
    useEffect(()=>{
        return(()=>{

        })
    },[])

    /** logout 버튼이 눌러졌을 때 호출될 이벤트 핸들러 */
    const logoutUser = (e) => {
        e.preventDefault();

        // 즉시실행 비동기 처리 함수
        (async () => {
            try {
                // 로그아웃 Ajax 요청 보내기
                const response = await axios.delete("/session/login");
                // 로그아웃 성공 시 isLogin false로 변경 
                setIsLogin(false);
            } catch (err) {
                const errMsg = `[${err.response.status}]${err.response.statusText}`;
                console.error(errMsg);
                alert('로그아웃에 실패했습니다. 잠시 후 다시 시도해 주세요.');
            }
        })();
        
    };

    return (
        <SidebarContainer>
            <div className="sidebar_content">
            <div className="back"></div>
            {
                //로그인여부에 따라 조건부 렌더링
                isLogin? ( 
                    <div className="user_inform" data-path="/userinfo" onClick={movePage}>
                        <div className='profile_img'>
                            <img src="" alt="img" />
                        </div>
                        <div className="profile_text">
                            <h1>Hello</h1>
                            <h1>Bona!(변수)</h1>
                        </div>
                    </div>
                    ):(
                        <div className='login' data-path='/login' onClick={movePage}>
                        로그인/회원가입
                        </div>
                    )
            }
            {/* menu 링크 */}
            <ul className='menu'>
            <li onClick={movePage2} data-path='/mylike'>내 저장</li>
            <li onClick={movePage2} data-path='/myreview'>내 리뷰</li>
            <li onClick={movePage2} data-path='/myqna'>내 문의</li>
            <li onClick={movePage} data-path='/tourkit'>여행도구</li>
            <li onClick={movePage} data-path='/service'>고객센터</li>
            {
                isLogin ? (
                <li>
                    <button type="button" name="logout" className="logout" onClick={logoutUser}>로그아웃</button>
                </li>) : ''
            }
            </ul>
            </div>
        </SidebarContainer>
        
    );
}; 

export default Sidebar;