import { Card, Divider, Typography } from 'antd';

import LoadList from './LoadList';

const { Title, Text } = Typography;
const { Meta } = Card;

const PropertyDetails = () => {
  return (
    <>
      <Title level={3} className="card-heading">
        Property details
      </Title>
      <Card className="detail-card">
        <LoadList />
        <Divider style={{ margin: '24px -24px', width: 'calc(100% + 48px)' }} />
        <Meta
          title={<Text type="secondary">Remarks</Text>}
          description={
            <p>
              Amazing opportunity to own this charming old Spanish style home. As you walk in, it
              invites you to the spacious living/dining room area. Great for family fun & more!
              Expand your celebrations to the HUGE backyard for BBq's and outdoor activities. This
              home comes with 3 bedrooms and 2 full baths. Some TLC required.
            </p>
          }
        />
      </Card>
    </>
  );
};

export default PropertyDetails;
