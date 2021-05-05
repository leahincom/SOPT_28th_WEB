import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Result from "./components/Result";
import { getUserData, getRepoData } from "./lib/api";
import styled from "styled-components";

// css와 똑같이 작성하면 됩니당!
const AppBlock = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    color: white;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

function App() {
  // 처음에는 data만 저장했지만, status도 함께 저장합니다
  const [userData, setUserData] = useState({
    status: "idle",
    data: null
  }); // useState 초기값 null로 설정

  const [repoData, setRepoData] = useState({
    state: "idle",
    data: null
  });

  const getUser = async (id) => {
    // API를 불러오는 함수를 따로 분리하여 작성
    setUserData({ ...userData, status: "pending" }); // 아직 데이터를 불러오기 전이므로 상태를 pending으로 바꿉니다.
    // ... 는 Spread 연산자로서, 객체의 property를 오버라이딩(업데이트)합니다
    // status와 같이 이미 존재하는 property값을 수정한 경우, 이를 제외한 나머지 property들(data)이 그대로 반환되며,
    // 기존에 없던 property를 작성한 경우, 객체에 새로 추가됩니다.
    try {
      const data = await getUserData(id);
      if (data === null) throw Error; // API 요청에 실패한 경우에는 data에 null이 반환됩니다.
      setUserData({ status: "resolved", data: data }); // state에 불러온 data를 저장
    } catch (e) {
      setUserData({ status: "rejected", data: null });
    }
  };

  const getRepos = async (id) => {
    setRepoData({ ...repoData, status: "pending" });
    try {
      const data = await getRepoData(id);
      if (data === null) throw Error;
      setRepoData({ status: "resolved", data: data });
    } catch (e) {
      setRepoData({ status: "rejected", data: null });
    }
  };

  return (
    <>
      <AppBlock>
        <div className="title">GitHub Profile Finder</div>
        <SearchBar getUser={getUser} />
        <Result userData={userData} />
      </AppBlock>
    </>
  );
}

export default App;
