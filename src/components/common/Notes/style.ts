import styled from 'styled-components';

import { theming } from '../../../style/Theme';

export const Wrapper = styled.div`
  .ant-list .ant-list-item {
    .ant-list-item-meta-avatar {
      margin-inline-end: 12px;
    }
    .ant-list-item-meta-title {
      a {
        font-size: 12px;
        line-height: 18px;
        font-weight: 500;
        color: ${theming?.color?.gray7};
      }
    }
    .ant-list-item-meta-description {
      font-size: 14px;
      line-height: 22px;
      font-weight: 400;
      color: ${theming?.color?.textTitle};
    }
  }
  .ant-input-affix-wrapper {
    background: #fafbfc;
  }
  .ant-input-data-count {
    bottom: -22px;
  }
`;
