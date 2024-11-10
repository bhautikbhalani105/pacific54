import { createGlobalStyle } from 'styled-components';

import { theming } from '../Theme';

export const AntTable = createGlobalStyle`
	.ant-table-thead {
		.ant-table-cell {
			font-size: 10px;
		}
	}
	.ant-table-wrapper .ant-table {
		border: 1px solid ${theming?.color?.gray5};
		border-radius: 6px;
		.ant-table-tbody {
			td.ant-table-cell {
				border: 0;
				&.status {
					padding: 0;
				}
				&.pending {
					border-left: 5px solid #998DD9;
				}
				&.offer-sent {
					border-left: 5px solid #998DD9;
				}
				&.under-contract {
					border-left: 5px solid #998DD9;
				}
				&.bid-ready {
					border-left: 5px solid #998DD9;
				}
				&.reviewed {
					border-left: 5px solid #998DD9;
				}
			}
		}
	}
`;
