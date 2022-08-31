/**
 * @Filename: Login.js
 * @Author: 웹퍼블작업_이재이(loveleej87@gmail.com)
 *          js기능구현_구나래(nrggrnngg@gmail.com)
 * @Description: 회원 로그인 페이지
 *               비밀번호 암호화_crypto-js사용_양방향암호화하여 전송
 */
import React, { useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import crypto from 'crypto-js';
import { useSelector, useDispatch } from "react-redux";
import { postLogin } from '../slices/MemberSlice';

import regexHelper from '../libs/RegexHelper';
import Spinner from '../components/Spinner';

const LoginContainer = styled.div`
    width: 100%;
    padding-top: 5%;
    padding-bottom: 20%;

    h3 {
        padding: 15% 0;
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
            }

            .login {
                margin-top: 10%;
            }

            .err_msg {
                color: red;
                display: flex;
                font-size: 14px;
                padding: 4% 0 4% 0;
                margin-bottom: 2%;
            }
        }

        p {
            color: red;
            padding-top: 4%;
        }
    }

    .find_btn_area {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;

        .find_btn {
            margin: 5% 0;
            width: 48%;
        }
    }
`;

const Login = () => {
    // 페이지 강제 이동 함수 생성
    const navigate = useNavigate();
    // 리덕스 로그인 세션 상태 관리
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.member);

    /** input 입력칸 onBlur 이벤트 */
    const onBlur = useCallback(e => {
        // 입력값에 대한 유효성 검사
        try {
            switch(e.target.name) {
                case 'userid':
                    regexHelper.value(e.target.value, '아이디를 입력해주세요.');
                    regexHelper.engNum(e.target.value,'아이디는 영어, 숫자만 입력 가능합니다.');
                break;
                case 'password':
                    regexHelper.value(e.target.value, '비밀번호를 입력해주세요');
                break;
                default:
                break;
            }
        } catch (err) {
            console.log(err);
            throw err;
        }
    }, []);

    /** form submit 이벤트 */
    const loginSubmit = useCallback(e => {
        e.preventDefault();

        // 입력값 가져오기
        const current = e.target;
        const userid = current.userid.value;
        let password = current.password.value;

        /** 비밀번호 암호화_crypto-js모듈 사용 */
        // AES알고리즘 사용 --> 사용자 입력값 암호화
        const secretKey = process.env.REACT_APP_CRYPTO_KEY;
        password = crypto.AES.encrypt(password, secretKey).toString();
    

        // 리덕스를 통해 로그인 요청
        dispatch(postLogin({
            userid: userid,
            password: password,
        }))
        .unwrap()
        .then(() => {
            // 로그인 성공 시
            navigate('/');
        })
        .catch(err => {
            // 로그인 실패 시
            alert(err.data.rtmsg);
        });
    }, [dispatch, navigate]);

    return (
        <>
            <Spinner visible={loading}/>
            
            <LoginContainer>
                <div className="login_content">
                    <h3 className="font2">로그인</h3>
                    <form onSubmit={loginSubmit}>
                        <input type="text" name="userid" onBlur={onBlur} className="input_text" placeholder="아이디"></input>
                        <span id="err_id" className="err_msg">아이디를 입력하세요.</span>

                        <input type="password" name="password" onBlur={onBlur} className="input_text" placeholder="비밀번호"></input>
                        <span id="err_pw" className="err_msg">비밀번호를 입력하세요.</span>

                        <button type="submit" name="login" className="btn_act">로그인</button>
                    </form>

                    <div className="find_btn_area">
                        <button type="button" name="find_id" className="find_btn btn_dis">아이디 찾기</button>
                        <button type="button" name="find_pw" className="find_btn btn_dis">비밀번호 재발급</button>
                    </div>

                    <h3 className="font2">아직 계정이 없으신가요?</h3>

                    <NavLink to="/signup">
                        <button type="button" name="signup" className="btn_act">회원가입</button>
                    </NavLink>
                </div>
            </LoginContainer>
        </>
    );
};

export default Login;
