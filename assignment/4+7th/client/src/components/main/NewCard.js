import styled from "styled-components";
import React from "react";
import { createCardData } from "../../lib/api";

const NewCardWrap = styled.div`
  .card {
    box-sizing: border-box;
    width: 220px;
    height: 257px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &__text {
      font-size: 20px;
      color: #cea0e3;
    }
    &:hover {
      cursor: pointer;
    }
  }
`;

const getDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1 + "";
  const day = now.getDate() + "";
  const monthF = month.length < 2 ? 0 + month : month;
  const dayF = day.length < 2 ? 0 + day : day;
  return parseInt(year + monthF + dayF);
};

const NewCard = ({ id, rawData, year, month, setUserData }) => {
  const createCard = async () => {
    const cardForm = {
      id: id,
      date: getDate(),
      title: "",
      image: "",
      weather: "",
      tags: [],
      summary: "",
      text: ""
    };
    rawData[year][month].push(cardForm);
    const data = await createCardData(rawData);
    data[year] && setUserData(data[year][month]);
  };

  return (
    <NewCardWrap>
      <div className="card" onClick={createCard}>
        <p className="card__text">+ 추가해 주세요</p>
      </div>
    </NewCardWrap>
  );
};

export default NewCard;
