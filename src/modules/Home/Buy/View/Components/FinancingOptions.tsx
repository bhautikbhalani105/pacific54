import { useState } from 'react';

import { Button, Card, Flex, Radio, Typography } from 'antd';
import type { ConfigProviderProps, RadioChangeEvent } from 'antd';

import { useFinancOpt } from '../../../../../services/store/FinancingOption';

type SizeType = ConfigProviderProps['componentSize'];

const { Paragraph, Text } = Typography;

const FinancingOptions = () => {
  const [size, setSize] = useState<SizeType>('small');
  const purchasePrice = useFinancOpt((state) => state.purchasePrice);
  const closingCosts = useFinancOpt((state) => state.closingCosts);
  const addinlClosingCosts = useFinancOpt((state) => state.addinlClosingCosts);
  const toggFinancOpt = useFinancOpt((state) => state.toggFinancOpt);

  const onChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };

  const cardTabs = (
    <Radio.Group buttonStyle="solid" value={size} onChange={onChange}>
      <Radio.Button value="cash">Cash</Radio.Button>
      <Radio.Button value="mortgage">Mortgage</Radio.Button>
      <Radio.Button value="hardMoney">Hard money</Radio.Button>
    </Radio.Group>
  );
  return (
    <Card className="detail-card" title="Financing Options" extra={cardTabs}>
      <Flex align="center" justify="space-between" className="editable-li">
        <Text type="secondary">Purchase price</Text>
        <Paragraph
          editable={{ onChange: (value) => toggFinancOpt('purchasePrice', Number(value)) }}
          strong
        >
          {purchasePrice}
        </Paragraph>
      </Flex>
      <Flex align="center" justify="space-between" className="editable-li">
        <Text type="secondary">Closing costs (of the purchase)</Text>
        <Paragraph
          editable={{ onChange: (value) => toggFinancOpt('closingCosts', Number(value)) }}
          strong
        >
          {closingCosts}
        </Paragraph>
      </Flex>
      <Flex align="center" justify="space-between" className="editable-li">
        <Text type="secondary">Additional Closing Costs</Text>
        <Paragraph
          editable={{ onChange: (value) => toggFinancOpt('addinlClosingCosts', Number(value)) }}
          strong
        >
          {addinlClosingCosts}
        </Paragraph>
      </Flex>
      <Button type="link" className="ml-20">
        Add additional value
      </Button>
      <Flex align="center" justify="space-between" className="editable-li-total">
        <Text type="secondary">
          Total purchase cost: <span>{purchasePrice + closingCosts + addinlClosingCosts}</span>
        </Text>
      </Flex>
    </Card>
  );
};

export default FinancingOptions;
