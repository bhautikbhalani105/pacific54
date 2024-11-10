import { Button, Col, Divider, Flex, Image, Typography } from 'antd';

import { fallbackImg, getDaysDiff, nunSign, propertyStatus } from '../../../utils/constants/utils';

import { BedIcon, MlsIcon, ShowerIcon, Straighten } from '../../../svg';
import { Wrapper } from './PropertyCardStyle';

const { Text, Title } = Typography;

interface IProps {
  address: string;
  beds: number;
  baths: number;
  capRate: number;
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
  const { address, beds, baths, capRate, estRent, estValue, liDate, pictures, roi, sqFt, status, thumb } = props;

  const area = Intl.NumberFormat('en-US').format(sqFt);
  const daysCount = getDaysDiff(liDate);
  const fCapRate = nunSign(capRate, '%');
  const fEstRent = Intl.NumberFormat('en-US').format(estRent);
  const fEstValue = Intl.NumberFormat('en-US').format(estValue);
  const fRoi = nunSign(roi, '%');
  const fStatus = propertyStatus(status);  

  return (
    <Col xs={6}>
      <Wrapper status={fStatus}>
        {pictures.length > 0 ?
          <Image.PreviewGroup
            items={pictures}
          >
            <Image rootClassName="ratio r-16-9" src={thumb} fallback={fallbackImg} />
          </Image.PreviewGroup>
          :
          <Image rootClassName="ratio r-16-9" src={thumb} fallback={fallbackImg} />
        }
        <div className="card-content">
          <Flex gap={6} className="header">
            <MlsIcon />
            <Text className="text-gray7">Day in the market: {daysCount} days</Text>
          </Flex>
          <Divider />
          <div className="main">
            <Flex gap={6} align="center" justify="space-between" className="price">
              <Title level={3}>${fEstValue}</Title>
              <Button>Preview</Button>
            </Flex>
            <p>{address}</p>
            <Flex gap={16} className="amenities">
              <Flex gap={4} align="center">
                <BedIcon />
                <p>{beds}bds</p>
              </Flex>
              <Flex gap={4} align="center">
                <ShowerIcon />
                <p>{baths}ba</p>
              </Flex>
              <Flex gap={4} align="center">
                <Straighten />
                <p>{area} sqft</p>
              </Flex>
            </Flex>
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
                <p className="heading">Estimated rent</p>
              </div>
            </Flex>
          </div>
        </div>
      </Wrapper>
    </Col>
  );
};

export default PropertyCard;
