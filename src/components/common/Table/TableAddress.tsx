import { Avatar } from 'antd';

import { avatarFallbackImg } from '../../../utils/constants/utils';

import styled from 'styled-components';

import { theming } from '../../../style/Theme';

const Title = styled.h6`
  font-size: 14px;
  color: ${theming?.color?.primary};
`;

const Paragraph = styled.p`
  font-size: 11px;
  color: ${theming?.color?.gray7};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 10px;
  .ant-avatar {
    min-width: 32px;
    background-color: ${theming?.color?.gray2};
    margin-left: 6px;
  }
  .vertical {
    display: flex;
    flex-direction: column;
    column-gap: 10px;
  }
`;

interface IProps {
  status: string;
  thumb: string;
}

const TableAddress: React.FC<IProps> = ({ status, thumb }) => {
  return (
    <>
      <Wrapper className={status}>
        <Avatar src={thumb ? thumb : avatarFallbackImg} size={32} />
        <div className="vertical">
          <Title>4517 Washington Ave.</Title>
          <Paragraph>North Miami, FL 33181</Paragraph>
        </div>
      </Wrapper>
    </>
  );
};

export default TableAddress;
