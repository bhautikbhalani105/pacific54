import { Card, Flex, Typography } from 'antd';

const { Text, Paragraph } = Typography;

const HistoryPlantif: React.FC = () => {
  return (
    <Card className="detail-card">
      <Flex align="center" justify="space-between" className="editable-li">
        <Text type="secondary">Plantif Name</Text>
        <Paragraph strong>Bank of America</Paragraph>
      </Flex>
      <Flex align="center" justify="space-between" className="editable-li">
        <Text type="secondary">Plantif Type</Text>
        <Paragraph strong>Financial Institution</Paragraph>
      </Flex>
      <Flex align="center" justify="space-between" className="editable-li">
        <Text type="secondary">Properties Ratio (Sold vs Kept)</Text>
        <Paragraph strong>1:4 (25%)</Paragraph>
      </Flex>
      <Flex align="center" justify="space-between" className="editable-li">
        <Text type="secondary">AVG Discount Rate</Text>
        <Paragraph strong>25%</Paragraph>
      </Flex>
      <Flex align="center" justify="space-between" className="editable-li">
        <Text type="secondary">Midian Discount Rate</Text>
        <Paragraph strong>20%</Paragraph>
      </Flex>
    </Card>
  );
};

export default HistoryPlantif;
