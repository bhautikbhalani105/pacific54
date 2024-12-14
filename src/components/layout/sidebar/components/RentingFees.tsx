import { useState } from 'react';

import { Col, InputNumber, Row, Slider } from 'antd';

const RentingFees: React.FC = () => {
  const [range, setRange] = useState<[number, number]>([20, 50]);

  const onSliderChange = (value: number[]) => {
    setRange([value[0], value[1]]);
  };

  const onMinChange = (value: number | null) => {
    if (value !== null) {
      setRange([value, range[1]]);
    }
  };

  const onMaxChange = (value: number | null) => {
    if (value !== null) {
      setRange([range[0], value]);
    }
  };

  return (
    <>
      <Row gutter={16}>
        <Col>
          <InputNumber
            min={1}
            max={100}
            prefix="$"
            controls={false}
            value={range[0]}
            onChange={onMinChange}
          />
        </Col>
        <Col>
          <InputNumber
            min={1}
            max={100}
            prefix="$"
            controls={false}
            value={range[1]}
            onChange={onMaxChange}
          />
        </Col>
      </Row>
      <Slider range min={1} max={100} value={range} onChange={onSliderChange} />
    </>
  );
};

export default RentingFees;
