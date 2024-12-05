import { Button, Typography } from 'antd';

import { toAbsoluteUrl } from '../../../../../utils/functions';

import { Wrapper } from './DiligenceStyle';

const { Title } = Typography;

interface IProps {
  title: string;
  content: string;
  imgSrc: string;
  btnClick: () => void;
}

const DiligenceCard: React.FC<IProps> = ({ title, content, imgSrc, btnClick }) => {
  return (
    <Wrapper>
      <img width={56} height={56} src={toAbsoluteUrl(`/Images/Svg/${imgSrc}`)} />
      <Title level={5}>{title}</Title>
      <p>{content}</p>
      <Button onClick={btnClick}>Order {title}</Button>
    </Wrapper>
  );
};

export default DiligenceCard;
