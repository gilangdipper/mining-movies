import styled from 'styled-components';

export const MovieListWrapper = styled.div`
  display: flex;
  padding: 20px 0;
  flex-flow: row wrap;
  justify-content: space-between;

  .movie-box {
    flex: 0 0 20%;
    display: flex;
    justify-content: center;
  }
`;
