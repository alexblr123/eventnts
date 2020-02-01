import React from "react";
import MaterialTable from "material-table";

import { tableIcons } from "../config";

const AdminPageClientListSecond = ({
  data,
  columns,
  handleRowAdd,
  handleRowDelete,
  handleRowUpdate
}) => {
  return (
    <MaterialTable
      icons={tableIcons}
      title="Editable Example"
      columns={columns}
      data={data}
      editable={{
        onRowAdd: newData => handleRowAdd(newData),
        onRowUpdate: (newData, oldData) => handleRowUpdate(newData, oldData),
        onRowDelete: oldData => handleRowDelete(oldData)
      }}
    />
  );
};

export default AdminPageClientListSecond;
