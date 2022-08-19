/** 
 * @Filename: ListItem.js
 * @Author: 구본아(bona373737@gmail.com)
 * @Description: 여행지, 숙소, 음식 데이터 리스트 아이템 컴포넌트
 *               클릭된 리스트를 식별할 수 있도록
 *               props로 클릭된 리스트의 id를 ListDetail.js에 전달한다.
 */
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ListItemContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 15px 0;
    line-height: 20px;

    a{
        height: 100px;
        display: flex;

        .img_wrap{
            width: 30%;
            background-color: var(--blue);

        }
        .text_wrap{
            width: 70%;

        }

    }
`;

const ListItem = ({item,api}) => {   

    // const rawData = item.sbst.data;
    // rawData == 타입이 뭔지
    // 16진수 헥사 바이트 base64
    

    // var string = new TextDecoder().decode(binaryData);
    // console.log(string);

    // blob.text();
    // console.log(blob.text())

    // const reader = new FileReader();
    // const nana = reader.readAsText(blob);
    // console.log(reader);

    return (
        <ListItemContainer>
            {/* id---> 여행지정보의 primary key값으로 넣어주기 */}
            <NavLink to={'/tab/'+api+'/'+item.place_no} state={{item:item}}>
                <div className='img_wrap'>
                    <img src=''/>
                </div>
                <div className='text_wrap'>
                    <p>{item?.place_no}</p>
                    <p>{item?.title}</p>
                    <p>{item?.address}</p>
                    <p>{item?.phoneno}</p>
                    <p>{item?.introduction}</p>
                </div>
            </NavLink>
        </ListItemContainer>
    );
};

export default ListItem;