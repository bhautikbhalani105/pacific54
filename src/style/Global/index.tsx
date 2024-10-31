import AntdStyle from "../../style/Antd";
import { Spacing } from "../../style/Common/Spacing";
import { Common } from "../../style/Common/common";

import { Flex } from "../Common/flex";
import { Grid } from "../Common/grid";
import { Reset } from "../Common/reset";
import { Typography } from "../../style/Common/Typography";

const GlobalStyle = () => {
  return (
    <>
      <Grid />
      <Common />
      <Flex />
      <Reset />
      <Spacing />
      <Typography />
      <AntdStyle />
    </>
  );
};

export default GlobalStyle;
