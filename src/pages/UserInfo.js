/**
 * @FileName : UserInfo.js
 * @description : 회원정보수정_생년월일,이메일,프로필사진
 *                아이디,사용자이름은 변경 불가
 */

import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import FormData from 'form-data';

const UserInfoContainer = styled.div`
    width: 80%;
    margin: auto;

    .input_wrap{
        margin: 10px 0;
        display: flex;
        flex-direction: column;
    }
    .profile_img_wrap{
        input{
            display: none;
        }
        img{
            display: block;
            background-color: tomato;
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }
    }
    
`;


const UserInfo =()=>{
    
    //UserInfo페이지 마운트될때 session에 저장되어 있는 로그인한 사용자의 회원정보 가져오기
    // useEffect(()=>{
    //     useDispatch();
    // },[])


    //회원정보 변경사항 저장버튼 클릭이벤트
    const onSubmit = useCallback(async(e)=>{
        e.preventDefault();

        //사용자 입력값 변수저장
        const current = e.target;
        const birthday = current.birthday.value;
        const email = current.email.value;
        const profile_img = current.profile_img.files[0];

        //formData객체에 사용자 입력값 추가
        const formData = new FormData();
        formData.append("birthday", birthday);
        formData.append("email",email );
        formData.append("profile_img", profile_img);

        //formData객체는 console.log로 객체의 내용물을 출력해 확인 할 수 없다.
        //방법1.
        // for (var key of formData.entries()) {
		// 	console.log(key[0] + ':' + key[1])
		// }
        //방법2.
        // console.log(formData.get("birthday"))

        //회원정보의 일부만 변경진행_patch요청전송
        let json = null;
        try {
            json = await axios.patch('/members',formData,{
                headers:{
                    'Content-Type': 'multipart/form-data',
                }
            });
        } catch (error) {
            
        }
     
    },[]);

    return(
        <UserInfoContainer>
            <form name="userinfo_form" onSubmit={onSubmit}>
                <div className="input_wrap profile_img_wrap">
                    <label>
                        <img src="" alt="profile_img"></img>
                        <input type="file" name="profile_img"></input>
                    </label>
                </div>
                <div className="input_wrap">
                    <label>아이디</label>
                    <input name="userid" disabled></input>
                </div>
                <div className="input_wrap">
                    <label>이름</label>
                    <input type="text" name="username" disabled></input>
                </div>
                <div className="input_wrap">
                    <label>생년월일</label>
                    <input type="date" name="birthday"></input>
                </div>
                <div className="input_wrap">
                    <label>이메일</label>
                    <input type="text" name="email"></input>
                </div>
                <button >
                    저장하기
                </button>
            </form>
        </UserInfoContainer>
    )
}
export default UserInfo;