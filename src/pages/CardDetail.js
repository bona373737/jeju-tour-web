import React, { memo } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Theme1 from "../assets/img/곶자왈.jpeg";
import Pic1 from "../assets/img/머체왓숲길.jpeg";
import Pic2 from "../assets/img/머체왓숲길(2).jpeg";
import Pic3 from "../assets/img/머체왓숲길(3).jpeg";

const CardDetailContent = styled.div`
    width: 100%;

    .carddetail_imgwrapper {
        position: relative;
        width: 100%;
        height: 30vh;

        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transform: translate(50, 50);
            object-fit: cover;
            margin: auto;
        }
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
            color: var(--black);
        }

        h1 {
            padding-bottom: 4%;
            color: var(--black);
        }

        img {
            width: 100%;
            height: auto;
            margin: 0 auto;
            position: relative;
            padding: 4% 0 4% 0;
        }

        .todetail {
                font-size: 16px;
                width: 100%;
                height: 2.4em;
                border: none;
                border-radius: 1mm;
                color: var(--white);
                background-color: var(--blue);
            }
    }
`;

const CardDetail = memo(() => {
    return (
        <CardDetailContent>
            <div className="carddetail_imgwrapper">
                <img src={Theme1} alt="theme1" />
                <div className="carddetail_title">
                    <p className="font3">제주의 걷기 좋은 길</p>
                    <h1 className="font1">곶자왈</h1>
                </div>
            </div>

            <div className="carddetail_content">
                <p className="font4">
                천천히 바람이 살랑살랑 불고 나무의 향기가 뿜어져 나오는 곶자왈을 걸어보자. 도시의 콘크리트가 아닌 나무들과 돌이 숨 쉬는 제주의 곶자왈을 피부로 느껴보자. 3시간은 걸리는 머체왓숲길부터 1시간도 안 걸리는 서광동리 곶자왈 생태탐방로까지 제주 곶자왈의 매력에 빠져보자.
                </p>
                <br /><hr /><br /><br />
                <p className="font3">2022년 재개장한</p>
                <h1 className="font1">머체왓숲길</h1>
                <p className="font4">머체왓숲길은 3코스가 있다. 1코스 머체왓숲길은 6~7킬로 2시간 30분 코스, 2코스 머체왓소롱콧길 6,3km 2시간, 3코스 서중천탐방길은 3킬로 1시간 20분이 소요된다. 지난해까지 잠시 탐방을 중단하고 휴식을 취하고 있었던 1코스가 2022년 다시 문을 열었다. 아직 많은 이들이 다녀오지 않은 1코스의 흙을 밟아보자.</p>
                <img src={Pic1} alt='pic1' />
                <p className="font4">안내센터를 시작으로 느쟁이왓다리, 방애혹, 제밤낭기원쉼터, 머체왓전망대, 산림욕치유센터, 머체왓옛집터를 지나 서중천숲터널, 올리튼물을 지난다. 현재는 사람이 살지는 않지만 옛 사람들이 살았던 흔적이 아직도 군데 군데 남아있다.</p>
                <img src={Pic2} alt='pic2' />
                <img src={Pic3} alt='pic3' />
                <p className="font4">
                1코스 머체왓길은 곶자왈만 걷는 것이 아니라 목초지, 전망대 등 다양한 볼거리가 있어 안내 리본을 잘 따라가면 무난하게 코스를 완주할 수 있다. 전망대에서 잠시 쉬어가며 새들의 지저귐도 듣고 날씨가 좋다면 해안까지 드넓게 펼쳐진 광활한 풍광도 만끽 할 수 있다. 머체왓 움막쉼터가 지나면 소롱콧길의 입구와 1코스의 끝자락을 만난다. 숲을 더 많이 느끼고 싶으면 머체왓숲길을 걷고 소롱콧길까지 가는 것도 좋은 방법이다. 머체왓의 부엽토를 밟으며 땅의 소리를 들으며 걸어보자.
                </p>
                <br />
                <NavLink to="/tab/:api/:id">
                    <button type="submit" id="signup" className="todetail">
                        상세보기
                    </button>
                </NavLink>
                {/* <p className="font3">유의사항</p>
                <p className="font4">※ 위 정보는 2022-05-24에 작성된 정보로, 이후 변경될 수 있으니 여행 하시기 전에 반드시 확인하시기 바랍니다.
                <br />
                <br />
                ※ 위 콘텐츠에 사용된 텍스트, 사진, 동영상 등의 정보는 제주관광공사가 저작권을 보유하고 있으므로 콘텐츠의 무단 사용을 금합니다.</p> */}
            </div>

            
        </CardDetailContent>
    );
});

export default CardDetail;