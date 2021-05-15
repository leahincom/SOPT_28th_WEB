// 버튼 아이콘 4가지를 모두 가져옵니다
import LeftOff from "../../assets/LeftOff.svg";
import LeftOn from "../../assets/LeftOn.svg";
import RightOff from "../../assets/RightOff.svg";
import RightOn from "../../assets/RightOn.svg";

import React, { useRef } from 'react';
import styled from "styled-components";

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

      &--left:hover, &--right:hover {
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

const Calendar = ({ currYear, setCurrYear, currMonth, setCurrMonth }) => {

  const monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const leftBtn = useRef();
  const rightBtn = useRef();

  return (
    <CalendarWrap>
      <div className="calendar">
        <div className="calendar__year">
          <img src={LeftOff} alt="" className="calendar__year--left"
            ref={leftBtn} // useRef 사용을 위해 ref에 leftBtn ref 객체를 변수로 넣어줍니다
            // 매칭되는 (reference) 객체를 leftBtn으로 설정한다
            onClick={() => setCurrYear(currYear-1)} // 왼쪽 버튼을 누르면 현재 연도에서 -1을 한 값을 다시 저장합니다
            onMouseEnter={() => (leftBtn.current.src = LeftOn)} // 마우스가 영역 안으로 들어올 경우, 아이콘을 변경합니다
            onMouseLeave={() => (leftBtn.current.src = LeftOff)} // 마우스가 영역 밖으로 나갈 경우, 아이콘을 변경합니다
          /> 
          <div className="calendar__year--number">{currYear}년</div>
          <img src={RightOff} alt="" className="calendar__year--right"
            ref={rightBtn}
            onClick={() => setCurrYear(currYear+1)}
            onMouseEnter={() => (rightBtn.current.src = RightOn)}
            onMouseLeave={() => (rightBtn.current.src = RightOff)}
          />
        </div>
        <div className="calendar__month">
        {/* 월 별로 div 객체 생성해서 개별적으로 관리 */}
          {monthList.map((month) => {
            return (
              <div key={month} className="calendar__month--button"
              onClick={() => setCurrMonth(month)}
              style={
                month === currMonth ? 
                { fontSize: "22px", fontWeight: "bold" } : {}
              }
              >{month+1}월</div>
            )
          })}
        </div>
      </div>
    </CalendarWrap>
  );
};

export default Calendar;