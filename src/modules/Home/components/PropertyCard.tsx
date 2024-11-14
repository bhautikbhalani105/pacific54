import { Button, Checkbox, Col, Divider, Flex, Image, Typography } from 'antd';
import type { CheckboxProps } from 'antd';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../../utils/constants/routes';
import { fallbackImg, getDaysDiff, nunSign, propertyStatus } from '../../../utils/constants/utils';

import { MlsIcon } from '../../../svg';
import Amenities from './Amenities';
import { Wrapper } from './PropertyCardStyle';

const { Text, Title } = Typography;

const onChange: CheckboxProps['onChange'] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

interface IProps {
  address: string;
  beds: number;
  baths: number;
  capRate: number;
  endUrl: string;
  estRent: number;
  estValue: number;
  liDate: number;
  roi: number;
  sqFt: number;
  status: string;
  thumb: string;
  pictures: string[];
}

const PropertyCard: React.FC<IProps> = (props) => {
  const {
    address,
    beds,
    baths,
    capRate,
    endUrl,
    estRent,
    estValue,
    liDate,
    pictures,
    roi,
    sqFt,
    status,
    thumb
  } = props;

  const navigate = useNavigate();

  const area = Intl.NumberFormat('en-US').format(sqFt);
  const daysCount = getDaysDiff(liDate);
  const fCapRate = nunSign(capRate, '%');
  const fEstRent = Intl.NumberFormat('en-US').format(estRent);
  const fEstValue = Intl.NumberFormat('en-US').format(estValue);
  const fRoi = nunSign(roi, '%');
  const fStatus = propertyStatus(status);

  return (
    <Col xs={6}>
      <Wrapper className={fStatus}>
        <Checkbox onChange={onChange}></Checkbox>
        <Image.PreviewGroup items={pictures} preview={true}>
          <Image
            rootClassName="ratio r-16-9"
            preview={Array.isArray(pictures) && pictures.length > 0}
            src={thumb}
            fallback={fallbackImg}
          />
        </Image.PreviewGroup>
        <div className="card-content">
          <Flex gap={6} className="header">
            <MlsIcon />
            <Text className="text-gray7">Day in the market: {daysCount} days</Text>
          </Flex>
          <Divider />
          <div className="main">
            <Flex gap={6} align="center" justify="space-between" className="price">
              <Title level={3}>${fEstValue}</Title>
              <Button onClick={() => navigate(`${ROUTES.buyView}/${endUrl}`)}>Preview</Button>
            </Flex>
            <p>{address}</p>
            <Amenities beds={beds} baths={baths} area={area} />
          </div>
          <div className="footer">
            <Flex>
              <div className="details">
                <Text className="bid" type={`${roi >= 0 ? 'success' : 'danger'}`} strong>
                  {fRoi}
                </Text>
                <p className="heading">ROI</p>
              </div>
              <div className="details center">
                <Text className="bid" type={`${capRate >= 0 ? 'success' : 'danger'}`} strong>
                  {fCapRate}
                </Text>
                <p className="heading">Cap Rate</p>
              </div>
              <div className="details">
                <p className="bid">${fEstRent}</p>
                <p className="heading">Estimated Rent</p>
              </div>
            </Flex>
          </div>
        </div>
      </Wrapper>
    </Col>
  );
};

export default PropertyCard;
