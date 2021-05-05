import React, { useState } from "react";
import Styled from "styled-components";

// css와 똑같이 작성하면 됩니당!
const SearchBarWrap = Styled.div`
  input {
    width: 300px;
    background-color:#28223f;
    border: 2px solid skyblue;
    color: white;
    padding: 5px;
    font-size: 15px;
    margin-bottom: 30px;
  }
  input::placeholder {
    color: white;
  }

  input:focus {
    outline: none;

    &::placeholder {
      color: transparent;
    }
  }
`;

const SearchBar = ({ getUser }) => {
  // getUser 함수 전달
  const [userName, setUserName] = useState(""); // input창의 value를 저장할 state 선언

  const handleChange = (e) => {
    // input창의 value가 변할 때 실행되는 함수
    setUserName(e.target.value); // event.target.value === input창에 사용자가 작성한 텍스트
  };

  const handleSubmit = (e) => {
    // form을 제출할 때 실행되는 함수
    // 초기 렌더링 시 자동 초기화 방지 (오류 방지)
    e.preventDefault(); // 기본 동작을 막는다
    getUser(userName); // input창의 value(사용자가 입력한 값)을 getUser에 전달한다
    setUserName(""); // input창의 value를 초기화한다
  };

  // <input>의 value (property) 는 초기화 시 세팅할 값을 담은 변수로 설정한다.
  // 예를 들어, value를 설정하지 않을 경우에는 값을 입력하고 리렌더링 되었을 때 이전 검색값이 계속 남아있다.
  // 하지만 value를 userName이라는 변수로 설정해놓으면,
  // 특정 값으로 검색을 한 이후에 (handleSubmit에서) setUserName을 통해 변경한 userName이 반영된다.
  return (
    <SearchBarWrap>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Github ID를 입력하세요."
          value={userName}
          onChange={handleChange}
        />
      </form>
    </SearchBarWrap>
  );
};

export default SearchBar;
