/**
 * @Filename: Login.js
 * @Author: 웹퍼블작업_이재이(loveleej87@gmail.com)
 *          js기능구현_구나래(nrggrnngg@gmail.com)
 * @Description: 회원 로그인 페이지
 *               비밀번호 암호화_crypto-js사용_양방향암호화하여 전송
 */

import React, { useCallback } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import crypto from 'crypto-js';
import { useSelector, useDispatch } from 'react-redux';
import { postLogin } from '../slices/MemberSlice';

import regexHelper from '../libs/RegexHelper';
import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';

const LoginContainer = styled.div`
    width: 100%;
    padding-top: 20%;

    h3 {
        padding-bottom: 12%;
        display: flex;
        justify-content: center;
    }

    .login_content {
        width: 80%;
        display: flex;
        margin: 0 auto;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;

        form {
            width: 100%;

            .input_text {
                width: 90%;
                height: 16px;
                padding: 5%;
                border: solid 1px #eee;
                border-radius: 1mm;
            }

            .login {
                font-size: 16px;
                margin-top: 10%;
                width: 100%;
                height: 2.4em;
                border: none;
                border-radius: 1mm;
                color: var(--white);
                background-color: var(--blue);
            }

            span {
                color: red;
                display: flex;
                font-size: 14px;
                padding: 4% 0 4% 0;
            }
        }

        p {
            color: red;
            padding-top: 4%;
        }
    }

    .find_button_area {
        display: flex;
        justify-content: space-between;

        .find_button {
            font-size: 16px;
            margin-top: 5%;
            width: 47%;
            height: 2.4em;
            border: none;
            border-radius: 1mm;
            color: var(--gray);
            background-color: #eee;
        }
    }

    .signup {
        font-size: 16px;
        width: 100%;
        height: 2.4em;
        border: none;
        border-radius: 1mm;
        color: var(--white);
        background-color: var(--blue);
    }
`;

const Login = () => {
    // 리덕스 로그인 세션 상태 관리
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.member);
    // 페이지 강제 이동 함수 생성
    const navigate = useNavigate();

    /** form submit 이벤트 */
    const loginSubmit = useCallback(e => {
        e.preventDefault();

        // 입력한 아이디, 비밀번호 추출하기
        const current = e.target;
        const userid = current.userid.value;
        let password = current.password.value;

        // 입력값에 대한 유효성 검사
        try { 
            regexHelper.value(userid, '아이디를 입력하세요.');
            regexHelper.value(password, '비밀번호를 입력하세요.');
        } catch(err) {
            alert(err.message);
            e.target.focus();
            return;
        }

        /** 비밀번호 암호화_crypto-js모듈 사용 */
        // AES알고리즘 사용 --> 사용자 입력값 암호화
        const secretKey = 'secret key'; //config.env파일로 불러오게 수정 필요
        password = crypto.AES.encrypt(password, secretKey).toString();

        // 리덕스를 통해 로그인 전송
        dispatch(postLogin({
            userid: userid,
            password: password,
        })).then(() => {
            navigate('/');
        });

    }, [dispatch, navigate]);

    return (
        <>
            <Spinner visible={loading}/>

            {error ? (
                <ErrorView error={error} />
            ) : (
                <LoginContainer>
                    <div className="login_content">
                        <h3 className="headfont">로그인</h3>
                        <form onSubmit={loginSubmit}>
                            <input type="text" name="userid" className="input_text" placeholder="아이디"></input>
                            <span>아이디를 입력하세요.</span>
                            <br />
                            <input type="password" name="password" className="input_text" placeholder="비밀번호"></input>
                            <span>비밀번호를 입력하세요.</span>
                            <br />
                            <button type="submit" name="login" value="login" className="login">로그인</button>
                        </form>

                        <div className="find_button_area">
                            <button type="button" name="find_id" value="find_id" className="find_button">아이디 찾기</button>
                            <button type="button" name="find_pw" value="find_pw" className="find_button">비밀번호 찾기</button>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <h3 className="headfont">아직 계정이 없으신가요?</h3>

                        <NavLink to="/signup">
                            <button type="button" id="signup" className="signup">회원가입</button>
                        </NavLink>
                    </div>
                </LoginContainer>
            )}
        </>
    );
};

export default Login;
