import axios from 'axios';

const getUserData = async (id) => {
  try {
    const { data } = await axios.get("https://api.github.com/users/" + id);
    console.log("[SUCESS] GET USER DATA");
    return data;
  } catch (e) {
    console.log("[FAIL] GET USER DATA");
    return null;
  }
};

export default getUserData;