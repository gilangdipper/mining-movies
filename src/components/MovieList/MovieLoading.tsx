import React from 'react';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  .movie-card {
    flex: 0 0 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @keyframes background-animate {
    0% {
      background-position: -800px 0;
    }
    100% {
      background-position: 800px 0;
    }
  }
`;

const ShineAnimation = styled.div`
  width: 100%;
  height: 100%;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: background-animate;
  animation-timing-function: linear;
  background: #e9ebed;
  background: linear-gradient(to right, #e9ebed 5%, #ffffff 30%, #e9ebed 55%);
  background-size: 800px 250px;
  position: relative;
`;

const PosterMarker = styled(ShineAnimation)`
  width: 93px;
  height: 130px;
  margin-bottom: 12px;
`;
const RatingMarker = styled(ShineAnimation)`
  width: 70px;
  height: 10px;
  margin-bottom: 4px;
`;
const TitleMarker = styled(ShineAnimation)`
  width: 140px;
  height: 10px;
`;

const MovieLoading = () => (
  <LoadingWrapper>
    {Array.from(Array(5)).map((numb) => (
      <div className="movie-card" key={numb}>
        <PosterMarker />
        <RatingMarker />
        <TitleMarker />
      </div>
    ))}
  </LoadingWrapper>
);

export default MovieLoading;
