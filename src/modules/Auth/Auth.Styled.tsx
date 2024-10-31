import styled from 'styled-components';

import { theme } from '../../style/Theme';

export const FormTitle = styled.h2`
  margin-bottom: 26px;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: ${theme?.font?.family?.sans};
  text-align: center;
`;
