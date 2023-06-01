import styled from "styled-components";

export const FooterWrapper = styled.div`
  margin-top: 100px;

  .wrapper {
    width: 1032px;
    margin: 0 auto;

    .service {
      width: 100%;
      display: flex;

      .item {
        flex: 1;

        .name {
          margin-bottom: 16px;
          font-weight: 700;
        }

        .list {

          .link {
            margin-top: 6px;
            color: #767676;
            cursor: pointer;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }

  }

  .statement {
    margin-top: 30px;
    border-top: 1px solid #EBEBEB;
    padding: 20px;
    color: #767676;
    text-align: center;
  }
`