import { InfoCircleFilled } from '@ant-design/icons';
import { Tooltip, Typography } from 'antd';
import { RenderFunction } from 'antd/es/_util/getRenderPropValue';

import { nunSign } from '../../../../utils/constants/utils';

import { Wrapper } from './ValuationCardtyle';

const { Text } = Typography;

interface IProps {
  extraClass?: string;
  valHeading: string;
  tooltipinfo: React.ReactNode | RenderFunction;
  mainVal?: number | string;
  highLow?: number[] | string[];
  incRate?: number;
  rateVal?: number | string;
  mainSignVal?: number;
}

const ValuationCard: React.FC<IProps> = ({
  valHeading,
  mainVal,
  highLow,
  incRate,
  rateVal,
  mainSignVal,
  tooltipinfo,
  extraClass
}) => {
  return (
    <Wrapper className={`card ${extraClass}`}>
      <p>
        {valHeading}&nbsp;
        <Tooltip title={tooltipinfo}>
          <InfoCircleFilled />
        </Tooltip>
      </p>
      {mainVal && (
        <h4>
          {typeof mainVal === 'number' && '$'}
          {mainVal}
        </h4>
      )}
      {mainSignVal && (
        <Text type={`${mainSignVal >= 0 ? 'success' : 'danger'}`} style={{ fontSize: 20 }} strong>
          {nunSign(mainSignVal, '%')}
        </Text>
      )}
      {highLow && (
        <p className="high-low">
          {highLow[0]}-{highLow[1]}
        </p>
      )}
      {rateVal && (
        <p className="high-low">
          {typeof mainVal === 'number' && '$'}
          {rateVal}
        </p>
      )}
      {incRate && (
        <Text type={`${incRate >= 0 ? 'success' : 'danger'}`} style={{ fontSize: 12 }} strong>
          {nunSign(incRate, '%')}
        </Text>
      )}
    </Wrapper>
  );
};

export default ValuationCard;
