import { Button, Flex, Typography } from 'antd';

import { useFinancOpt } from '../../../../../services/store/FinancingOption';

const { Paragraph, Text } = Typography;

const Income = () => {
  const purchasePrice = useFinancOpt((state) => state.purchasePrice);
  const closingCosts = useFinancOpt((state) => state.closingCosts);
  const addinlClosingCosts = useFinancOpt((state) => state.addinlClosingCosts);
  const toggFinancOpt = useFinancOpt((state) => state.toggFinancOpt);

  return (
    <>
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
    </>
  );
};

export default Income;
