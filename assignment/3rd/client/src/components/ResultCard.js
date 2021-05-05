import React from 'react';
import Styled from 'styled-components';

const ResultCardWrap = Styled.div`
  img {
    width: 100px;
    height: 100px;
  }
`;

const ResultCard = ({ data }) => {
  return data && (
    <ResultCardWrap>
      <div className="result_card">
        <img src={data.avatar_url} alt="" />
        <p className="result_name">Name: {data.name}</p>
        <p className="result_id">ID: {data.id}</p>
        <p className="result_bio">Bio: {data.bio}</p>
        <div className="result_list">
          <p className="result_followers">Followers: {data.followers}</p>
          <p className="result_following">Following: {data.following}</p>
          <p className="result_repos">Repos: {data.public_repos}</p>
        </div>
      </div>
    </ResultCardWrap>
  );
};

export default ResultCard;