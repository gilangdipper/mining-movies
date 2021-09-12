import styled from 'styled-components';

export const NavigatorWrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  margin-bottom: 20px;

  .navigator-item {
    background: transparent;
    margin: 0;
    padding: 0 16px;
    font-size: 26px;
    font-weight: bold;
    text-transform: capitalize;
    border: 0;
    border-right: 2px solid rgba(0, 0, 0, 0.75);
    cursor: pointer;
    color: rgba(0, 0, 0, 0.75);
    display: flex;
    align-items: center;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      border: 0;
    }

    span {
      font-size: 22px;
      background-image: linear-gradient(to top, #f77062 0%, #fe5196 100%);
      margin-left: 4px;
      border-radius: 4px;
    }
  }
`;
