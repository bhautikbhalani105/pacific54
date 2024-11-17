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
  }

  .location {
    margin-top: 16px;
  }

  .detail-card {
    + .tab-card {
      margin-top: 48px;
    }
  }
`;
