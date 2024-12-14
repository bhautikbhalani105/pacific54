import styled from 'styled-components';

import { theming } from '../../../../style/Theme';

export const Wrapper = styled.div`
  /* Checkbox style start */
  .ant-checkbox-group {
    .ant-checkbox-group-item {
      margin-bottom: 12px;
      font-size: 14px;
      line-height: 18px;
      font-weight: 400;
      color: ${theming?.color?.gray9};
      flex: 0 0 100%;
    }
  }
  /* Checkbox style over */

  /* Colored border checkbox style start */
  .colored-border {
    .ant-checkbox-wrapper {
      margin-bottom: 12px;
    }
    .ant-checkbox + span {
      border-left: 4px solid ${theming?.color?.gray9};
      margin-left: 12px;
      font-size: 14px;
      line-height: 18px;
      font-weight: 400;
      color: ${theming?.color?.gray9};
    }
    .pending {
      .ant-checkbox + span {
        border-left: 4px solid #998dd9;
      }
    }
    .offerSent {
      .ant-checkbox + span {
        border-left: 4px solid #00a3bf;
      }
    }
    .underContract {
      .ant-checkbox + span {
        border-left: 4px solid #57d9a3;
      }
    }
    .bidReady {
      .ant-checkbox + span {
        border-left: 4px solid #ff991f;
      }
    }
    .reviewed {
      .ant-checkbox + span {
        border-left: 4px solid #e3e3e3;
      }
    }
  }
  /* Colored border checkbox style over */
`;
