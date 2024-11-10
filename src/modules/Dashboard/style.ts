import styled from 'styled-components';

import { theming } from '../../style/Theme';

export const Wrapper = styled.div`
  .dashboardInfo {
    padding: 30px;
    background-color: ${theming?.color?.primary};
    border-radius: 10px;
    margin: 10px;
    text-align: center;
    .number {
      display: inline-block;
      margin-bottom: 3px;
      font-family: ${theming?.font?.family?.openSans};
      font-weight: 700;
      font-size: 36px;
      color: ${theming?.color?.black};
    }

    .infoTitle {
      font-family: ${theming?.font?.family?.openSans};
      font-weight: 400;
      font-size: 16px;
      color: ${theming?.color?.dark};
    }
  }
`;
