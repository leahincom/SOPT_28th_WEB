// Card 컴포넌트를 불러옵니다. Main 컴포넌트는 Main page이기 때문에 상위 요소입니다
import Card from "../components/main/Card";
import styled from "styled-components";
import { useState } from "react";

const Main = () => {
  // useState를 사용하여 전체 데이터 값을 저장합니다. 여기서는 테스트를 위해 초기값으로 더미 데이터를 넣었습니다!
  // 이후에는 서버에서 API 요청 결과값을 받으면 userData에 저장합니다.
  const [userData, setUserData] = useState({
    id: 1,
    date: 20210501,
    title: "다이어리 제목 어쩌고 저쩌고",
    image: "",
    weather: "맑음",
    tags: ["태그1", "태그2"]
  });

  return (
    <MainWrap>
      <Card userData={userData} />
    </MainWrap>
  );
};

export default Main;

const MainWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  row-gap: 25px;
`;
