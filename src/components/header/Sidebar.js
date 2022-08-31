/** 
 * @Filename: Sidebar.js
 * @Author: 웹퍼블작업 및 전체기능구현_구본아(bona373737@gmail.com)
 *          로그인/아웃 기능구현_구나래(nrggrnngg@gmail.com)
 * @Description: 사이드바 영역
 */
import React, { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getIsLogin, deleteLogin } from '../../slices/MemberSlice';

import Spinner from '../Spinner';

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
                    width: 100%;
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
    // 페이지 강제 이동 함수 생성
    const navigate = useNavigate();
    // 리덕스 로그인 세션 상태 관리
    const dispatch = useDispatch();
    const { data, loading } = useSelector((state) => state.member);
    
    /** 사이드바 마운트 시 로그인 여부 검사 */
    useEffect(() => {
        dispatch(getIsLogin());
    }, [dispatch]);

    /** logout 버튼 클릭 이벤트 */
    const logout = useCallback(e => {
        e.preventDefault();
        // 리덕스를 통해 로그아웃 요청
        dispatch(deleteLogin())
        .unwrap()
        .then(() => {
            // 로그아웃 성공 시
            navigate('/');
            setShowSidebar(false);
        })
        .catch(() => {
            // 로그아웃 실패 시
            alert('로그아웃에 실패했습니다. 잠시 후 다시 시도해주세요.');
        });
    }, [dispatch, navigate, setShowSidebar]);

    /** 클릭시 페이지이동과 함께 sidebar닫아주는 함수 */
    const movePage=useCallback(e => {
        e.preventDefault();
        navigate(e.target.dataset.path);
        setShowSidebar(false);
    }, [navigate, setShowSidebar]);

    /** 클릭시 페이지이동과 함께 sidebar닫아주는 함수 + 비회원접속제한 */
    const movePage2=useCallback(e => {
        e.preventDefault();
        if(data) { // 로그인 상태
            navigate(e.target.dataset.path);
            setShowSidebar(false);
        } else { // 로그아웃 상태
            alert("로그인을 해주세요.");
            navigate("/login");
            setShowSidebar(false);
        }
    }, [data, navigate, setShowSidebar]);

    // sidebar가 unmount될때 fadeout애니메이션 적용??
    // useEffect(()=>{
    //     return(()=>{

    //     })
    // }, [])
    console.log(data);

    return (
        <>
            <Spinner visible={loading}/>

            <SidebarContainer>
                <div className="sidebar_content">
                <div className="back"></div>
                {
                    // 로그인 여부에 따라 조건부 렌더링
                    data ? ( 
                        <div className="user_inform" data-path="/userinfo" onClick={movePage}>
                            <div className='profile_img'>
                                {/* 프로필 업로드 성공 후 저장되는거까지 확인했습니다! */}
                                {/* 저장된 경로로 이미지 불러오기는 미확인 상태입니다~ */}
                                {/* <img src={`http://localhost:3001/upload/profile_img${data.item.profile_thumb}`} alt="img" /> */}
                                {
                                    data.item.profile_img?
                                    <img src={`${process.env.REACT_APP_STATIC_PATH}${data.item.profile_img}`} alt="img" />
                                    :
                                    "기본이미지추가"
                                }
                            </div>
                            <div className="profile_text">
                                <h1 className="font2">Hello,</h1>
                                <h1 className="font2">{data.item.userid}!</h1>
                            </div>
                        </div>
                        ) : (
                        <div className='login' data-path='/login' onClick={movePage}>로그인/회원가입</div>
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
                    // 로그인 여부에 따라 조건부 렌더링
                    data ? (
                    <li>
                        <button type="button" name="logout" className="logout" onClick={logout}>로그아웃</button>
                    </li>) : ''
                }
                </ul>
                </div>
            </SidebarContainer>
        </>
    );
}; 

export default Sidebar;