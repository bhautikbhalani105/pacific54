import { Col, Row } from 'antd';

import { Wrapper } from '../../cms.style';

const TermsAndCondition = () => {
  return (
    <Wrapper>
      <div className="shadow-paper">
        <Row>
          <Col xs={24}>
            <h2 className="pageTitle mb-20">Terms And Condition</h2>
          </Col>
          <Col xs={24}></Col>
        </Row>
      </div>
    </Wrapper>
  );
};

export default TermsAndCondition;
