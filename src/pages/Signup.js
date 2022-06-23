import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Arrow from "../assets/icon/arrow.png";

const SignupStyle = styled.div`
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
                display: flex;
                padding-bottom: 2%;
            }

            label {
                font-size: 14px;
            }

            p {
                font-size: 14px;
                color: red;
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
                display: flex;
                justify-content: space-between;

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
    /** 월 입력폼 반복 돌려 구현하기 */
    const month = [];
    for (let i = 1; i < 13; i++) month.push(i);

    return (
        <SignupStyle>
            <div className="signup_content">
                <h3 className="headfont">회원가입</h3>

                <form>
                    {/* 아이디 */}
                    <div>
                    <div className="message">
                        <label htmlFor="user_id">아이디</label>&nbsp;<p>*</p>
                    </div>
                    <input
                        id="user_id"
                        name="user_id"
                        type="text"
                        className="input_text"
                    ></input>
                    <span id="err_id" className="err_msg">
                        아이디를 입력하세요.
                    </span>
                    <br />
                    </div>

                    {/* 비밀번호 */}
                    <div>
                    <div className="message">
                        <label htmlFor="user_pw">비밀번호</label>&nbsp;<p>*</p>
                    </div>
                    <input
                        id="user_pw"
                        name="user_pw"
                        type="password"
                        className="input_text"
                        placeholder="영문+숫자 조합 8~16자리"
                    ></input>
                    <span id="err_pw" className="err_msg">
                        비밀번호를 입력하세요.
                    </span>
                    <br />
                    </div>

                    {/* 비밀번호 확인 */}
                    <div>
                    <div className="message">
                        <label htmlFor="user_pw_check">비밀번호 확인</label>
                        &nbsp;<p>*</p>
                    </div>
                    <input
                        id="user_pw_check"
                        name="user_pw_check"
                        type="password"
                        className="input_text"
                    ></input>
                    <span id="err_pw_check" className="err_msg">
                        비밀번호가 일치하지 않습니다.
                    </span>
                    <br />
                    </div>

                    {/* 이름 */}
                    <div>
                    <div className="message">
                        <label htmlFor="user_name">이름</label>&nbsp;<p>*</p>
                    </div>
                    <input
                        id="user_name"
                        name="user_name"
                        type="text"
                        className="input_text"
                    ></input>
                    <span id="err_name" className="err_msg">
                        이름을 입력하세요.
                    </span>
                    <br />
                    </div>

                    {/* 생년월일 */}
                    <div className="message">
                        <label htmlFor="user_yy">생년월일</label>
                    </div>

                    <div>
                    <div className="birth_area">
                        <input
                            id="user_yy"
                            name="user_yy"
                            type="text"
                            placeholder="년(4자)"
                            area-label="년(4자)"
                            className="user_birth"
                            maxLength={4}
                        />

                        <select 
                            id="user_mm"
                            name="user_mm"
                            className="user_mm"
                            area-label="월"
                        >
                            <option value="">월</option>
                            {month.map((v, i) => {
                                return (
                                    <option value={v} key={i}>
                                        {v}
                                    </option>
                                );
                            })}
                        </select>

                        <input
                            id="user_dd"
                            name="user_dd"
                            type="text"
                            placeholder="일"
                            area-label="일"
                            className="user_birth"
                            maxLength={2}
                        />
                    </div>

                    <span id="err_birth" className="err_msg">
                        생년월일을 입력하세요.
                    </span>
                    <br />
                    </div>

                    {/* 이메일 */}
                    <div className="message">
                        <label htmlFor="user_email">이메일</label>
                    </div>

                    <div className="email_area">
                        <input
                            id="user_email"
                            name="user_email"
                            type="text"
                            className="user_email"
                            maxLength={20}
                        />

                        <select
                            id="user_email"
                            name="user_email"
                            type="text"
                            className="user_email_sel"
                            placeholder="@gmail.com"
                        >
                            <option value="gmail">@gmail.com</option>
                            <option value="gmail">@naver.com</option>
                            <option value="gmail">@daum.com</option>
                        </select>
                    </div>

                    <span id="err_email" className="err_msg">
                        이메일 주소를 입력하세요.
                    </span>
                    <br />

                    <NavLink to="/">
                        <button type="submit" id="signup" className="signup">
                            회원가입
                        </button>
                    </NavLink>
                </form>
            </div>
        </SignupStyle>
    );
};

export default Signup;
