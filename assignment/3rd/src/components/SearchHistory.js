import React, { useState, useEffect } from "react";
import styled from "styled-components";

const HistoryWrap = styled.div`
  width: 30%;
  height: 100%;
  background-color: #221d37;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .history_title {
    width: 100%;
    height: 20%;
    color: #352c54;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .history {
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* color: white;
    font-size: 20px;
    text-align: center; */
  }
`;

const SearchHistory = ({ userData }) => {
  const [historyList, setHistoryList] = useState([]);

  const addUser = () => {
    console.log(userData);
    if (userData && userData.data !== null)
      setHistoryList(...historyList, data.login);
  };

  useEffect(addUser, []);

  const { status, data } = userData; // 구조분해할당을 통해 status와 data를 따로 가져옵니다.

  switch (
    status // status의 값에 따라 다른 컴포넌트를 불러옵니다.
  ) {
    case "pending": // 아직 Promise 결과가 도착하지 않은 경우
      return (
        <HistoryWrap>
          <div className="history_title">Search History</div>
          <div style={{ color: "white", fontSize: "24px" }}>Loading...</div>;
        </HistoryWrap>
      );
    case "resolved": // API 요청에 성공하여 데이터가 정상적으로 도착한 경우
      return (
        <HistoryWrap>
          <div className="history_title">Search History</div>
          <div className="history">{historyList}</div>
        </HistoryWrap>
      );
    case "rejected": // API 요청에 실패한 경우
    case "idle":
    default:
      return (
        <HistoryWrap>
          <div className="history_title">Search History</div>
          <div></div>;
        </HistoryWrap>
      );
  }
};

export default SearchHistory;
