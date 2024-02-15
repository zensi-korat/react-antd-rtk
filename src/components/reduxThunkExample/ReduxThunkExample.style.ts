import styled from "styled-components";

export const ReduxThunkExampleStyle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 80px 40px;
  gap: 15px;
  min-height: calc(100vh - 80px);
  .post {
    border: 1px solid var(--neutral-300);
    border-bottom: 0;
    border-right: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    &__item {
      border-right: 1px solid var(--neutral-300);
      border-bottom: 1px solid var(--neutral-300);
      text-align: left;
      padding: 8px;
    }
  }
`;
