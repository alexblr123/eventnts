import React from "react";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index } = props;
  return value === index && <Box p={3}>{children}</Box>;
}

export default TabPanel;
