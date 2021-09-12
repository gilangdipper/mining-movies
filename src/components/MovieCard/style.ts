import styled from 'styled-components';
import { Star } from '@styled-icons/fa-solid/Star';
import { Heart } from '@styled-icons/fa-solid/Heart';

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

    .poster {
      width: 100%;
      height: 130px;
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
  }

  .title {
    flex: 0 0 100%;
    color: rgba(0, 0, 0, 0.7);
    font-size: 14px;
    font-weight: 500;
    text-align: left;
  }
`;

export const StarIcon = styled(Star)`
  flex: 0 0 10px;
  margin-right: 2px;
  color: yellow;
`;

export const HeartIcon = styled(Heart)`
  color: red;
`;
