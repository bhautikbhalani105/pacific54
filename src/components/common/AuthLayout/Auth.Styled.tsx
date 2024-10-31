import { theme } from "../../../style/Theme";

import { styled } from "styled-components";

export const AuthWrapper = styled.section`
  &.authLayout {
    padding: 16px;
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .authWrapper {
      max-width: 600px;
      margin: 0 auto;
      width: 100%;

      &.authBg {
        background-color: ${theme?.color?.white};
        border-radius: 10px;
        padding: 40px 30px;
        position: relative;
      }

      .title {
        margin: 0 0 50px;
        color: #ffffff;
      }
    }
  }
`;
