import { toAbsoluteUrl } from '../../../../utils/functions';

import { MapBoxStyle } from './MapBoxStyle';

const MapBox = () => {
  return (
    <MapBoxStyle className="map-box">
      <img src={toAbsoluteUrl('/Images/Svg/map.svg')} alt="" />
    </MapBoxStyle>
  );
};

export default MapBox;
