import axios from "axios";
import React, { useCallback } from "react";
import styled from "styled-components";

const UserInfoContainer = styled.div`
    
`;


const UserInfo =()=>{

    const onSubmit=useCallback(async(e)=>{
        e.preventDefault();

        const profile_img = e.target.profile_img.value;
        const username = e.target.username.value;
        const birthday = e.target.birthday.value;
        const email = e.target.email.value;

        const formData = new FormData("userinfo_form");
        formData.append("profile_img", profile_img.length && profile_img[0].uploadedFile);
        formData.append("username", username );
        formData.append("birthday", birthday);
        formData.append("email",email );

         let json = await axios.put('http://localhost:3001/members',formData,{
            'method': 'PUT',

            headers:{
                'Content-Type': 'multipart/form-data',
            }
         });

     

    },[]);

    return(
        <UserInfoContainer>
            <form name="userinfo_form">
                <div>
                    <label>프로필이미지</label>
                    <input type="file" name="profile_img"></input>
                </div>
                <div>
                    <label>아이디</label>
                    <input disabled name="userid"></input>
                </div>
                <div>
                    <label>이름</label>
                    <input type="text" name="username"></input>
                </div>
                <div>
                    <label>생년월일</label>
                    <input name="birthday"></input>
                </div>
                <div>
                    <label>이메일</label>
                    <input type="text" name="email"></input>
                </div>
                <button onSubmit={onSubmit}>
                    저장하기
                </button>
            </form>
        </UserInfoContainer>
    )
}
export default UserInfo;