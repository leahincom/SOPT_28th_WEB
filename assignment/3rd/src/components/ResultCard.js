import React from "react";
import styled from "styled-components";

const ResultCardWrap = styled.div`
  background-color: #221d37;
  color: white;
  font-weight: bold;
  border-radius: 10px;

  img {
    width: 200px;
    height: 200px;
    border-radius: 110px;
    border: solid 2px rgb(135, 206, 235);
    padding: 5px;
  }

  .result_card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .close {
    input {
      border: none;
      color: white;
      background: transparent;
      position: absolute;
      top: 15px;
      right: 15px;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
    }

    display: flex;
    padding: 30px 40px 40px 0;
  }

  .result_name {
    font-size: 20px;
    margin-bottom: 0;
  }

  .result_id {
    font-size: 15px;
    margin-top: 5px;
  }

  .result_url {
    input {
      border: none;
      color: #ffd701;
      font-weight: bold;
      font-size: 20px;
      background: transparent;
      padding: 5px 10px;
      cursor: pointer;

      &:hover {
        background: #ffd701;
        color: black;
      }
    }

    border: solid 2px #ffd701;
    border-radius: 4px;
  }

  .result_list {
    display: flex;

    p {
      width: 150px;
      height: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: rgb(135, 206, 235);
      color: black;
      margin: 1px;
      font-size: 25px;
    }

    span {
      font-size: 18px;
      font-weight: lighter;
    }

    .result_followers {
      border-bottom-left-radius: 10px;
    }

    .result_repos {
      border-bottom-right-radius: 10px;
    }
  }
`;

const ResultCard = ({ data }) => {
  // { avatar_url, name, login, ... } = data; 도 되고, data.avatar_url로 사용해도 됨

  return (
    data && (
      <ResultCardWrap>
        <div className="result_card">
          <div className="close">
            <form action="#">
              <input type="submit" value="X" />
            </form>
          </div>
          <img src={data.avatar_url} alt="" />
          <p className="result_name">{data.name}</p>
          <p className="result_id">{data.login}</p>
          <p className="result_url">
            <form action={data.html_url}>
              <input type="submit" value="Visit Github" />
            </form>
          </p>
          <div className="result_list">
            <p className="result_followers">
              <span>Followers</span>
              {data.followers}
            </p>
            <p className="result_following">
              <span>Following</span>
              {data.following}
            </p>
            <p className="result_repos">
              <span>Repos</span>
              {data.public_repos}
            </p>
          </div>
        </div>
      </ResultCardWrap>
    )
  );
};

export default ResultCard;
