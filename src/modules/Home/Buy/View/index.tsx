import React from 'react';

import { ArrowLeftOutlined, EllipsisOutlined, InfoCircleFilled } from '@ant-design/icons';
import { Button, Dropdown, Flex, Typography } from 'antd';

import Amenities from '../../components/Amenities';

import { Wrapper } from './style';

const { Title } = Typography;

const BuyDetail: React.FC = () => {
  const items = [
    {
      key: '1',
      label: '1st item'
    },
    {
      key: '2',
      label: '2nd item'
    },
    {
      key: '3',
      label: '3rd item'
    }
  ];

  return (
    <Wrapper className="view-property">
      <div className="view-header">
        <div className="top-header">
          <div className="container">
            <Flex align="center" justify="space-between" gap={12}>
              <Flex align="center" justify="flex-start" gap={12}>
                <Button icon={<ArrowLeftOutlined />} />
                <Flex align="center" justify="flex-start" gap={24}>
                  <Title level={3} className="heading">
                    1800 Sans Souci Blvd
                  </Title>
                  <Amenities beds={10} baths={10} area={'1111'} />
                </Flex>
              </Flex>
              <Flex align="center" justify="flex-start" gap={8}>
                <Button type="primary">Save</Button>
                <Dropdown menu={{ items }} trigger={['click']}>
                  <Button icon={<EllipsisOutlined />} />
                </Dropdown>
              </Flex>
            </Flex>
          </div>
        </div>
        <div className="valuations">
          <div className="container">
            <Flex align="center" justify="space-between" gap={12}>
              <div className="card">
                <p>
                  Listing Value <InfoCircleFilled />
                </p>
                <h4>$275,000</h4>
                <p className="high-low">$221,000-$295,500</p>
              </div>
              <div className="card">
                <p>
                  Listing Value <InfoCircleFilled />
                </p>
                <h4>$275,000</h4>
                <p className="high-low">$221,000-$295,500</p>
              </div>
              <div className="card">
                <p>
                  Listing Value <InfoCircleFilled />
                </p>
                <h4>$275,000</h4>
                <p className="high-low">$221,000-$295,500</p>
              </div>
              <div className="card">
                <p>
                  Listing Value <InfoCircleFilled />
                </p>
                <h4>$275,000</h4>
                <p className="high-low">$221,000-$295,500</p>
              </div>
              <div className="card">
                <p>
                  Listing Value <InfoCircleFilled />
                </p>
                <h4>$275,000</h4>
                <p className="high-low">$221,000-$295,500</p>
              </div>
              <div className="card">
                <p>
                  Listing Value <InfoCircleFilled />
                </p>
                <h4>$275,000</h4>
                <p className="high-low">$221,000-$295,500</p>
              </div>
              <div className="card">
                <p>
                  Listing Value <InfoCircleFilled />
                </p>
                <h4>$275,000</h4>
                <p className="high-low">$221,000-$295,500</p>
              </div>
            </Flex>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default BuyDetail;
