import { AntButton } from './AntButton';
import { AntCard } from './AntCard';
import { AntCollapse } from './AntCollapse';
import { AntDescription } from './AntDescription';
import { AntDropdown } from './AntDropdown';
import { AntImage } from './AntImage';
import { AntSteps } from './AntSteps';
import { AntTable } from './AntTable';

const AntdStyle = () => {
  return (
    <>
      <AntDropdown />
      <AntTable />
      <AntImage />
      <AntButton />
      <AntCard />
      <AntCollapse />
      <AntDescription />
      <AntSteps />
    </>
  );
};

export default AntdStyle;
