import dayjs from 'dayjs';
import { toAbsoluteUrl } from '../functions';

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
      return '#998DD9';
    case 'offerSent':
      return '#00A3BF';
    case 'underContract':
      return '#57D9A3';
    case 'bidReady':
      return '#FF991F';
    case 'reviewed':
      return '#E3E3E3';
    default:
      return '#E3E3E3';
  }
}

export const fallbackImg = toAbsoluteUrl("/Images/Svg/fallback-img.svg");