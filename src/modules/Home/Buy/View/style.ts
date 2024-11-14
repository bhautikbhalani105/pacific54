import styled from 'styled-components';

import { theming } from '../../../../style/Theme';

export const Wrapper = styled.div`
  .view-header {
    background: ${theming?.color?.white};

    .top-header {
      padding: 12px 0;
    }
    .heading {
      margin-bottom: 0;
    }
  }

  .valuations {
    border-top: 1px solid ${theming?.color?.gray5};

    .card {
      padding: 8px 14px;
      p {
        font-size: 12px;
        line-height: 16px;
        color: ${theming?.color?.gray8};
      }
      h4 {
        font-size: 20px;
        line-height: 28px;
        color: ${theming?.color?.textTitle};
      }
    }
  }
`;
