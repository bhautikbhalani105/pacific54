import { Typography } from 'antd';

import DueDiligence from './DueDiligence';

const { Title } = Typography;

const Diligence: React.FC = () => {
  return (
    <>
      <Title level={3} className="card-heading">
        Due Diligence
      </Title>
      <DueDiligence />
    </>
  );
};

export default Diligence;
