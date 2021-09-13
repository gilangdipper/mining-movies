import styled from 'styled-components';

export const MovieListWrapper = styled.div`
  display: flex;
  padding: 20px 0;
  flex-flow: row wrap;
  justify-content: flex-start;

  .no-movie {
    flex: 0 0 100%;
    display: flex;
    justify-content: center;
    font-style: italic;
  }

  .movie-box {
    flex: 0 0 20%;
    display: flex;
    justify-content: center;
  }

  .movie-loading {
    flex: 0 0 100%;
  }

  .movie-load-more {
    display: flex;
    flex: 0 0 100%;
    justify-content: center;
    margin-top: 30px;
  }
`;

export const LoadMoreButton = styled.button`
  width: 250px;
  height: 45px;
  margin: 0;
  padding: 0;
  border: 0;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  cursor: pointer;
`;
