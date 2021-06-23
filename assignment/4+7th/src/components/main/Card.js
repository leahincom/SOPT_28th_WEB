// 이미지가 없을 경우 사용하는 기본 아이콘을 불러옵니다
import EmptyImage from "../../assets/Image.svg";

import React from "react";
import styled from "styled-components";

// 서버에 date가 20200509 형식으로 저장되어있기 때문에, 이를 "5월 9일" 형태로 반환하는 함수입니다
const getDateFormat = (date) => {
  const month = parseInt((date % 10000) / 100);
  const day = date % 100;
  return `${month}월 ${day}일`;
};

const Card = ({ userData, onClickFunc }) => {
  const { date, title, image, weather, tags } = userData;

  return (
    <CardWrap>
      <div className="card" onClick={onClickFunc}>
        <div className="card__image">
          {image ? (
            <img src={image} alt="" className="card__image--photo" />
          ) : (
            <img src={EmptyImage} alt="" className="card__image--empty" />
          )}
        </div>
        <div className="card__top">
          <div className="card__top--date">{getDateFormat(date)}</div>
          <div className="card__top--weather">{weather}</div>
        </div>
        <div className="card__title">{title ? title : "제목 없음"}</div>
        <div className="card__tags">
          {tags.map((tag, index) => {
            return (
              <div key={index} className="card__tags--tag">
                {tag}
              </div>
            );
          })}
        </div>
      </div>
    </CardWrap>
  );
};

export default Card;

// text 길이가 길어지면 ... 로 생략하는 방법(아래의 3가지 속성을 세트로 사용합니다)
// white-space: nowrap; -> text가 길면 보통 다음 줄로 넘어가는데, 한 줄에만 작성하여 넘치게 합니다
// overflow: hidden; -> 넘친 텍스트를 숨깁니다
// text-overflow: ellipsis; -> 넘친 텍스트를 ... 로 표시합니다

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
      background-color: #c4c4c4;
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
        color: #cea0e3;
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

    &__tags {
      margin: 9px 12px;
      margin-right: 5px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #cea0e3;

      &--tag {
        font-size: 14px;
        color: white;
        background-color: #cea0e3;
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
