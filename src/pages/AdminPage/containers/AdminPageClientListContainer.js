import React from "react";
import AdminPageClientList from "../components/AdminPageClientList/AdminPageClientList";

class AdminPageClientListContainer extends React.Component {
  state = {
    columns: [
      { title: "Id", field: "id" },
      { title: "Name", field: "name" },
      { title: "Username", field: "username" },
      { title: "Email", field: "email" },
      { title: "Phone", field: "phone" },
      { title: "Website", field: "website" },
      { title: "City", field: "city" },
      { title: "Company", field: "company" }
    ],
    data: []
  };

  componentDidMount() {
    this.getUsers();
  }
  componentDidUpdate() {
    console.log(this.state.data);
  }

  getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        const mappedUsers = users.map(user => ({
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          phone: user.phone,
          website: user.website,
          city: user.address.city,
          company: user.company.name
        }));

        this.setState({ data: mappedUsers });
      });
  };
  handleRowAdd = newData =>
    new Promise(resolve => {
      console.log(newData);

      setTimeout(() => {
        resolve();
        this.setState(prevState => {
          console.log("PREV STATE", prevState);
          const data = [...prevState.data];
          data.push(newData);
          return { ...prevState, data };
        });
      }, 600);
    });
  handleRowUpdate = (newData, oldData) =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
        if (oldData) {
          this.setState(prevState => {
            const data = [...prevState.data];
            data[data.indexOf(oldData)] = newData;
            return { ...prevState, data };
          });
        }
      }, 600);
    });
  handleRowDelete = oldData =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
        this.setState(prevState => {
          const data = [...prevState.data];
          data.splice(data.indexOf(oldData), 1);
          return { ...prevState, data };
        });
      }, 600);
    });

  render() {
    const props = {
      columns: this.state.columns,
      data: this.state.data,
      handleRowAdd: this.handleRowAdd,
      handleRowUpdate: this.handleRowUpdate,
      handleRowDelete: this.handleRowDelete
    };
    return <AdminPageClientList {...props} />;
  }
}
export default AdminPageClientListContainer;
