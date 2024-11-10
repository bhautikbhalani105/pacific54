import styled from 'styled-components';

import { theming } from '../../../style/Theme';

interface IProps {
  status: string;
}
export const Wrapper = styled.div<IProps>`
  background: ${theming?.color?.white};
  border: 1px solid ${theming?.color?.gray4};
  border-bottom: 5px solid ${(props) => props.status};
  border-radius: 10px;
  overflow: hidden;

  .ant-image {
    &.ratio {
      position: relative;
      width: 100%;
      overflow: hidden;

      img {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        transform: translate(-50%, -50%);
        object-fit: cover;
      }
      &.ant-image-error {
        background-color: ${theming?.color?.gray5};
        img {
          width: auto;
          height: auto;
          object-fit: contain;
        }
      }
    }
    &.r-16-9 {
      padding-top: 56.25%;
    }
  }

  .header {
    padding: 2px 12px 6px;
  }

  .ant-divider {
    margin: 0;
  }

  .ant-btn {
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    border-color: ${theming?.color?.gray4};
    padding: 0 15px;
    height: 26px;
    border-radius: 6px;
  }

  .price {
    margin-bottom: 2px;
  }

  h3 {
    margin: 0;
  }

  p {
    font-size: 14px;
    color: ${theming?.color?.textTitle};
  }

  .main {
    padding: 8px 12px 0;
  }

  .amenities {
    padding: 12px 0;

    p {
      font-size: 12px;
      line-height: 16px;
      color: ${theming?.color?.gray9};
    }
  }

  .footer {
    border-top: 1px solid ${theming?.color?.gray4};

    .details {
      flex: 0 0 33.3333%;
      padding: 6px 12px;

      &.center {
        border-inline: 1px solid ${theming?.color?.gray4};
      }
    }

    .heading {
      font-size: 12px;
      font-weight: 700;
      line-height: 16px;
      color: ${theming?.color?.gray9};
      margin-top: 2px;
    }

    p.bid {
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
      color: ${theming?.color?.black};
    }
  }
`;
