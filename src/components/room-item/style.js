import styled from "styled-components";

export const ItemWrapper = styled.div`
  width: 25%;
  box-sizing: border-box;
  padding: 8px;

  .inner {
    width: 100%;

    .cover {
      box-sizing: border-box;
      padding: 66.66% 8px 0;
      position: relative;
      border-radius: 3px;
      overflow: hidden;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    .desc {
      margin: 10px 0 5px;
      font-size: 12px;
      font-weight: 700;
      color: ${(props) => props.verifyColor};
    }

    .name {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }

    .bottom {
      span {
        font-size: 12px;
      }
    }
  }
`;
