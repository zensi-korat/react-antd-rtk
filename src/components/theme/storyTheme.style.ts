import styled from "styled-components";

export const MainWrapper = styled.div`
  max-width: 1030px;
  margin: 0 auto;
  padding: 64px 15px;
`;
export const TitleXXL = styled.h1`
  font-size: 32px;
  line-height: 40px;
  color: #2e3438;
  font-weight: 700;
`;
export const TitleXL = styled.h2`
  font-size: 24px;
  line-height: 32px;
  color: #2e3438;
  font-weight: 700;
  margin-top: 20px;
  padding-bottom: 4px;
  border-bottom: 2px solid hsla(203, 50%, 30%, 0.15);
`;
export const TitleLG = styled.h3`
  font-size: 20px;
  line-height: 38px;
  color: #2e3438;
  font-weight: 700;
  margin-top: 20px;
`;

export const Para = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #2e3438;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-overflow-scrolling: touch;
  margin-top: 20px;
`;
export const Boxx = styled.div`
  & ul {
    display: flex;
    column-gap: 16px;
    list-style: none;
    margin-top: 12px;
    padding: 0 16px;
    & a {
      text-decoration: underline;
      display: inline-block;
      padding: 5px 8px;
      font-size: 14px;
      font-weight: bold;
      color: #495057;
      background-color: #f8f9fa;
      border: 1px solid #dee2e6;
      border-radius: 5px;
      box-shadow:
        0 4px 8px rgba(0, 0, 0, 0.3),
        inset 0 0 0 3px rgba(255, 255, 255, 0.2);
      cursor: pointer;
    }
  }
`;
