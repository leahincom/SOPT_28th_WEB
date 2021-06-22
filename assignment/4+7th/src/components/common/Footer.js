// 그냥 페이지 하단의 여백을 주기 위한 용도기 때문에 공백으로 남겨도 괜찮아요!
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrap>
      <div className="footer">
        Copyright&copy; 2021. BE SOPT Web part. All rights reserved.
      </div>
    </FooterWrap>
  );
};

export default Footer;

const FooterWrap = styled.div`
  .footer {
    height: 91px;
    color: #cea0e3;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
