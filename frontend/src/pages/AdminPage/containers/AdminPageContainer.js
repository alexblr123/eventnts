import React from "react";
import AdminPageView from "../components/AdminPageView";

class AdminPageContainer extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };
  render() {
    const props = {
      value: this.state.value,
      handleChange: this.handleChange
    };
    return <AdminPageView {...props} />;
  }
}

export default AdminPageContainer;
