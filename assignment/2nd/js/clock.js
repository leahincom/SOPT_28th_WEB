const monthArr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let date, month, year, day, hour, min, sec, ampm; // 현재 시간 정보를 가지고 있는 객체입니다

// 00 : 00의 형식을 맞추기 위해 한자리 수는 앞에 0을 채워주는 함수입니다
const fillZero = (num) => {
  num = num + ""; // 문자열로 변환
  // 한 자리 수면 앞에 0 붙이기
  if (num.length < 2) {
    return "0" + num;
  } else {
    return num;
  }
};

const analogHour = document.querySelector(".analog_hour");
const analogMin = document.querySelector(".analog_minute");
const analogSec = document.querySelector(".analog_second");

const synchronize = () => {
  date = new Date();
  month = monthArr[date.getMonth()]; // 0이 1월, 1이 2월입니다
  year = date.getFullYear();
  day = fillZero(date.getDate());
  hour = date.getHours();
  min = date.getMinutes();
  sec = date.getSeconds();

  // 시침의 각도를 계산합니다. 시침은 한 시간당 30도씩, 분당 0.5도씩 움직입니다
  // 90도를 빼는 이유는 바늘이 90도로 누워있는 상태에서 시작하기 때문입니다 (css 참고)
  // rotate function : starts from initial position, not the pre-set one
  const hourDegree = (hour + min / 60) * (360 / 12) - 90;
  const minDegree = min * (360 / 60) - 90;
  const secDegree = sec * (360 / 60) - 90;

  // css transform 속성 중 rotate를 다음과 같이 자바스크립트에서 사용할 수 있습니다
  analogHour.style.transform = `rotate(${hourDegree}deg)`;
  analogMin.style.transform = `rotate(${minDegree}deg)`;
  analogSec.style.transform = `rotate(${secDegree}deg)`;

  ampm = hour < 12 ? "AM" : "PM";
  hour = hour === 0 ? 12 : hour > 12 ? fillZero(hour - 12) : fillZero(hour);
  min = fillZero(min);
  sec = fillZero(sec);

  document.querySelector(
    ".main"
  ).innerHTML = `Today is <span class="red" style="color: red">${day} ${month}</span>, ${year}`; // 해당 클래스이름을 가진 요소를 가져옵니다

  document.querySelector(
    ".digital"
  ).innerHTML = `${hour} : ${min} : ${sec} <span class="ampm" style="border-style: solid">${ampm}</span>`;
};

setInterval(synchronize, 1000); // 1초 간격으로 콜백함수를 실행합니다
// drawArc();
