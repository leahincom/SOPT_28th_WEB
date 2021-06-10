import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { getCardData } from "../lib/api";
import Card from "../components/diary/Card";

const Diary = ({ year, month, match }) => {
  const id = match.params.id; // 주소에서 가져온 것이기 때문에 string
  const [diaryData, setDiaryData] = useState(null);
  const [rawData, setRawData] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getCardData();
      setRawData(data);
      data[year] &&
        setDiaryData(data[year][month].find((el) => el.id === parseInt(id)));
    })();
  }, [id]);

  return (
    diaryData && (
      <Card
        data={diaryData}
        rawData={rawData}
        setRawData={setRawData}
        year={year}
        month={month}
      />
    )
  );
};

export default withRouter(Diary);
