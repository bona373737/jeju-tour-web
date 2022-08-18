/**
 * @Filename: Signup.js
 * @Author: 웹퍼블작업_이재이(loveleej87@gmail.com)
 *          js기능구현_구본아(bona373737@gmail.com)
 * @Description: 회원 가입 페이지
 *               axios-hooks모듈 사용
 *               비밀번호 암호화_crypto-js사용_양방향암호화하여 전송
 */
import React, { useCallback } from "react";
import styled from "styled-components";
import RegexHelper from '../libs/RegexHelper';
import { useNavigate } from 'react-router-dom';

import crypto from 'crypto-js';
import axios from "axios";
// import Arrow from "../assets/icon/arrow.png";

const SignupContainer = styled.div`
    width: 100%;
    padding-top: 20%;
    padding-bottom: 20%;

    h3 {
        padding-bottom: 12%;
        display: flex;
        justify-content: center;
    }

    .signup_content {
        width: 80%;
        display: flex;
        margin: 0 auto;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;

        form {
            width: 100%;

            .message {
                /* display: flex; */
                padding-bottom: 2%;

                span{
                    font-size: 14px;
                    color: red;

                }
            }

            label {
                font-size: 14px;
            }

            /* select 기본 스타일 제거 */
            select {
                appearance: none;
                -moz-appearance: none; /* Firefox */
                -webkit-appearance: none; /* Safari and Chrome */
                color: var(--gray)
            }

            /* select IE 기본 스타일 제거 */
            select::-ms-expand {
                display: none; /* IE 10, 11 */
            }

            .err_msg {
                color: red;
                display: flex;
                font-size: 14px;
                padding: 4% 0 4% 0;
            }

            .input_text {
                width: 90%;
                height: 16px;
                padding: 5%;
                border: solid 1px #eee;
                border-radius: 1mm;
            }

            .birth_area {
                width: 100%;
                display: flex;
                justify-content: space-between;

                .user_birth {
                    width: 20%;
                    height: 16px;
                    padding: 5%;
                    border: solid 1px #eee;
                    border-radius: 1mm;
                }

                .user_mm {
                    width: 30%;
                    height: auto;
                    padding: 4%;
                    border: solid 1px #eee;
                    border-radius: 1mm;
                }
            }

            .email_area {
                width: 100%;
                
                .input_box{
                    display: flex;
                    justify-content: space-between;
                }

                .user_email {
                    width: 40%;
                    height: 16px;
                    padding: 5%;
                    border: solid 1px #eee;
                    border-radius: 1mm;
                }

                .user_email_sel {
                    width: 45%;
                    height: auto;
                    padding: 5%;
                    border: solid 1px #eee;
                    border-radius: 1mm;
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
        }
    }
`;

const Signup = () => {
    const navigate = useNavigate();

    /** 월 입력폼 반복 돌려 구현하기 */
    const month = [];
    for (let i = 1; i < 13; i++) month.push(i);

    //사용자 입력값 담을 변수정의
    let userid = null;
    let password = null;
    let passwordCheck = null;
    let username = null;
    let birthday = null;
    let email = null;

    /**input입력칸 onBlur 이벤트 */
    const onBlur = useCallback(e => {
        try {            
            switch (e.target.id) {
                case 'userid':
                    RegexHelper.value(e.target.value,'아이디를 입력해주세요');
                    RegexHelper.engNum(e.target.value,'아이디는 영어,숫자만 가능합니다.');
                break;
                case 'password':
                    RegexHelper.value(e.target.value,'비밀번호를 입력해주세요');
                break;
                case 'passwordCheck':
                    RegexHelper.value(e.target.value,'비밀번호 확인을 입력해주세요');
                break;
                case 'username':
                    RegexHelper.value(e.target.value,'성함를 입력해주세요');
                break;
                case 'birth_year':
                    if(e.target.value){
                        RegexHelper.value(e.target.value,'출생년도를 입력해주세요');
                    }
                break;
                case 'birth_month':
                    if(e.target.value){
                        RegexHelper.value(e.target.value,'출생 월을 선택해주세요');
                    }
                break;
                case 'birth_day':
                    if(e.target.value){
                        RegexHelper.value(e.target.value,'출생 일자를 입력해주세요');
                    }
                break;
                case 'email':
                    RegexHelper.value(e.target.value, '이메일을 입력해주세요.');
                    RegexHelper.engNum(e.target.value, '이메일은 영어,숫자만 가능합니다.');
                break;
                default:
                break;
            }
                    
        } catch (error) {
            console.log(error);
            throw error;
        }
    },[]);

    /**submit이벤트 : 전체입력값 유효성검사 재실행, 입력값 post전송 */
    const onSubmit = async(e) => {
        e.preventDefault();

        const current = e.target;
        userid = current.userid.value;
        password = current.password.value;
        passwordCheck = current.passwordCheck.value;
        username = current.username.value;
        birthday = current.birth_year.value+'-'+current.birth_month.value+'-'+current.birth_day.value;
        email = current.input_email.value+current.input_domain.value;
        
        /**유효성검사*/
        try {
            RegexHelper.value(userid,'아이디를 입력해주세요');
            RegexHelper.engNum(userid,'아이디는 영어,숫자만 가능합니다.');
            RegexHelper.value(password,'비밀번호를 입력해주세요');          
            RegexHelper.value(passwordCheck,'비밀번호 확인을 입력해주세요');
            RegexHelper.value(username,'성함를 입력해주세요');
            if (birthday) {
                RegexHelper.value(birthday,'생년월일을 입력해주세요');
            };
            RegexHelper.value(email, '이메일을 입력해주세요.');
            RegexHelper.email(email,'이메일 형식이 잘못되었습니다.');

        } catch (error) {
            console.log(error);
            throw error;
        }

        /**비밀번호 암호화_crypto-js모듈 사용 */
        // AES알고리즘 사용 암호화
        const secretKey = process.env.REACT_APP_CRYPTO_KEY;
        password = crypto.AES.encrypt(password, secretKey).toString();
        passwordCheck = crypto.AES.encrypt(passwordCheck, secretKey).toString();
        
        /**유효성검사 완료 후 입력값 변수로 저장 */
        const input_data={
            userid : userid,
            password : password,
            passwordCheck: passwordCheck,
            username : username,
            birthday : birthday,
            email : email
        }

        let json = null;
        try {
            json = await axios.post("/members",input_data)
        } catch (error) {
            console.log(error);
            window.alert(`[ ${e.response.status} ] ${e.response.statusText} \n ${e.message}`);
        }
        window.alert(json.data.item + "님 회원가입 완료")
        console.log(json);
        navigate("/");
    };

    return (
        <SignupContainer>
            <div className="signup_content">
                <h3 className="headfont">회원가입</h3>

                <form onSubmit={onSubmit}>
                    {/* 아이디 */}
                    <div>
                        <label htmlFor="userid" className="message">아이디 <span>*</span></label>
                        <input id="userid" name="userid" type="text" onBlur={onBlur} className="input_text" ></input>
                        <span id="err_id" className="err_msg"> 아이디를 입력하세요. </span>
                        <br />
                    </div>

                    {/* 비밀번호 */}
                    <div >
                    <label htmlFor="passord" className="message">비밀번호 <span>*</span></label>
                    <input id="password" name="password" type="password" onBlur={onBlur} className="input_text" placeholder="영문+숫자 조합8~16자리"></input>
                    <span id="err_pw" className="err_msg"> 비밀번호를 입력하세요. </span>
                    <br />
                    </div>

                    {/* 비밀번호 확인 */}
                    <div>
                        <label htmlFor="passordCheck" className="message">비밀번호 확인<span>*</span></label>
                        <input id="passwordCheck" name="passwordCheck" type="password" onBlur={onBlur} className="input_text"/>
                        <span id="err_pw_check" className="err_msg"> 비밀번호가 일치하지 않습니다.</span>
                        <br />
                    </div>

                    {/* 이름 */}
                    <div>
                        <label htmlFor="username" className="message">이름<span>*</span></label>
                        <input id="username" name="username" type="text" className="input_text" onBlur={onBlur}></input>
                        <span id="err_name" className="err_msg"> 이름을 입력하세요.</span>
                        <br />
                    </div>

                    {/* 생년월일 */}
                    <div>
                        <label htmlFor="birth_year" className="message">생년월일</label>
                        <div className="birth_area">
                            <input id="birth_year" name="birth_year" type="text" placeholder="년(4자)" className="user_birth" maxLength={4} onBlur={onBlur} />
                            <select id="birth_month" name="birth_month" className="user_mm" placeholder="월" onBlur={onBlur}>
                                <option value="">월</option>
                                {month.map((v, i) => {
                                    return (
                                        <option value={v} key={i}>
                                            {v}
                                        </option>
                                    );
                                })}
                            </select>
                            <input id="birth_day" name="birth_day" type="text" placeholder="일" className="user_birth" maxLength={2} onBlur={onBlur}/>
                        </div>
                        <span id="err_birth" className="err_msg"> 생년월일을 입력하세요. </span>
                        <br />
                    </div>

                    {/* 이메일 */}
                    <div className="email_area">
                        <label htmlFor="user_email" className="message">이메일</label>
                        <div className="input_box">
                            <input id="input_email" name="input_email" type="text"  onBlur={onBlur} className="user_email" maxLength={20}/>
                            <select id="input_domain" name="input_domain" type="text" className="user_email_sel">
                                {/* 메일 주소 직접 입력란 추가해야함 */}
                                <option value="@gmail.com">@gmail.com</option>
                                <option value="@naver.com">@naver.com</option>
                                <option value="@daum.com">@daum.com</option>
                            </select>
                        </div>
                    </div>
                    <span id="err_email" className="err_msg"> 이메일 주소를 입력하세요.</span>
                    <br />

                    <button type="submit" id="signup" className="signup">
                        회원가입
                    </button>
                </form>
            </div>
        </SignupContainer>
    );
};

export default Signup;
