// Route가 아닌 요소에서 location을 사용하기 위해서 withRouter를 사용합니다
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import MenuIcon from "../../assets/Menu.svg";
import ProfileIcon from "../../assets/Profile.svg";

const MainHeaderWrap = styled.div`
  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 91px;

    &__title {
      font-size: 36px;
      font-weight: bold;
      font-style: italic;
      color: #CEA0E3;
      &:hover {
        cursor: pointer;
      }
    }

    &__profile {
      margin-right: 10px;
    }

    &__hr {
      width: 1200px;
      height: 13px;
      background: linear-gradient(90deg, white, #CEA0E3);
    }
  }
`;

const MainHeader = ({ history }) => { // history를 props로 가져옵니다.
  return (
    <MainHeaderWrap>
      <div className="header"> 
      {/* header는 menu, title, profile을 담고 있는 flex-container 입니다. */}
        <img className="header__menu" src={MenuIcon} alt="" />
        <div className="header__title" onClick={() => history.push("/")}> 
        {/* title을 누르면 path="/", 즉 Main 페이지로 이동 */}
          Diary App
        </div>
        <img className="header__profile" src={ProfileIcon} alt="" />
      </div>
      <div className="header__hr"></div> 
      {/* hr은 위의 menu, title, profile과 수직상에 있기 때문에 flex를 적용시키지 않기 위해 밖으로 뺐습니다 */}
		  {/* hr을 header div 안으로 넣으면 menu, title, profile과 동일 선상에서 가로로 정렬됩니다. */}
    </MainHeaderWrap>
  );
};

export default withRouter(MainHeader);