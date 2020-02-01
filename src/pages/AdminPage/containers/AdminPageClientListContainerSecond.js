import React from "react";
import AdminPageClientListSecond from "../components/AdminPageClientList/AdminPageClientListSecond";

class AdminPageClientListContainerSecond extends React.Component {
  state = {
    columns: [
      { title: "Id", field: "id" },
      { title: "Name", field: "name" },
      { title: "Email", field: "email" },
      { title: "PostId", field: "postId" },
      { title: "Body", field: "body" }
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
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(response => response.json())
      .then(comments => {
        const mappedComments = comments.map(user => ({
          id: user.id,
          name: user.name,
          email: user.email,
          postId: user.postId,
          body: user.body
        }));

        this.setState({ data: mappedComments });
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
    return <AdminPageClientListSecond {...props} />;
  }
}
export default AdminPageClientListContainerSecond;
