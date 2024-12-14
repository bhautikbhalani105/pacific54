import { styled } from 'styled-components';

import { theming } from '../../style/Theme';

// import { theming } from '../../style/Theme';

export const Wrapper = styled.div`
  --headerHeight: 48px;
  --footerHeight: 60px;
  --bodyHeight: calc(100vh - var(--headerHeight) - var(--footerHeight));

  .main-layout {
    height: 100vh;
  }
  .content-layout {
    height: var(--bodyHeight);
    overflow: auto;
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
    background: red;
    min-width: 60px;
  }

  .content-body {
    padding: 16px 0;
  }
  .content-wrap {
    padding: 0 16px;
  }
`;
