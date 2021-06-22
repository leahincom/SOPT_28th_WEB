// Route가 아닌 요소에서 location을 사용하기 위해서 withRouter를 사용합니다
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Title = ({ location }) => {
  // location을 props로 가져옵니다
  // location.pathname이 "/"이면 "이번 달 일기"를 저장하고, 아니면 "오늘의 일기"를 저장합니다.
  // 콘솔에 location 객체 한번 출력해보세요~~~
  const title = location.pathname === "/" ? "이번 달 일기" : "오늘의 일기";

  return (
    <TitleWrap>
      <div className="title">{title}</div>
    </TitleWrap>
  );
};

export default withRouter(Title);

const TitleWrap = styled.div`
  .title {
    width: 1200px;
    height: 92px;
    font-size: 36px;
    font-weight: bold;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;
