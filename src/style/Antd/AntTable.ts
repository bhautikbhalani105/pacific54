import { createGlobalStyle } from 'styled-components';

import { theme } from '../Theme';

export const AntTable = createGlobalStyle`
	.ant-table-thead {
		.ant-table-cell {
			font-size: 10px;
		}
	}
	.ant-table-wrapper .ant-table {
		border: 1px solid ${theme?.color?.gray5};
		border-radius: 6px;
		.ant-table-tbody {
			td.ant-table-cell {
				border: 0;
			}
		}
	}
`;
