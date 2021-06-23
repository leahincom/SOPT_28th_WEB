// 버튼 아이콘 4가지를 모두 가져옵니다
import LeftOff from "../../assets/LeftOff.svg";
import LeftOn from "../../assets/LeftOn.svg";
import RightOff from "../../assets/RightOff.svg";
import RightOn from "../../assets/RightOn.svg";

import React, { useRef } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Calendar = ({
  location,
  currYear,
  setCurrYear,
  currMonth,
  setCurrMonth
}) => {
  const monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const isMain = location.pathname === "/" ? true : false;
  // useRef를 사용하여 DOM 요소를 가져올 수 있는 변수를 선언합니다
  const leftButton = useRef();
  const rightButton = useRef();

  return (
    <CalendarWrap>
      <div className="calendar">
        <div className="calendar__year">
          <img
            src={LeftOff}
            alt=""
            onClick={() => isMain && setCurrYear(currYear - 1)}
            onMouseEnter={() => (leftButton.current.src = LeftOn)}
            onMouseLeave={() => (leftButton.current.src = LeftOff)}
            ref={leftButton}
            className="calendar__year--left"
          />
          <div className="calendar__year--number">{currYear}년</div>
          <img
            src={RightOff}
            alt=""
            onClick={() => isMain && setCurrYear(currYear + 1)}
            onMouseEnter={() => (rightButton.current.src = RightOn)}
            onMouseLeave={() => (rightButton.current.src = RightOff)}
            ref={rightButton}
            className="calendar__year--right"
          />
        </div>
        <div className="calendar__month">
          {monthList.map((month) => {
            return (
              <div
                key={month}
                onClick={() => setCurrMonth(month)}
                style={
                  month === currMonth
                    ? { fontSize: "22px", fontWeight: "bold" }
                    : {}
                }
                className="calendar__month--button"
              >
                {month}월
              </div>
            );
          })}
        </div>
      </div>
    </CalendarWrap>
  );
};

export default withRouter(Calendar);

const CalendarWrap = styled.div`
  .calendar {
    width: 1200px;
    height: 118px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__year {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-end;
      height: 61px;

      &--left:hover,
      &--right:hover {
        cursor: pointer;
      }

      &--number {
        font-size: 36px;
        font-weight: bold;
        margin: 0 25px;
        line-height: 1;
      }
    }

    &__month {
      height: 57px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 1025px;

      &--button {
        font-size: 18px;
        width: 52px;
        &:hover {
          font-size: 22px;
          font-weight: bold;
          cursor: pointer;
        }
      }
    }
  }
`;
