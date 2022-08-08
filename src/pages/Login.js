/**
 * @Filename: Login.js
 * @Author: 웹퍼블작업_이재이(loveleej87@gmail.com)
 *          js기능구현_구나래(nrggrnngg@gmail.com)
 * @Description: 회원 로그인 페이지
 */
import React, { useCallback } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import regexHelper from '../libs/RegexHelper.js';
import axios from 'axios';

// import bcrypt from 'bcryptjs';

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
    /** 로그인 정보 세션으로 전송하기 */
    const loginUser = useCallback(async(e) => {
        e.preventDefault();
        
        // 입력한 아이디, 비밀번호 추출하기
        const userid = e.target.userid.value;
        let password = e.target.password.value;

        // 입력값에 대한 유효성 검사
        try { 
            regexHelper.value(userid, '아이디를 입력하세요.');
            regexHelper.value(password, '비밀번호를 입력하세요.');
        } catch(err) {
            alert(err.message);
            e.target.focus();
            return;
        }

        // 비밀번호 암호화_bcrypt모듈 사용 --> 모듈 다시 찾기...

        try {
            // Ajax post 요청 보내기
            // --> 백엔드가 전달한 결과값이 response.data에 저장
            const response = await axios.post('http://itpaper.co.kr:9910/session/login', {
                userid: userid,
                password: password
            });
        } catch(err) {
            const errMsg = `[${err.response.status}]${err.response.statusText}`;
            console.error(errMsg);
            alert('로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.');
        }
    }, []);

    return (
        <LoginContainer>
            <div className="login_content">
                <h3 className="headfont">로그인</h3>
                <form method="post" action="http://itpaper.co.kr:9910/session/login" id="before-login">
                    <input
                        type="text"
                        name="userid"
                        className="input_text"
                        placeholder="아이디"
                    ></input>
                    <span>아이디를 입력하세요.</span>
                    <br />
                    <input
                        type="password"
                        name="password"
                        className="input_text"
                        placeholder="비밀번호"
                    ></input>
                    <span>비밀번호를 입력하세요.</span>
                    <br />
                    <button
                        type="submit"
                        name="login"
                        value="login"
                        className="login"
                        onSubmit={loginUser}
                    >
                        로그인
                    </button>
                </form>

                <div className="find_button_area">
                    <button
                        type="button"
                        name="find_id"
                        value="find_id"
                        className="find_button"
                    >
                        아이디 찾기
                    </button>
                    <button
                        type="button"
                        name="find_pw"
                        value="find_pw"
                        className="find_button"
                    >
                        비밀번호 찾기
                    </button>
                </div>
                <br />
                <br />
                <br />
                <br />
                <h3 className="headfont">아직 계정이 없으신가요?</h3>

                <NavLink to="/signup">
                    <button 
                        type="button"
                        id="signup"
                        className="signup"
                    >
                        회원가입
                    </button>
                </NavLink>
            </div>
        </LoginContainer>
    );
};

export default Login;
