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
					padding-left: 0;
				}
				.pending {
					--status: #998DD9;
    			border-left: 5px solid var(--status);
				}
				.offerSent {
					--status: #00A3BF;
    			border-left: 5px solid var(--status);
				}
				.underContract {
					--status: #57D9A3;
    			border-left: 5px solid var(--status);
				}
				.bidReady {
					--status: #FF991F;
    			border-left: 5px solid var(--status);
				}
				.reviewed {
					--status: ${theming?.color?.gray9};
    			border-left: 5px solid #E3E3E3;
				}
			}
		}
	}
`;
