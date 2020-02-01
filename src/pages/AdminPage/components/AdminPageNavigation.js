import React from "react";
import Tabs from "@material-ui/core/Tabs";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import TabPanel from "./TabPanel";
import AdminPageClientListContainerSecond from "../containers/AdminPageClientListContainerSecond";
import AdminPageClientListContainer from "../containers/AdminPageClientListContainer";
import ImagesContainer from "../containers/ImagesContainer";

function AdminPageNavigation({
  value,
  handleChange,
  data,
  columns,
  handleRowUpdate,
  handleRowAdd,
  handleRowDelete
}) {
  return (
    <>
      <AppBar position="static" color="primary">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Users" />
          <Tab label="Comments" />
          <Tab label="Images" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <AdminPageClientListContainer
          data={data}
          columns={columns}
          handleRowUpdate={handleRowUpdate}
          handleRowDelete={handleRowDelete}
          handleRowAdd={handleRowAdd}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AdminPageClientListContainerSecond
          data={data}
          columns={columns}
          handleRowUpdate={handleRowUpdate}
          handleRowDelete={handleRowDelete}
          handleRowAdd={handleRowAdd}
        />
      </TabPanel>
      <TabPanel>
        <ImagesContainer />
      </TabPanel>
    </>
  );
}

export default AdminPageNavigation;
