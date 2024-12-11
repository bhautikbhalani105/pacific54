import styled from 'styled-components';

import { theming } from '../../../../../style/Theme';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  background: #ffffff;
  padding: 24px;
  border-radius: 6px;
  border: 1px solid ${theming?.color?.gray5};

  .auction-step {
    display: flex;
    align-items: flex-start;
    flex: 0 0 33.3333%;
    overflow: hidden;
    padding-right: 16px;

    h5 {
      font-size: 16px;
      font-weight: 600;
      line-height: 32px;
      background: ${theming?.color?.white};
      display: inline-block;
      padding-right: 16px;
      position: relative;
      z-index: 11;
      color: ${theming?.color?.textTitle};
    }
    .step-line {
      content: '';
      position: absolute;
      left: 8px;
      top: 16px;
      width: calc(100% - 8px);
      height: 1px;
      background: ${theming?.color?.gray4};
      z-index: 0;
    }
    .description {
      color: ${theming?.color?.textTitle};
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
    }
  }
  .step-icon {
    display: inline-block;
    width: 32px;
    height: 32px;
    min-width: 32px;
    border: 1px solid ${theming?.color?.textTitle};
    text-align: center;
    line-height: 30px;
    border-radius: 30px;
    font-size: 14px;
    font-weight: 400;
    color: ${theming?.color?.textTitle};
  }
  .step-content {
    padding-left: 8px;
    position: relative;
  }
  .auction-btn {
    flex: 0 0 100%;
  }
`;
