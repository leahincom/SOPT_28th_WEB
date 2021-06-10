import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001/"
});

// api 요청 함수는 반드시 async, await으로 작성합니다
export const getCardData = async () => {
  try {
    // localhost 뒤의 번호 및 주소는 서버로부터 데이터를 받아오는 주소를 나타내므로
    // 앞에서 json-server에서 지정한 번호와 세부주소를 작성하시면 됩니다
    const rawData = await instance.get("/posts");
    console.log("[SUCCESS] GET card data");
    return rawData.data.data; // rawData의 console을 찍어보시면 data 아래의 data가 저희가 원하는 데이터입니다
  } catch (e) {
    console.log("[FAIL] GET card data");
    return null;
  }
};

// json-server에는 수정 API(PUT method)가 없습니다
// 기존의 데이터 + 수정된 데이터 = 새로운 데이터를 만들어서 POST 하는 방식을 사용했습니다
// 실제 PUT API에서 헤더에 들어가는 userData는 수정된 데이터입니다!
export const createCardData = async (userData) => {
  try {
    const data = await instance.post("/posts", {
      data: userData
    });
    console.log("[SUCCESS] POST card data");
    return data.data.data;
  } catch (e) {
    console.log("[FAIL] POST card data");
    return null;
  }
};
