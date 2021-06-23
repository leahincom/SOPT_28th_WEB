import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Card = ({ userData, match }) => {
  const isReadOnly = match.path === "/diary/:id" ? true : false;
  const { title, date, image, weather, tags, summary, text } = userData;

  return (
    <CardWrap>
      <p>{title}</p>
      <p>{date}</p>
      <img src={image} width="200" alt="" />
      <p>{weather}</p>
      <p>{tags}</p>
      <p>{summary}</p>
      <p>{text}</p>
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
