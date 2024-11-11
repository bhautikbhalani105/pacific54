import { ConfigProvider } from 'antd';

import { theming } from '../../style/Theme';

const ThemeConfig = ({ children }: any) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          // colorTextBase: `${theming?.color?.textTitle}`,
          colorBgContainer: `${theming?.color?.white}`,
          colorBgContainerDisabled: `${theming?.color?.grayLight}`,
          colorBgTextHover: `${theming?.color?.primaryLight}`,
          colorBorder: `${theming?.color?.primary}`,
          colorError: `${theming?.color?.danger}`,
          colorLink: `${theming?.color?.black}`,
          colorLinkActive: `${theming?.color?.primary}`,
          colorLinkHover: `${theming?.color?.primary}`,
          colorPrimary: `${theming?.color?.primary}`,
          colorPrimaryActive: `${theming?.color?.primary}`,
          colorPrimaryHover: `${theming?.color?.primary}`,
          colorText: `${theming?.color?.textTitle}`,
          colorTextPlaceholder: `${theming?.color?.primaryLight}`,
          colorTextDisabled: `${theming?.color?.gray}`,
          borderRadius: 8,
          controlHeight: 36,
          controlHeightSM: 30,
          controlOutline: `${theming?.color?.transparent}`,
          fontSize: 14,
          fontFamily: `${theming?.font?.family?.openSans}`,
          fontSizeLG: 16,
          lineHeight: 1,
          controlPaddingHorizontal: 15,
          controlPaddingHorizontalSM: 10
        },
        components: {
          Layout: {
            bodyBg: `${theming?.color?.light}`,
            footerBg: `${theming?.color?.white}`,
            footerPadding: '20px 30px',
            headerBg: `${theming?.color?.white}`,
            headerHeight: 64,
            headerPadding: '0 30px',
            siderBg: `${theming?.color?.white}`,
            triggerBg: `${theming?.color?.light}`,
            triggerColor: `${theming?.color?.black}`,
            triggerHeight: 56
          },
          Menu: {
            darkItemBg: `${theming?.color?.white}`,
            darkItemColor: `${theming?.color?.black}`,
            darkItemHoverBg: `${theming?.color?.grayLight}`,
            darkItemHoverColor: `${theming?.color?.black}`,
            darkItemSelectedBg: `${theming?.color?.primary}`,
            darkItemSelectedColor: `${theming?.color?.primary}`,
            darkItemDisabledColor: `${theming?.color?.grayLight}`,
            darkSubMenuItemBg: 'inherit',
            iconSize: 16,
            collapsedIconSize: 16,
            itemBorderRadius: 10,
            itemHeight: 42,
            itemMarginBlock: 6,
            itemMarginInline: 12
          },
          Form: {
            itemMarginBottom: 0,
            labelColor: `${theming?.color?.dark}`,
            labelFontSize: 14,
            labelHeight: 30,
            verticalLabelPadding: '0 0 6px',
            colorError: `${theming?.color?.danger}`,
            lineHeight: 2
          },
          Table: {
            borderColor: `${theming?.color?.gray5}`,
            cellFontSizeSM: 14,
            headerBg: `${theming?.color?.gray3}`,
            headerColor: `${theming?.color?.gray9}`,
            rowHoverBg: `${theming?.color?.light}`,
            borderRadius: 0,
            headerBorderRadius: 7,
            cellPaddingBlock: 8,
            cellPaddingInline: 8,
            colorText: `${theming?.color?.textTitle}`
          },
          Pagination: {
            itemSize: 30,
            itemSizeSM: 30
          },
          Typography: {
            colorSuccess: `${theming?.color?.success}`,
            colorError: `${theming?.color?.danger}`
          },
          Rate: {
            fontSize: 6
          },
          Image: {
            colorBgContainerDisabled: `${theming?.color?.danger}`
          },
          Checkbox: {
            borderRadiusSM: 2
          }
        }
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeConfig;
