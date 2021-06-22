import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainHeader from "./components/common/MainHeader";
import Calendar from "./components/common/Calendar";
import Title from "./components/common/Title";
import Footer from "./components/common/Footer";
import Main from "./pages/Main";
import Diary from "./pages/Diary";
// Card와 NewCard를 제외하고 모두 불러와주세요!

const getCurrDate = () => {
  const now = new Date();
  const currYear = now.getFullYear();
  const currMonth = now.getMonth();
  return { year: currYear, month: currMonth };
};

// BrowserRouter 내부에 모두 넣어줍시다
// Switch를 사용하는 이유 -> URL이 path에 없으면 Page Not Found를 불러오기 위해서
function App() {
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
        <Title />
        <Switch>
          <Route
            exact
            path="/"
            component={<Main year={year} month={month} />}
          />
          <Route path="/diary/:id" component={Diary} />
          <Route component={() => <div>Page Not Found</div>} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}
