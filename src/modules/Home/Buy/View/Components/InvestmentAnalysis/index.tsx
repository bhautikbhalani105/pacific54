import { Typography } from 'antd';

import FinancingOptions from './FinancingOptions';
import Strategy from './Strategy';

const { Title } = Typography;

const InvestmentAnalysis: React.FC = () => {
  return (
    <>
      <Title level={3} className="card-heading">
        Investment Analysis
      </Title>
      <FinancingOptions />
      <Strategy />
    </>
  );
};

export default InvestmentAnalysis;
