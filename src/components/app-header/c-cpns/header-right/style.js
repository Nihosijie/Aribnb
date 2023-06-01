import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  .btns {
    width: 150px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: ${(props) => props.theme.text.primaryColor};

    span {
      width: 50px;
    }
  }

  .profile {
    width: 80px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #ccc;
    border-radius: 40px;
    color: #717171;
    position: relative;

    ${(props) => props.theme.mixin.boxShadow}

    .panel {
      width: 200px;
      position: absolute;
      border: 1px solid #ccc;
      border-radius: 10px;
      top: 50px;
      right: 0;
      font-size: 14px;
      /* font-weight: bold; */
      color: #666;

      ${(props) => props.theme.mixin.boxShadow}
      .top, .bottom {
        padding: 10px 15px 0;
        > div {
          height: 30px;
          cursor: pointer;
        }
      }

      .top {
        border-bottom: 1px solid #ccc;
      }
    }
  }
`;