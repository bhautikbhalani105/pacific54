import { styled } from 'styled-components';

import { theming } from '../../style/Theme';

export const Wrapper = styled.div`
  --headerHeight: 48px;
  --footerHeight: 48px;
  --bodyHeight: calc(100vh - var(--headerHeight) - var(--footerHeight));

  .main-layout {
    height: 100vh;
  }

  .content-layout {
    height: var(--bodyHeight);
    padding: 16px 0;
    overflow: hidden;
    overflow-y: auto;
  }

  .content-wrap {
    padding: 0 16px;
  }

  .sider-content {
    overflow: hidden;
    overflow-y: auto;
  }

  .ant-layout-header {
    padding: 0 16px;
    height: var(--headerHeight);
    line-height: var(--headerHeight);
  }

  .ant-menu {
    width: 100%;
    border: 0;
    margin-left: 60px;

    .ant-menu-item {
      font-size: 14px;
      font-weight: 600;
      line-height: 22px;
    }
  }

  .sidebar-heading {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    color: ${theming?.color?.textTitle};
    margin-bottom: 12px;
  }

  .filter-heading {
    font-size: 14px;
    line-height: 22px;
    font-weight: 700;
    color: ${theming?.color?.primaryDark};
    margin-top: 24px;
    margin-bottom: 2px;
  }

  .filter-info {
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    color: ${theming?.color?.gray9};
  }

  .ant-layout-sider-trigger {
    background: ${theming?.color?.textTitle};
    color: ${theming?.color?.white};
    min-width: var(--footerHeight);
    height: var(--footerHeight);
  }

  .ant-layout-footer {
    height: var(--footerHeight);
    line-height: 24px;
    text-align: center;
    padding: 12px 16px;
  }
`;
