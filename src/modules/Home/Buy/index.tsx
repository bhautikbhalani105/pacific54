import { toAbsoluteUrl } from '../../../utils/functions';

import Meta from '../../../components/common/Meta';
import PropertyListTable from '../components/PropertyListTable';

import { Wrapper } from './style';

const HomeBuy = () => {
  return (
    <>
      <Meta title="Pecific54 - Property list" />
      <Wrapper>
        <div className="map-box">
          <img src={toAbsoluteUrl('/Images/Svg/map.svg')} alt="" />
        </div>
        <div className="property list">
          <PropertyListTable />
        </div>
      </Wrapper>
    </>
  );
};

export default HomeBuy;
