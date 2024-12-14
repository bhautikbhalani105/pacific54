import { useState } from 'react';

import { Checkbox } from 'antd';

import { Wrapper } from './style';

const CheckboxGroup = Checkbox.Group;

const PropertyType: React.FC = () => {
  const plainOptions = ['Single Family (234)', 'Condo (23)', 'Multi-family (51)'];

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

export default PropertyType;
