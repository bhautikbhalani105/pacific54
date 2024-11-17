import styled from 'styled-components';

import { theming } from '../../../../style/Theme';

export const Wrapper = styled.div`
  .ant-typography {
    margin: 0;
  }

  .detail-li {
    padding-inline: 20px;
    height: 36px;

    &:hover {
      background: ${theming?.color?.gray3};
      cursor: pointer;
      border-radius: 6px;
    }
  }
`;
