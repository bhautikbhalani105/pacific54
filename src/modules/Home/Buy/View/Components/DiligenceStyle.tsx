import styled from 'styled-components';

import { theming } from '../../../../../style/Theme';

export const Wrapper = styled.div`
  border: 1px solid ${theming?.color?.gray5};
  border-radius: 6px;
  padding: 24px;
  background: ${theming?.color?.white};
  text-align: center;

  img {
    margin-bottom: 16px;
  }

  p {
    color: ${theming?.color?.gray9};
    font-size: 12px;
    line-height: 20px;
    margin-bottom: 24px;
  }

  .ant-btn {
    font-weight: 600;
    font-size: 14px;
    color: ${theming?.color?.textTitle};
  }
`;
