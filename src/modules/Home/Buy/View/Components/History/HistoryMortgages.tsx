import { Card, Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';

const HistoryMortgages: React.FC = () => {
  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'Recording Date',
      children: '5/23/2005'
    },
    {
      key: '2',
      label: 'Borrower',
      children: 'Michael McDonald'
    },
    {
      key: '3',
      label: 'Lender Name',
      children: 'Citibank Inc'
    },
    {
      key: '4',
      label: 'Doc. number',
      // span: 2,
      children: '2009R0107740'
    },
    {
      key: '5',
      label: 'Loan amount',
      children: '$275,000'
    },
    {
      key: '6',
      label: 'Est. Loan payment',
      children: '$1,588'
    },
    {
      key: '7',
      label: 'Est. Loan balance',
      children: '$225,000'
    }
  ];

  const items2: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'Recording Date',
      children: (
        <ul className="description-ul">
          <li>5/23/2005</li>
          <li>5/23/2005</li>
          <li>5/23/2005</li>
          <li>5/23/2005</li>
        </ul>
      )
    },
    {
      key: '2',
      label: 'Borrower',
      children: (
        <ul className="description-ul">
          <li>Michael McDonald</li>
          <li>Michael McDonald</li>
          <li>Michael McDonald</li>
          <li>Michael McDonald</li>
        </ul>
      )
    },
    {
      key: '3',
      label: 'Lender Name',
      children: (
        <ul className="description-ul">
          <li>Citibank Inc</li>
          <li>Citibank Inc</li>
          <li>Citibank Inc</li>
          <li>Citibank Inc</li>
        </ul>
      )
    },
    {
      key: '4',
      label: 'Doc. number',
      children: (
        <ul className="description-ul">
          <li>2009R0107740</li>
          <li>2009R0107740</li>
          <li>2009R0107740</li>
          <li>2009R0107740</li>
        </ul>
      )
    },
    {
      key: '5',
      label: 'Loan amount',
      children: (
        <ul className="description-ul">
          <li>$275,000</li>
          <li>$275,000</li>
          <li>$275,000</li>
          <li>$275,000</li>
        </ul>
      )
    },
    {
      key: '6',
      label: 'Est. Loan payment',
      children: (
        <ul className="description-ul">
          <li>$1,588</li>
          <li>$1,588</li>
          <li>$1,588</li>
          <li>$1,588</li>
        </ul>
      )
    }
  ];

  return (
    <Card className="detail-card">
      <Descriptions
        column={7}
        colon={false}
        title="Current Mortgage"
        layout="vertical"
        items={items}
        style={{ paddingBottom: 36 }}
      />
      <Descriptions
        column={7}
        colon={false}
        title="Current Mortgage"
        layout="vertical"
        items={items2}
      />
    </Card>
  );
};

export default HistoryMortgages;
