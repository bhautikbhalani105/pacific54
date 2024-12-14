import { Flex, Switch } from 'antd';

const Extras: React.FC = () => {
  return (
    <>
      <Flex gap={16} align="center" className="mb-16">
        <Switch defaultChecked />
        <p className="filter-info">Waterview</p>
      </Flex>
      <Flex gap={16} align="center" className="mb-16">
        <Switch defaultChecked />
        <p className="filter-info">Pool</p>
      </Flex>
      <Flex gap={16} align="center" className="mb-16">
        <Switch defaultChecked />
        <p className="filter-info">Basement</p>
      </Flex>
      <Flex gap={16} align="center" className="mb-16">
        <Switch defaultChecked />
        <p className="filter-info">Have A/C</p>
      </Flex>
    </>
  );
};

export default Extras;
