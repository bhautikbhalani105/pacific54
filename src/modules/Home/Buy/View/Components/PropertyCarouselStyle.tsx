import styled from 'styled-components';

import { theming } from '../../../../../style/Theme';

export const Wrapper = styled.div`
  border-radius: 6px;
  overflow: hidden;
  height: 100%;

  .ant-carousel,
  .slick-slider,
  .slick-list,
  .slick-track,
  .slick-slide,
  .slick-slide > div,
  .carousel-slide {
    height: 100%;
  }

  .carousel-slide {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .slick-arrow {
    opacity: 1;
    border-radius: 20px;
    width: 24px;
    height: 24px;
    background: ${theming?.color?.textTitle}40;
    &::after {
      top: 7px;
      width: 9px;
      height: 9px;
    }
    &.slick-prev::after {
      inset-inline-start: 9px;
    }
    &.slick-next::after {
      inset-inline-start: 6px;
    }
  }
`;
