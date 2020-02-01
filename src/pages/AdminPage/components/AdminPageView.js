import React from "react";
import AdminPageNavigation from "./AdminPageNavigation.js";
import AdminPageClientList from "./AdminPageClientList/AdminPageClientList.js";

function AdminPageView({
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
      <AdminPageNavigation
        value={value}
        handleChange={handleChange}
        data={data}
        columns={columns}
        handleRowUpdate={handleRowUpdate}
        handleRowDelete={handleRowDelete}
        handleRowAdd={handleRowAdd}
      />
    </>
  );
}

export default AdminPageView;
