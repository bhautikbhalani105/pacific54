import styled from 'styled-components';

import { theming } from '../../../../style/Theme';

export const Wrapper = styled.div`
  &.card {
    padding: 8px 14px;
    flex: 0 0 14.2857%;
    border-left: 1px solid ${theming?.color?.gray5};
    &:last-child {
      border-right: 1px solid ${theming?.color?.gray5};
    }
    &.border-left-o {
      border-left: 0;
    }
    &.border-right-o {
      border-right: 0;
    }

    &.c-4 {
      flex: 0 0 25%;
    }

    &.c-3 {
      flex: 0 0 33.3333%;
    }

    &.c-2 {
      flex: 0 0 50%;
    }

    p {
      font-size: 12px;
      line-height: 16px;
      color: ${theming?.color?.gray8};
    }

    h4 {
      font-size: 20px;
      line-height: 28px;
      font-weight: 600;
      color: ${theming?.color?.textTitle};
    }
  }
`;
