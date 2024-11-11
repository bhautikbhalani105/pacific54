import dayjs from 'dayjs';

import { toAbsoluteUrl } from '../functions';
import { TablePaginationConfig } from 'antd';

export function formatPrice(number: number, format: string = 'indian') {
  const locale = format === 'international' ? 'en-US' : 'en-IN';
  return new Intl.NumberFormat(locale).format(number);
}

export function nunSign(number: number, suffix: string, format: string = 'indian') {
  const locale = format === 'international' ? 'en-US' : 'en-IN';
  const formattedNumber = new Intl.NumberFormat(locale).format(Math.abs(number));
  const sign = number >= 0 ? '+' : '-';

  return `${sign}${formattedNumber}${suffix}`;
}

export function getDaysDiff(liDate: number) {
  const currentTime = dayjs();
  const parsedDate = dayjs(liDate);

  if (parsedDate.isValid()) {
    const daysCount = currentTime.diff(parsedDate, 'day');
    return daysCount;
  } else {
    return null;
  }
}

export function propertyStatus(color: string) {
  switch (color) {
    case 'pending':
      return 'pending';
    case 'offerSent':
      return 'offerSent';
    case 'underContract':
      return 'underContract';
    case 'bidReady':
      return 'bidReady';
    case 'reviewed':
      return 'reviewed';
    default:
      return 'reviewed';
  }
}

export const fallbackImg = toAbsoluteUrl('/Images/Svg/fallback-img.svg');
export const avatarFallbackImg = toAbsoluteUrl('/Images/Svg/fallback-avatar.svg');

export const defaultPagination: Partial<TablePaginationConfig> = {
  showSizeChanger: true,
  showQuickJumper: true,
  defaultPageSize: 10,
  pageSizeOptions: ['10', '20', '50', '100'],
  size: 'small',
  position: ['bottomRight'],
  showTotal: (total: number) => `Total ${total} items`
};
