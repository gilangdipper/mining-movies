import styled from 'styled-components';
import { Star } from '@styled-icons/fa-solid/Star';
import { Heart as HeartSolid } from '@styled-icons/fa-solid/Heart';
import { Heart as HeartRegular } from '@styled-icons/fa-regular/Heart';

export const MovieCardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  overflow: hidden;
  width: 140px;
  justify-content: center;
  margin-bottom: 10px;
  align-content: flex-start;

  .poster-wrapper {
    flex: 0 0 100%;
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;

    .movie-favorite-marker {
      position: absolute;
      top: 4px;
      right: 6px;
      width: 20px;
      height: 20px;
    }

    .poster {
      height: 200px;
      margin-bottom: 12px;
    }

    .favorite-action {
      transition: 0.5s ease;
      opacity: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      text-align: center;
      width: 50px;
      padding: 0;
      border: 0;
      background: transparent;
      cursor: pointer;
    }

    &:hover {
      .poster {
        opacity: 0.7;
        filter: blur(4px);
      }

      .favorite-action {
        opacity: 1;
      }
    }
  }

  .rating {
    display: flex;
    flex-flow: row wrap;
    flex: 0 0 100%;
    margin-bottom: 4px;
    justify-content: center;
  }

  .title {
    flex: 0 0 100%;
    color: rgba(0, 0, 0, 0.7);
    font-size: 14px;
    font-weight: 500;
    text-align: center;
  }
`;

export const StarIcon = styled(Star)`
  flex: 0 0 10px;
  margin-right: 2px;
  color: yellow;
`;

export const HeartSolidIcon = styled(HeartSolid)`
  color: red;
`;

export const HeartRegularIcon = styled(HeartRegular)`
  color: #ffffff;
`;
