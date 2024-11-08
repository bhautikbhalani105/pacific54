import { ConfigProvider } from 'antd';

import { theme } from '../../style/Theme';

const ThemeConfig = ({ children }: any) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: `${theme?.color?.white}`,
          colorBgContainerDisabled: `${theme?.color?.grayLight}`,
          colorBgTextHover: `${theme?.color?.primaryLight}`,
          colorBorder: `${theme?.color?.primary}`,
          colorError: `${theme?.color?.danger}`,
          colorLink: `${theme?.color?.black}`,
          colorLinkActive: `${theme?.color?.primary}`,
          colorLinkHover: `${theme?.color?.primary}`,
          colorPrimary: `${theme?.color?.primary}`,
          colorPrimaryActive: `${theme?.color?.primary}`,
          colorPrimaryHover: `${theme?.color?.primary}`,
          colorText: `${theme?.color?.black}`,
          colorTextPlaceholder: `${theme?.color?.primaryLight}`,
          colorTextDisabled: `${theme?.color?.gray}`,
          borderRadius: 8,
          controlHeight: 36,
          controlHeightSM: 30,
          controlOutline: `${theme?.color?.transparent}`,
          fontSize: 14,
          fontFamily: `${theme?.font?.family?.openSans}`,
          fontSizeLG: 16,
          lineHeight: 1,
          controlPaddingHorizontal: 15,
          controlPaddingHorizontalSM: 10
        },
        components: {
          Layout: {
            bodyBg: `${theme?.color?.light}`,
            footerBg: `${theme?.color?.white}`,
            footerPadding: '20px 30px',
            headerBg: `${theme?.color?.white}`,
            headerHeight: 64,
            headerPadding: '0 30px',
            siderBg: `${theme?.color?.white}`,
            triggerBg: `${theme?.color?.light}`,
            triggerColor: `${theme?.color?.black}`,
            triggerHeight: 56
          },
          Menu: {
            darkItemBg: `${theme?.color?.white}`,
            darkItemColor: `${theme?.color?.black}`,
            darkItemHoverBg: `${theme?.color?.grayLight}`,
            darkItemHoverColor: `${theme?.color?.black}`,
            darkItemSelectedBg: `${theme?.color?.primary}`,
            darkItemSelectedColor: `${theme?.color?.primary}`,
            darkItemDisabledColor: `${theme?.color?.grayLight}`,
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
            labelColor: `${theme?.color?.dark}`,
            labelFontSize: 14,
            labelHeight: 30,
            verticalLabelPadding: '0 0 6px',
            colorError: `${theme?.color?.danger}`,
            lineHeight: 2
          },
          Table: {
            borderColor: `${theme?.color?.gray5}`,
            cellFontSizeSM: 14,
            headerBg: `${theme?.color?.gray3}`,
            headerColor: `${theme?.color?.gray9}`,
            rowHoverBg: `${theme?.color?.light}`,
            borderRadius: 0,
            headerBorderRadius: 7,
            cellPaddingBlock: 8,
            cellPaddingInline: 8,
            colorText: `${theme?.color?.textTitle}`
          },
          Pagination: {
            itemSize: 30,
            itemSizeSM: 30
          },
          Typography: {
            colorSuccess: `${theme?.color?.success}`,
            colorError: `${theme?.color?.danger}`
          },
          Rate: {
            fontSize: 6
          }
        }
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeConfig;
