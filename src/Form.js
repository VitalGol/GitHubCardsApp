import React, { Component } from "react";
import axios from "axios";
export default class Form extends Component {
  state = { userName: "" };
  // userNameInput = React.createRef();
  handlerSubmit = async (event) => {
    event.preventDefault();
    // console.log(this.userNameInput.current.value);
    const resp = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.onSubmit(resp.data);
    this.setState({ userName: "" });
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
