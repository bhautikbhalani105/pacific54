import { Col, Row } from 'antd';

import DiligenceCard from './DiligenceCard';

const DueDiligence: React.FC = () => {
  const orderDiligence = (e: string) => {
    console.log('Clicked', e);
  };
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col xs={6}>
          <DiligenceCard
            title="Inspection"
            imgSrc="Inspection.svg"
            content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit aliqua dolor."
            btnClick={() => orderDiligence('Inspection')}
          />
        </Col>
        <Col xs={6}>
          <DiligenceCard
            title="Appraiser"
            imgSrc="Appraiser.svg"
            content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit aliqua dolor."
            btnClick={() => orderDiligence('Appraiser')}
          />
        </Col>
        <Col xs={6}>
          <DiligenceCard
            title="Title search"
            imgSrc="titleSearch.svg"
            content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit aliqua dolor."
            btnClick={() => orderDiligence('titleSearch')}
          />
        </Col>
        <Col xs={6}>
          <DiligenceCard
            title="Lien search"
            imgSrc="lienSearch.svg"
            content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit aliqua dolor."
            btnClick={() => orderDiligence('lienSearch')}
          />
        </Col>
      </Row>
    </>
  );
};

export default DueDiligence;
