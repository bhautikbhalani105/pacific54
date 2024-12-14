import { useState } from 'react';

import { Checkbox } from 'antd';

import { Wrapper } from './style';

const CheckboxGroup = Checkbox.Group;

const ListingType: React.FC = () => {
  const plainOptions = ['Auction (45)', 'MLS (112)'];

  const [checkedList, setCheckedList] = useState<string[]>();

  const onChange = (list: string[]) => {
    setCheckedList(list);
  };

  return (
    <Wrapper>
      <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
    </Wrapper>
  );
};

export default ListingType;
