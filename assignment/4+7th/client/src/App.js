import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainHeader from "./components/common/MainHeader";
import Calendar from "./components/common/Calendar";
import Title from "./components/common/Title";
import Footer from "./components/common/Footer";
import Main from "./pages/Main";
import Diary from "./pages/Diary";
// Card와 NewCard를 제외하고 모두 불러와주세요!

// Default 값으로 현재 연도와 월을 저장하기 위해, 현재 연도와 월을 불러오는 함수입니다
const getCurrDate = () => {
  const now = new Date();
  const currYear = now.getFullYear();
  const currMonth = now.getMonth();

  return { year: currYear, month: currMonth }; // 객체로 한 번에 리턴해줍시다
};

// BrowserRouter 내부에 모두 넣어줍시다
// Switch를 사용하는 이유
// -> path가 설정되어 있지 않으면 (URL이 없으면) Page Not Found를 불러오기 위해서
function App() {
  // state를 각각 선언해주세요~ useState()의 인자로 각각 현재 연도와 월을 전달합니다
  const [year, setYear] = useState(getCurrDate().year);
  const [month, setMonth] = useState(getCurrDate().month);

  return (
    <>
      <BrowserRouter>
        <MainHeader />
        <Calendar
          currYear={year}
          setCurrYear={setYear}
          currMonth={month}
          setCurrMonth={setMonth}
        />
        {/* Calendar 컴포넌트에 state로 선언한 모든 것들을 props로 전달합니다 */}
        <Title />
        <Switch>
          {/* Main 컴포넌트에서는 해당 월의 데이터를 가지고 있어야하므로 Main에 현재 연도와 월을 넘겨줍니다 (연도에 따라 월의 데이터 다름)
        ex) 2021년 5월에 해당하는 데이터만 가지고 오기 위함! 연도나 월이 변경되면 자동으로 API를 다시 요청합니다 */}
          <Route
            exact
            path="/"
            component={() => <Main year={year} month={month} />}
          />
          <Route
            exact
            path="/diary/:id"
            component={() => <Diary year={year} month={month} />}
          />
          <Route
            exact
            path="/diary/edit/:id"
            component={() => <Diary year={year} month={month} />}
          />
          <Route component={() => <div>Page Not Found</div>} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
