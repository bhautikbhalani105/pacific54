import { Col, Row } from 'antd';

import Meta from '../../components/common/Meta';
import ContentHeader from '../../components/layout/contentHeader';

import { Wrapper } from './style';

const Dashboard = () => {
  return (
    <>
      <Meta title="Demo App - Home" />
      <Wrapper>
        <ContentHeader pageTitle="Dashboard" />
        <div className="shadow-paper">
          <Row>
            {/* <Col xs={24}>
              <h2 className="pageTitle mb-20">Dashboard</h2>
            </Col> */}
            <Col xs={8} lg={6}>
              <div className="dashboardInfo">
                <span className="number">100</span>
                <h2 className="infoTitle">Total Users</h2>
              </div>
            </Col>
            <Col xs={8} lg={6}>
              <div className="dashboardInfo">
                <span className="number">100</span>
                <h2 className="infoTitle">Total Users</h2>
              </div>
            </Col>
            <Col xs={8} lg={6}>
              <div className="dashboardInfo">
                <span className="number">100</span>
                <h2 className="infoTitle">Total Users</h2>
              </div>
            </Col>
            <Col xs={8} lg={6}>
              <div className="dashboardInfo">
                <span className="number">100</span>
                <h2 className="infoTitle">Total Users</h2>
              </div>
            </Col>
          </Row>
        </div>
      </Wrapper>
    </>
  );
};

export default Dashboard;
