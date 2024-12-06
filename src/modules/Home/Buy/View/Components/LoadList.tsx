import { useEffect } from 'react';

import { Col, Flex, Row, Typography } from 'antd';

import { IPropertyDetail, usePropertyDetail } from '../../../../../services/store/PropertyDetail';

const { Paragraph, Text } = Typography;

const LoadList: React.FC = () => {
  const propertyType = usePropertyDetail((state) => state.propertyType);
  const folioNumber = usePropertyDetail((state) => state.folioNumber);
  const mlsNumber = usePropertyDetail((state) => state.mlsNumber);
  const mlsStatus = usePropertyDetail((state) => state.mlsStatus);
  const beds = usePropertyDetail((state) => state.beds);
  const baths = usePropertyDetail((state) => state.baths);
  const lotSize = usePropertyDetail((state) => state.lotSize);
  const yearBuilt = usePropertyDetail((state) => state.yearBuilt);
  const reo = usePropertyDetail((state) => state.reo);
  const shortSale = usePropertyDetail((state) => state.shortSale);
  const pool = usePropertyDetail((state) => state.pool);
  const parking = usePropertyDetail((state) => state.parking);
  const toggleType = usePropertyDetail((state) => state.toggleType);

  const initialValue: IPropertyDetail = {
    propertyType: 'Duplex',
    folioNumber: '01-3125-032-0440',
    mlsNumber: 13454837,
    mlsStatus: 'pending',
    beds: 3,
    baths: 1,
    lotSize: 7500,
    yearBuilt: 1972,
    reo: false,
    shortSale: false,
    pool: false,
    parking: 'Garage'
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data); // Remove after API Call
        toggleType('propertyType', initialValue.propertyType);
        toggleType('folioNumber', initialValue.folioNumber);
        toggleType('mlsNumber', initialValue.mlsNumber);
        toggleType('mlsStatus', initialValue.mlsStatus);
        toggleType('beds', initialValue.beds);
        toggleType('baths', initialValue.baths);
        toggleType('lotSize', initialValue.lotSize);
        toggleType('yearBuilt', initialValue.yearBuilt);
        toggleType('reo', initialValue.reo);
        toggleType('shortSale', initialValue.shortSale);
        toggleType('pool', initialValue.pool);
        toggleType('parking', initialValue.parking);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [
    initialValue.baths,
    initialValue.beds,
    initialValue.folioNumber,
    initialValue.lotSize,
    initialValue.mlsNumber,
    initialValue.mlsStatus,
    initialValue.parking,
    initialValue.pool,
    initialValue.propertyType,
    initialValue.reo,
    initialValue.shortSale,
    initialValue.yearBuilt,
    toggleType
  ]);

  return (
    <Row gutter={[60, 0]}>
      <Col xs={12}>
        <Flex align="center" justify="space-between" className="editable-li">
          <Text type="secondary">Property type</Text>
          <Paragraph editable={{ onChange: (value) => toggleType('propertyType', value) }} strong>
            {propertyType}
          </Paragraph>
        </Flex>
      </Col>
      <Col xs={12}>
        <Flex align="center" justify="space-between" className="editable-li">
          <Text type="secondary">Folio Number</Text>
          <Paragraph editable={{ onChange: (value) => toggleType('folioNumber', value) }} strong>
            {folioNumber}
          </Paragraph>
        </Flex>
      </Col>
      <Col xs={12}>
        <Flex align="center" justify="space-between" className="editable-li">
          <Text type="secondary">MLS Number</Text>
          <Paragraph
            editable={{ onChange: (value) => toggleType('mlsNumber', Number(value)) }}
            strong
          >
            {mlsNumber}
          </Paragraph>
        </Flex>
      </Col>
      <Col xs={12}>
        <Flex align="center" justify="space-between" className="editable-li">
          <Text type="secondary">MLS Status</Text>
          <Paragraph editable={{ onChange: () => toggleType('mlsStatus', 'pending') }} strong>
            {mlsStatus}
          </Paragraph>
        </Flex>
      </Col>
      <Col xs={12}>
        <Flex align="center" justify="space-between" className="editable-li">
          <Text type="secondary">Beds</Text>
          <Paragraph editable={{ onChange: (value) => toggleType('beds', Number(value)) }} strong>
            {beds}
          </Paragraph>
        </Flex>
      </Col>
      <Col xs={12}>
        <Flex align="center" justify="space-between" className="editable-li">
          <Text type="secondary">Baths</Text>
          <Paragraph editable={{ onChange: (value) => toggleType('baths', Number(value)) }} strong>
            {baths}
          </Paragraph>
        </Flex>
      </Col>
      <Col xs={12}>
        <Flex align="center" justify="space-between" className="editable-li">
          <Text type="secondary">Lot Size</Text>
          <Paragraph
            editable={{ onChange: (value) => toggleType('lotSize', Number(value)) }}
            strong
          >
            {lotSize}
          </Paragraph>
        </Flex>
      </Col>
      <Col xs={12}>
        <Flex align="center" justify="space-between" className="editable-li">
          <Text type="secondary">Year Built</Text>
          <Paragraph
            editable={{ onChange: (value) => toggleType('yearBuilt', Number(value)) }}
            strong
          >
            {yearBuilt}
          </Paragraph>
        </Flex>
      </Col>
      <Col xs={12}>
        <Flex align="center" justify="space-between" className="editable-li">
          <Text type="secondary">REO</Text>
          <Paragraph editable={{ onChange: () => toggleType('reo', !reo) }} strong>
            {reo ? 'Yes' : 'No'}
          </Paragraph>
        </Flex>
      </Col>
      <Col xs={12}>
        <Flex align="center" justify="space-between" className="editable-li">
          <Text type="secondary">Short Sale</Text>
          <Paragraph editable={{ onChange: () => toggleType('shortSale', !shortSale) }} strong>
            {shortSale ? 'Yes' : 'No'}
          </Paragraph>
        </Flex>
      </Col>
      <Col xs={12}>
        <Flex align="center" justify="space-between" className="editable-li">
          <Text type="secondary">Pool</Text>
          <Paragraph editable={{ onChange: () => toggleType('pool', !pool) }} strong>
            {pool ? 'Yes' : 'No'}
          </Paragraph>
        </Flex>
      </Col>
      <Col xs={12}>
        <Flex align="center" justify="space-between" className="editable-li">
          <Text type="secondary">Parking</Text>
          <Paragraph editable={{ onChange: (parking) => toggleType('parking', parking) }} strong>
            {parking}
          </Paragraph>
        </Flex>
      </Col>
    </Row>
  );
};

export default LoadList;
