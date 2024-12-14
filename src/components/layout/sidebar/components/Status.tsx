import { useState } from 'react';

import { Button, Checkbox } from 'antd';

import { Wrapper } from './style';

const CheckboxGroup = Checkbox.Group;

const Status: React.FC = () => {
  const [checkedList, setCheckedList] = useState<string[]>();

  const onChange = (list: string[]) => {
    setCheckedList(list);
  };

  const plainOptions = [
    { label: 'Pending review (8)', value: 'A', className: 'pending' },
    { label: 'Offer sent (4)', value: 'B', className: 'offerSent' },
    { label: 'Under contract (4)', value: 'C', className: 'underContract' },
    { label: 'Ready to bid (3)', value: 'D', className: 'bidReady' },
    { label: 'Reviewed', value: 'E', className: 'reviewed' }
  ];

  return (
    <Wrapper>
      <CheckboxGroup value={checkedList} onChange={onChange} className="colored-border">
        {plainOptions.map((option) => (
          <Checkbox key={option.value} value={option.value} className={option.className}>
            {option.label}
          </Checkbox>
        ))}
      </CheckboxGroup>
      <Button className="mt-16">Create new</Button>
    </Wrapper>
  );
};

export default Status;
