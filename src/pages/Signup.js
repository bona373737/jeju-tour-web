import React from 'react';
import styled from "styled-components";

const SignupStyle = styled.div`
    width: 100%;
    padding-top: 20%;

    h3 {
        padding-bottom: 12%;
        display: flex;
        justify-content: center;
    }

    p {
        color: red;   
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

            .input_text {
                width: 90%;
                height: 1.5em;
                padding: 5%;
                border: solid 1px #eee;
                border-radius: 1mm;
            }
        }
    }
`;

const Signup = () => {
    return (
        <SignupStyle>
            <div className='signup_content'>
                <h3 className="headfont">회원가입</h3>

                <form>
                    <p>아이디</p><p>*</p>
                    <input type="text"
                        className="input_text"></input>
                </form>
            </div>
        </SignupStyle>
    );
};

export default Signup;