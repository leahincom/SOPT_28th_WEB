import styled from "styled-components";
import React, { useState } from "react";
import { createCardData } from "../../lib/api";
import { withRouter } from "react-router-dom";
import CardHeader from "./CardHeader";
import CardInfo from "./CardInfo";

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

// 주소에 따라 다르게 렌더링하므로 match 사용!
// rawData(data.json에 저장된 내용 전체), year, month를 App.js에서 가져옵니다
const Card = ({ data, match, history, setRawData, rawData, year, month }) => {
  const [state, setState] = useState(data);
  const isReadOnly = match.path === "/diary/:id" ? true : false;
  const id = parseInt(match.params.id);

  // 카드 내용을 수정하는 함수
  const handleEdit = async () => {
    const index = rawData[year][month].findIndex((data) => data.id === id);
    const newList = rawData[year].filter((data) => data); // filter 함수는 새로운 배열을 반환하기 때문에, 현재 연도에 해당하는 전체 배열을 가져옵니다
    newList[month][index] = state; // 현재까지 수정된 state를 원본 데이터에 반영합니다
    // newList를 따로 만드는 이유? rawData가 state의 readOnly 값이기 때문에 newList로 값을 복사해서 사용합니다

    const data = await createCardData({ ...rawData, [year]: newList }); // 기존의 데이터 + newList를 결합한 새로운 객체로 API를 호출합니다
    // PUT method가 json-server에는 정의되어 있지 않으므로 CREATE (POST) 사용해서 새로운 객체 생성
    history.goBack(); // 카드가 수정된 이후에는 이전('/diary/:id')으로 돌아갑니다
  };

  // 카드를 삭제하는 함수
  const handleDelete = async () => {
    // filter 함수를 사용해서 현재 선택된 카드의 id(match.params.id)와 원본 데이터를 비교합니다
    // 현재 선택된 카드의 id와 일치하지 않는 데이터만 반환하여 filteredList에 저장합니다
    // ex) rawData[2021][5]의 리스트에서 id가 6번인 카드만 제외시킵니다
    const filteredList = rawData[year][month].filter((data) => data.id !== id);

    // filteredList를 원본 데이터에 적용합니다
    // ex) rawData[2021][5]에 id가 6번인 카드만 제외된 새로운 배열(filteredList)을 저장
    const newList = rawData[year].filter((data) => data); // 수정함수와 마찬가지로 newList에 현재 연도의 전체 데이터를 복사합니다
    newList[month] = filteredList; // filteredList는 현재 연도 월 데이터이기 때문에 newList[month]의 값에 덮어씌웁니다

    const data = await createCardData({ ...rawData, [year]: newList }); // 기존의 데이터 + newList를 결합한 새로운 객체로 API 함수 호출
    history.goBack(); // 카드가 삭제된 이후에는 이전('/')으로 돌아갑니다
  };

  const handleChange = (e) => {
    const name = e.target.name;

    setState({
      ...state,
      [name]: e.target.value
    });
  };

  return (
    <CardWrap>
      {/* 수정 완료 버튼이 헤더에 있기 때문에 handleEdit 함수를 CardHeader로 전달합니다 */}
      {/* 삭제 버튼이 헤더에 있기 때문에 handleDelete 함수를 CardHeader로 전달합니다 */}
      <CardHeader
        id={id}
        title={state.title}
        isReadOnly={isReadOnly}
        handleChange={handleChange}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <CardInfo
        data={state}
        isReadOnly={isReadOnly}
        handleChange={handleChange}
      />
      <textarea
        placeholder="오늘을 기록해 주세요"
        readOnly={isReadOnly}
        value={state.text}
        name="text"
        onChange={handleChange}
      />
    </CardWrap>
  );
};

export default withRouter(Card);
