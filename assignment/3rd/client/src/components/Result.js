// 분기 처리 담당

import React from 'react';
import ResultCard from './ResultCard';

const Result = ({ userData }) => {
  const { status, data } = userData;

  switch (status) {
    case "pending" :
      return <div style={{ color: "white", fontSize: "24px" }}>Loading...</div>
    case "resolved" :
      return <ResultCard data={data} />;
    case "rejected" :
      return <div>User Not Found</div>
    case "idle" :
    default:
      return <div></div>
  }
};

export default Result;