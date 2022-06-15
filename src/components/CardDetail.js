import React, { memo } from "react";
import styled from "styled-components";

import Theme1 from "../assets/img/곶자왈.jpeg";
import Pic1 from "../assets/img/머체왓숲길.jpeg";
import Pic2 from "../assets/img/머체왓숲길(2).jpeg";
import Pic3 from "../assets/img/머체왓숲길(3).jpeg";

const CardDetailContent = styled.div`
    width: 100%;

    img {
        width: auto;
        height: 30vh;
        overflow: hidden;
        margin: 0 auto;
        position: absolute;
    }

    .carddetail_title {
        width: 80%;
        height: 18vh;
        margin: 0 auto;
        position: relative;
        padding-top: 6%;
        padding-bottom: 20%;

        p,
        h1 {
            color: var(--white);
        }

        p {
            padding-top: 4%;
            padding-bottom: 4%;
        }
    }

    .carddetail_content {
        width: 80%;
        margin: 0 auto;
        padding-top: 6%;
        padding-bottom: 20%;

        p {
            padding-top: 4%;
            padding-bottom: 4%;
            
        }

        h1 {
            padding-bottom: 4%;
        }

        img {
            width: 100%;
            height: auto;
            margin: 0 auto;
            position: relative;
            padding: 4% 0 4% 0;
        }

        
    }
`;

const CardDetail = memo(() => {
    return (
        <CardDetailContent>
            <img src={Theme1} alt="theme1" />
            <div className="carddetail_title">
                <p className="subfont">제주의 걷기 좋은 길</p>
                <h1 className="menufont">곶자왈</h1>
            </div>

            <div className="carddetail_content">
                <p className="subfont">2022년 재개장한</p>
                <h1 className="menufont">머체왓숲길</h1>
                <p className="contentfont">머체왓숲길은 3코스가 있다. 1코스 머체왓숲길은 6~7킬로 2시간 30분 코스, 2코스 머체왓소롱콧길 6,3km 2시간, 3코스 서중천탐방길은 3킬로 1시간 20분이 소요된다. 지난해까지 잠시 탐방을 중단하고 휴식을 취하고 있었던 1코스가 2022년 다시 문을 열었다. 아직 많은 이들이 다녀오지 않은 1코스의 흙을 밟아보자.</p>
                <img src={Pic1} alt='pic1' />
                <p className="contentfont">안내센터를 시작으로 느쟁이왓다리, 방애혹, 제밤낭기원쉼터, 머체왓전망대, 산림욕치유센터, 머체왓옛집터를 지나 서중천숲터널, 올리튼물을 지난다. 현재는 사람이 살지는 않지만 옛 사람들이 살았던 흔적이 아직도 군데 군데 남아있다.</p>
                <img src={Pic2} alt='pic2' />
                <img src={Pic3} alt='pic3' />
                <p className="subfont">유의사항</p>
                <p className="contentfont">※ 위 정보는 2022-05-24에 작성된 정보로, 이후 변경될 수 있으니 여행 하시기 전에 반드시 확인하시기 바랍니다.
                <br />
                <br />
                ※ 위 콘텐츠에 사용된 텍스트, 사진, 동영상 등의 정보는 제주관광공사가 저작권을 보유하고 있으므로 콘텐츠의 무단 사용을 금합니다.</p>
            </div>

            
        </CardDetailContent>
    );
});

export default CardDetail;