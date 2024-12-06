import { Card, Col, Row } from 'antd';

import HistoryBiddersChart from './HistoryBiddersChart';
import HistoryBiddersList from './HistoryBiddersList';

const HistoryBidders: React.FC = () => {
  return (
    <Card className="detail-card">
      <Row>
        <Col xs={10}>
          <HistoryBiddersList />
        </Col>
        <Col xs={14}>
          <HistoryBiddersChart />
        </Col>
      </Row>
    </Card>
  );
};

export default HistoryBidders;
