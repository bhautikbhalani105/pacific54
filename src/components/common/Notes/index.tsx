import React, { useEffect, useState } from 'react';

import { Avatar, Button, Card, Divider, Flex, Input, List, Typography } from 'antd';
import VirtualList from 'rc-virtual-list';

import { toAbsoluteUrl } from '../../../utils/functions';

import { Wrapper } from './style';

const { TextArea } = Input;
const { Title } = Typography;

interface UserItem {
  email: string;
  gender: string;
  name: {
    first: string;
    last: string;
    title: string;
  };
  nat: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

const fakeDataUrl =
  'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
const ContainerHeight = 200;

const Notes: React.FC = () => {
  const [data, setData] = useState<UserItem[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log('Change:', e.target.value);
  };

  const appendData = (showMessage = true) => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        setData(data.concat(body.results));
        if (showMessage) {
          // message.success(`${body.results.length} more items loaded!`);
        }
      });
  };

  useEffect(() => {
    appendData(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    // Refer to: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#problems_and_solutions
    if (Math.abs(e.currentTarget.scrollHeight - e.currentTarget.scrollTop - ContainerHeight) <= 1) {
      appendData();
    }
  };

  return (
    <Wrapper>
      <Title level={3} className="card-heading">
        Notes
      </Title>
      <Card className="detail-card">
        <List>
          <VirtualList
            data={data}
            height={ContainerHeight}
            itemHeight={20}
            itemKey="email"
            onScroll={onScroll}
          >
            {(item: UserItem) => (
              <List.Item key={item.email}>
                <List.Item.Meta
                  avatar={<Avatar src={item.picture.large} />}
                  title={
                    <a href="https://ant.design">
                      Jack Sparrow <span>2 days ago</span>
                    </a>
                  }
                  description={item.email}
                />
                <div>Content</div>
              </List.Item>
            )}
          </VirtualList>
        </List>
        <Divider />
        <Flex gap={16}>
          <Avatar src={toAbsoluteUrl('/Images/avatar.svg')} />
          <TextArea
            showCount
            maxLength={100}
            onChange={onChange}
            placeholder="Controlled auto resize"
          />
        </Flex>
        <div className="mt-36 ml-50">
          <Button className="auction-btn" type="primary">
            Add Note
          </Button>
        </div>
      </Card>
    </Wrapper>
  );
};

export default Notes;
