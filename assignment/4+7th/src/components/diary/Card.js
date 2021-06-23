import React, { useState } from "react";
import styled from "styled-components";
import CardHeader from "./CardHeader";
import CardInfo from "./CardInfo";
import { withRouter } from "react-router-dom";

const Card = ({ userData, match }) => {
  const isReadOnly = match.path === "/diary/:id" ? true : false;
  const [state, setState] = useState(userData);

  const handleChange = (e) => {
    const name = e.target.name;

    setState({
      ...state,
      [name]: e.target.value
    });
  };

  return (
    <CardWrap>
      <CardHeader
        title={state.title}
        handleChange={handleChange}
        isReadOnly={isReadOnly}
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
