// require("dotenv").config();

const key = "62371b7b36e39f14faad55d8c260981b";

function handleSuccess(position) {
  const { latitude, longitude } = position.coords;

  getWeatherData(latitude, longitude);
}

function handleError(err) {
  console.warn("ERROR(" + err.code + "): " + err.message);
}

navigator.geolocation.getCurrentPosition(handleSuccess, handleError);

// API 통신을 하기 때문에 async, await을 사용합니다
const getWeatherData = async (lat, lon) => {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
  );
  const weatherData = await data.json(); // weatherData를 콘솔에 찍어보는 것 추천!
  console.log(weatherData);

  const ABS_ZERO = 273.15; // 이 API에서는 온도에 절대영도를 사용하기 때문에 상수로 지정해줍니다

  const weather = {
    temp: (weatherData.main.temp - ABS_ZERO).toFixed(2), // toFixed(2) - 소수점 둘째자리까지 나타냅니다
    rain: weatherData.rain ? weatherData.rain["1h"] : null, // 비가 올 때만 데이터가 들어오기 때문에 null 처리를 해주지 않으면 오류가 납니다
    clouds: weatherData.weather[0].main,
    feels: weatherData.main.feels_like,
    min: weatherData.main.temp_min,
    max: weatherData.main.temp_max,
    humid: weatherData.main.humidity,
    wind: weatherData.wind.speed
  };
};

// module.exports = handleSuccess;
