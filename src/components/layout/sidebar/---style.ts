import styled from 'styled-components';

import { theming } from '../../../style/Theme';

export const Wrapper = styled.div`
  padding: 16px;
  background: ${theming?.color?.white};

  .sidebar-heading {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    color: ${theming?.color?.textTitle};
    margin-bottom: 12px;
  }
  .filter-heading {
    font-size: 14px;
    line-height: 22px;
    font-weight: 700;
    color: ${theming?.color?.primaryDark};
    margin-top: 24px;
    margin-bottom: 2px;
  }
  .filter-info {
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    color: ${theming?.color?.gray9};
  }

  /* Checkbox style start */
  .ant-checkbox-group {
    background: red;
    .ant-checkbox-group-item {
      margin-bottom: 6px;
    }
  }
  /* Checkbox style over */
`;
