import { createGlobalStyle } from 'styled-components';

import { theming } from '../Theme';

export const AntButton = createGlobalStyle`
	.ant-btn {
		&.ant-btn-link {
			padding: 0;
			font-weight: 600;
			color: ${theming?.color?.primary};
		}
	}
`;
