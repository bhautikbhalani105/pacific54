import { createGlobalStyle } from 'styled-components';

export const AntCard = createGlobalStyle`
	.ant-card {
		.ant-card-head {
			min-height: 46
		}
		.ant-card-head-title {
			line-height: 1.375;
		}
		.ant-card-extra {
			.ant-radio-button-wrapper {
				height: 30px;
				line-height: 28px;
			}
		}

		.ant-collapse {
			border-radius: 0;
		}

		/* Collapse css Start */
		.ant-collapse .ant-collapse-header {
			align-items: center;
		}
		/* Collapse css Over */
	}
`;
