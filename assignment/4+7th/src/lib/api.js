import axios from "axios";

export const getCardData = async () => {
  try {
    const rawData = await axios.get("http://localhost:3001/posts");
    console.log("[SUCCESS] GET card data");
    return rawData.data.data;
  } catch (e) {
    console.log("[FAIL] GET card data");
    return null;
  }
};
