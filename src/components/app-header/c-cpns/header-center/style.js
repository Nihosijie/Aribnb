import styled from "styled-components";

export const CenterWrapper = styled.div`
  .search-bar {
    width: 300px;
    height: 40px;
    display: flex;
    box-sizing: border-box;
    padding: 0 5px 0 15px;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 40px;
    
    ${props => props.theme.mixin.boxShadow}

    .text input {
      border: none;
      outline: none;
    }

    .icon {
      width: 32px;
      height: 32px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: ${props => props.theme.color.primaryColor};
      cursor: pointer;
    }
  }
`;
