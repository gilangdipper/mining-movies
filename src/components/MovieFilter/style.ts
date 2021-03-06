import styled from 'styled-components';

export const MovieFilterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;

  .filter-select {
    flex: 0 0 25%;
  }

  @media screen and (max-width: 425px) {
    .filter-select {
      flex: 0 0 50%;
    }
  }
`;
