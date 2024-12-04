import { Button, Typography } from 'antd';

import { toAbsoluteUrl } from '../../../../../utils/functions';

import { Wrapper } from './DiligenceStyle';

const { Title } = Typography;

interface IProps {
  title: string;
  content: string;
  btnClick: () => void;
}

const DiligenceCard: React.FC<IProps> = ({ title, content, btnClick }) => {
  return (
    <Wrapper>
      <img width={56} height={56} src={toAbsoluteUrl('/Images/Svg/inspection.svg')} />
      <Title level={5}>{title}</Title>
      <p>{content}</p>
      <Button onClick={btnClick}>Order {title}</Button>
    </Wrapper>
  );
};

export default DiligenceCard;
