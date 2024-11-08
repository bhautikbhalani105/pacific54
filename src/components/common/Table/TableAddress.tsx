import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import styled from 'styled-components';

import { theme } from '../../../style/Theme';

const Title = styled.h6`
  font-size: 14px;
  color: ${theme?.color?.primary};
`;

const Paragraph = styled.p`
  font-size: 11px;
  color: ${theme?.color?.gray7};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 10px;
  .ant-avatar {
    min-width: 32px;
  }
  .vertical {
    display: flex;
    flex-direction: column;
    column-gap: 10px;
  }
`;

const TableAddress: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Avatar icon={<UserOutlined />} size={32} />
        <div className="vertical">
          <Title>4517 Washington Ave.</Title>
          <Paragraph>North Miami, FL 33181</Paragraph>
        </div>
      </Wrapper>
    </>
  );
};

export default TableAddress;
