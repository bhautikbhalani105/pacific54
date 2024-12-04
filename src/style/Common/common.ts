import { createGlobalStyle } from 'styled-components';

import { theming } from '../Theme';
import { boxShadow } from './Mixin';

export const Common = createGlobalStyle`

	.container-fluid {
		width: 100%;
		max-width: 100%;
		padding-left: 15px;
		padding-right: 15px;
		margin: 0 auto;
	}

	.container {
		width: 100%;
		max-width: 1230px;
		padding-left: 15px;
		padding-right: 15px;
		margin: 0 auto;

		&.lg {
			width: 1290px;
		}

		&.md {
			width: 908px;
		}
	}

	.shadow-paper {
		height: 100%;
		background: ${theming?.color?.white};
		padding: 20px;
		border-radius: 10px;
		${boxShadow('10px 10px 20px 5px rgba(0, 0, 0, 0.05)')}

		&.auto-height {
			height: auto;
		}

		.shadow-paper-scroll {
			height: 100%;
			overflow: hidden;
			overflow-y: auto;
			margin: 0 -20px;
			padding: 0 20px;
		}

		+.shadow-paper {
			margin-top: 20px;
		}

		&.no-bg{
			background-color: transparent;
		}

		&.pad-sm{
			padding: 10px 20px;
		}

		&.pad-md{
			padding: 15px 20px;
		}

		&.no-padd {
			padding: 0;
		}

		.heading-row {
			padding: 20px 0;
		}
	}

	/* Text Alignment */
	.text-center {
		text-align: center;
	}

	.text-left {
		text-align: left;
	}

	.text-right {
		text-align: right;
	}

	/* Text Colors */
	.text-success {
		color: ${theming?.color?.success};
	}

	.text-danger {
		color: ${theming?.color?.danger};
	}

	.text-warning {
		color: ${theming?.color?.warning};
	}

	.text-info {
		color: ${theming?.color?.info};
	}

	.text-gray7 {
		color: ${theming?.color?.gray7};
	}

	/* Width & Height */
	.w-100 {
		width: 100%;
	}

	.max-w-100 {
		max-width: 100%;
	}

	.h-100 {
		height: 100%;
	}

	.h-100vh {
		min-height: 100vh;
	}

	.separate-paginaion {
		margin-top: 20px;
		margin-left: auto;
		margin-right: 0;
		justify-content: flex-end;
	}

	.ant-typography.card-heading {
		margin: 24px 0 16px;
	}

	.tab-card .ant-tabs-nav {
		flex-direction: row-reverse;
		justify-content: space-between;
		margin: 0;

		&::before {
			content: none;
		}

		.ant-tabs-nav-wrap {
			flex: none;
		}
		.ant-tabs-nav-operations {
			display: none;
		}
		.ant-tabs-extra-content .ant-typography {
			margin: 0 0 12px;
		}
	}

	.b-t-1-solid-gray5 {
		border-top: 1px solid ${theming?.color?.gray5};
	}
	.b-b-1-solid-gray5 {
		border-bottom: 1px solid ${theming?.color?.gray5};
	}

	/* Swiper common css start */
	.swiper {
		overflow: hidden;
	}
	.swiper-slide {
		flex-shrink: 0;
	}
	.swiper-wrapper {
		display: flex;
	}
	/* Swiper common css over */

	/*  */
	.editable-li {
    padding-inline: 20px;
    height: 36px;

    &:hover {
      background: ${theming?.color?.gray3};
      cursor: pointer;
      border-radius: 6px;
    }

		.ant-typography {
			margin: 0;
		}
  }
  
  .editable-li-total {
    padding-inline: 20px;
    height: 36px;
    justify-content: flex-end;
    background: ${theming?.color?.gray3};
    cursor: pointer;
    border-radius: 6px;
		max-width: 340px;
		margin-left: auto;
		line-height: 1.375;
		font-weight: 600;
		color: ${theming?.color?.gray8};

		span {
			color: ${theming?.color?.textTitle};
		}
  }
	/*  */
`;
