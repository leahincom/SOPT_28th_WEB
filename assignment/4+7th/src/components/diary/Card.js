import React, { useState } from "react";
import styled from "styled-components";
import CardHeader from "./CardHeader";
import CardInfo from "./CardInfo";
import { withRouter } from "react-router-dom";
import { createCardData } from "../../lib/api";

const Card = ({ userData, match, history, rawData, year, month }) => {
  const isReadOnly = match.path === "/diary/:id" ? true : false;
  const [state, setState] = useState(userData);
  const id = parseInt(match.params.id);

  const handleChange = (e) => {
    const name = e.target.name;

    setState({
      ...state,
      [name]: e.target.value
    });
  };

  const handleEdit = async () => {
    // const index = rawData[year][month].findIndex((data) => data.id === id);

    // newList를 따로 만드는 이유? rawData가 state의 readOnly 값이기 때문에 newList로 값을 복사해서 사용합니다
    const newList = rawData[year].filter((data) => data); // 새로운 배열 반환
    rawData[month][id] = state;
    const data = await createCardData(rawData);
    history.goBack();
  };

  return (
    <CardWrap>
      <CardHeader
        title={state.title}
        handleChange={handleChange}
        isReadOnly={isReadOnly}
        handleEdit={handleEdit}
      />
      <CardInfo
        userData={state}
        isReadOnly={isReadOnly}
        handleChange={handleChange}
      />
      <textarea
        placeholder="오늘을 기록해 주세요"
        isReadOnly={isReadOnly}
        value={state.text}
        name="text"
        onChange={handleChange}
      />
    </CardWrap>
  );
};

export default withRouter(Card);

const CardWrap = styled.div`
  width: 785px;
  height: 600px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  textarea {
    width: 642px;
    height: 219px;
    background-color: #efefef;
    font-size: 18px;
    resize: none;
    font-family: Roboto;
    border: none;
    padding: 14px;
    box-sizing: border-box;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #c4c4c4;
    }
  }
`;
