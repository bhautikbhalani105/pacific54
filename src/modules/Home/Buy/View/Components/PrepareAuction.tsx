import React from 'react';

import { Button, Typography } from 'antd';

import { Wrapper } from './PrepareAuctionStyle';

const { Title } = Typography;

const PrepareAuction: React.FC = () => {
  return (
    <>
      <Title level={3} className="card-heading">
        Prepare for Auction
      </Title>
      <Wrapper className="auction-wrap">
        <div className="auction-step">
          <span className="step-icon">1</span>
          <div className="step-content">
            <div className="heading">
              <h5>Register on county website</h5>
              <span className="step-line"></span>
            </div>
            <p className="description">
              You'll need to register for an auction directly on the county website. Provide the
              information that's requested and create a username and password.
            </p>
          </div>
        </div>
        <div className="auction-step">
          <span className="step-icon">2</span>
          <div className="step-content">
            <div className="heading">
              <h5>Deposit</h5>
              <span className="step-line"></span>
            </div>
            <p className="description">
              Florida counties require a deposit equal to 5% of your highest bid. The deposit will
              be due 1-5 days before the auction, depending on the county. Check the county website
              for details.
            </p>
          </div>
        </div>
        <div className="auction-step">
          <span className="step-icon">3</span>
          <div className="step-content">
            <div className="heading">
              <h5>Payment Confirmation</h5>
              <span className="step-line"></span>
            </div>
            <p className="description">
              Counties typically require payment within 24 hours. Check your county website for
              types of payments accepted and when payment is required. Most counties accept wired
              funds and cashier's checks.
            </p>
          </div>
        </div>
        <div className="text-center mt-36 w-100">
          <Button className="auction-btn" type="primary">
            County Websites List
          </Button>
        </div>
      </Wrapper>
    </>
  );
};

export default PrepareAuction;
