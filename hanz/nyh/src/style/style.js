import { styled } from "styled-components";
import { FlexComun } from "./globalSyle";

export const Padre = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  ${FlexComun}
  & > div {
    width: 60em;
    height: 30em;
    box-shadow: 0 5px 10px #0008;
    position: absolute;
    z-index: 1;
    overflow: hidden;
    transition: opacity 0.5s;
    ${FlexComun}
    & > article {
      width: 100%;
      height: 5em;
      padding: 5em;
    }
    & > section {
      position: absolute;
      width: 100%;
      height: 20em;
      border-left: 480px solid transparent;
      border-right: 480px solid transparent;
      border-top: 200px solid;
      top: 0.2em;
    }

    /* &:hover {
      & > section {
        animation: openCard 2s ease-in-out;
        transform: translateY(-100px) rotateX(180deg);
        top: -10em;

      }
      @keyframes openCard {
        0% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(-100px) rotateX(180deg);
         
        }
      }
    } */
  }
  .cartaStyle {
    width: 40vw;
    height: 90vh;
    background-color: #400101;
    color: #fff;
    transition: all 2s;
    padding: 3em;
    flex-direction: column;
    gap: 2em;
    & > div {
      ${FlexComun}
      filter:grayscale(1);
      gap: 2em;
      &:nth-child(2n) {
        flex-direction: row-reverse;
        filter: grayscale(0);
      }

      & > p {
        margin-top: 0.5em;
      }
      & > img {
        width: 150px;
        filter: grayscale(1);
      }
    }
  }
`;
