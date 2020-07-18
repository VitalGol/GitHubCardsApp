import React, { Component } from "react";

export default class Form extends Component {
  state = { userName: "" };
  // userNameInput = React.createRef();
  handlerSubmit = (event) => {
    event.preventDefault();
    // console.log(this.userNameInput.current.value);
    console.log(this.state.userName);
  };

  render() {
    return (
      <form
        onSubmit={this.handlerSubmit}
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <input
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
          type="text"
          // ref={this.userNameInput}

          placeholder="GitHub username"
          required
        />
        <button>Add card</button>
      </form>
    );
  }
}
