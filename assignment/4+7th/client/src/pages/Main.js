// Card 컴포넌트를 불러옵니다. Main 컴포넌트는 Main page이기 때문에 Card의(를 담고 있는) 상위 요소입니다
import Card from "../components/main/Card";
import { getCardData } from "../lib/api";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NewCard from "../components/main/NewCard";
import { withRouter } from "react-router-dom";

const MainWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  row-gap: 25px;
`;

const Main = ({ year, month, history }) => {
  // useState를 사용하여 전체 데이터 값을 저장합니다.
  // 이전에는 테스트를 위해 초기값으로 더미 데이터를 넣었지만,
  // 이후에는 서버에서 API 요청 결과값을 받아 userData에 저장하므로
  // 지금은 초기값을 null로 설정합니다
  const [userData, setUserData] = useState(null);
  const [rawData, setRawData] = useState(null);

  useEffect(() => {
    // useEffect 내부에서 api 요청을 합니다
    (async () => {
      // 익명 async 함수를 선언함과 동시에 실행합니다 // IFFY
      const data = await getCardData();
      setRawData(data);
      // 해당 연도의 데이터가 있다면, 해당 연도 월의 데이터를 저장합니다
      data[year] && setUserData(data[year][month]);
    })();
  }, [year, month]); // dependencies가 year, month 이므로, year와 month가 변경되면 api를 다시 요청합니다

  return (
    userData && (
      <MainWrap>
        {userData &&
          userData.map((data, index) => {
            return (
              <Card
                key={index}
                userData={data}
                onClickFunc={() => history.push(`/diary/${data.id}`)}
              />
            );
          })}
        <NewCard
          rawData={rawData}
          year={year}
          month={month}
          setUserData={setUserData}
          id={userData ? userData.length + 1 : 1}
        />
      </MainWrap>
    )
  );
};

export default withRouter(Main);
