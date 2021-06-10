import styled from "styled-components";
import React from "react";
import { withRouter } from "react-router-dom";

const CardHeaderWrap = styled.div`
  display: flex;
  align-items: flex-end;
  width: 642px;
  height: 83px;
  border-bottom: 2px solid #cea0e3;
  margin: 0 auto;
  padding-bottom: 10px;
  .header {
    &__title {
      margin: 0;
      font-size: 28px;
      font-weight: bold;
      border: none;
      background: none;
      &::placeholder {
        color: #c4c4c4;
      }
      &:focus {
        outline: none;
      }
    }
    &__empty {
      flex: 1;
    }
    &__edit {
      color: #cea0e3;
    }
  }
  button {
    border: none;
    background: none;
    font-size: 18px;
    font-weight: bold;
    padding: 0;
    width: 40px;
    text-align: center;
    margin-left: 7px;
  }
  button:hover {
    cursor: pointer;
  }
`;

const CardHeader = ({
  history,
  id,
  title,
  isReadOnly,
  handleChange,
  handleDelete,
  handleEdit
}) => {
  return (
    <CardHeaderWrap>
      <input
        name="title"
        type="text"
        className="header__title"
        placeholder="제목을 입력해 주세요"
        value={title}
        readOnly={isReadOnly}
      />
      <div className="header_empty"></div>
      {/* path가 '/diary/:id'일 때는 '수정'으로 표시하고, 클릭시 '/diary/edit/:id'로 이동합니다
      path가 '/diary/edit/:id'일 때는 '완료'로 표시하고, 클릭시 handleEdit 함수를 호출합니다
      path가 '/diary/:id'일 때만 '삭제'를 표시하고, 클릭시 handleDelete 함수를 호출합니다 */}
      {isReadOnly ? (
        <>
          <button
            className="header__edit"
            onClick={() => history.push(`/diary/edit/${id}`)}
          >
            수정
          </button>
          <button className="header__delete" onClick={handleDelete}>
            삭제
          </button>
        </>
      ) : (
        <button className="header__edit" onClick={handleEdit}>
          완료
        </button>
      )}
    </CardHeaderWrap>
  );
};

export default withRouter(CardHeader);
