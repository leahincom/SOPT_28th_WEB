// 이미지가 없을 경우 사용하는 기본 아이콘을 불러옵니다
import EmptyImage from "../../assets/Image.svg";

import React from 'react';
import styled from "styled-components";

const CardWrap = styled.div`
  .card {
    box-sizing: border-box;
    width: 220px;
    height: 257px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    
    &__image {
      width: 220px;
      height: 148px;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      background-color: #C4C4C4;
      display: flex;
      justify-content: center;
      align-items: center;

      &--photo {
        width: inherit;
        height: inherit;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
      }
    }

    &__top {
      margin: 9px 12px;
      font-size: 14px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      &--weather {
        color: #CEA0E3;
      }
    }

    &__title {
      font-size: 18px;
      height: 25px;
      margin: 0 12px;
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    /* text 길이가 길어지면 ... 로 생략하는 방법(아래의 3가지 속성을 세트로 사용합니다)
    white-space: nowrap; -> text가 길면 보통 다음 줄로 넘어가는데, 한 줄에만 작성하여 넘치게 합니다
    overflow: hidden; -> 넘친 텍스트를 숨깁니다
    text-overflow: ellipsis; -> 넘친 텍스트를 ... 로 표시합니다 */
    &__tags {
      margin: 9px 12px;
      margin-right: 5px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #CEA0E3;

      &--tag {
        font-size: 14px;
        color: white;
        background-color: #CEA0E3;
        padding: 4px 11px;
        border-radius: 5px;
        margin-right: 7px;
        max-width: 100px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
}
`;

// 서버에 date가 20200509 형식으로 저장되어있기 때문에, 이를 "5월 9일" 형태로 반환하는 함수입니다
const getDateFormat = (date) => {
  const month = parseInt((date % 10000) / 100);
  const day = date % 100;
  
  return `${month}월 ${day}일`;
};


const Card = ({ userData }) => { // 위에서 전달한 userData를 받아옵니다
  const { date, title, image, weather, tags } = userData; // 구조분해할당으로 각각 요소들을 분리해줍니다

  return (
    <CardWrap>
      <div className="card">
      {/* card 내부에서는 각각 image, top, title, tags 요소를 세로로 나열합니다 */}
      {/* 이를 위해 row를 기준으로 다른 div 객체에 각각의 요소를 담습니다 */}
        <div className="card__image">
          {image ? ( // userData에 image가 있으면 image를 반환하고, 없으면 아이콘을 반환합니다
            <img src={image} alt="" className="card__image--photo" />
          ) : (
            <img src={EmptyImage} alt="" className="card__image--empty" />
          )}
        </div>
        <div className="card__top">
        {/* 날짜와 날씨를 보여줍니다 */}
          <div className="card__top--date">{getDateFormat(date)}</div>
          <div className="card__top--weather">{weather}</div>
        </div>
        <div className="card__title">{title}</div>
        <div className="card__tags">
          {tags.map((tag, idx) => { // tag가 list 형식으로 저장되어있기 때문에 map을 사용합니다
            return (
              <div key={idx} className="card__tags--tag">{tag}</div> // key로 index를 사용합니다
            );
          })}
        </div>
      </div>
    </CardWrap>
  );
};

export default Card;