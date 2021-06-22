import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 1000
});

export const getCardData = async () => {
  try {
    const rawData = await instance.get("/posts");
    console.log("[SUCCESS] GET card data");
    return rawData.data.data;
  } catch (e) {
    console.log("[FAIL] GET card data");
    return null;
  }
};

export const createCardData = async (userData) => {
  try {
    const rawData = await instance.post("/posts", {
      data: userData
    });
    console.log("[SUCCESS] POST card data");
    return rawData.data.data;
  } catch (e) {
    console.log("[FAIL] POST card data");
    return null;
  }
};
