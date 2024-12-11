import { createGlobalStyle } from 'styled-components';

export const AntSteps = createGlobalStyle`
	.ant-steps-item-title {
		font-size: 16px;
		font-weight: 600;
		line-height: 24px;
	}
	.ant-steps-item-container {
		display: flex;
    align-items: flex-start;
		.ant-steps-item-icon {
			min-width: 36px;
		}
		.ant-steps-item-content {
			display: flex;
			align-items: flex-start;
			flex-direction: column;
			max-width: 100%;
			.ant-steps-item-description {
				font-size: 14px;
				font-weight: 400;
				line-height: 22px;
				max-width: 100%;
			}
		}
	}
`;
