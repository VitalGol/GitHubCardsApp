import React, { Component } from "react";
import "./App.css";
// import Card from "./Card";
import CardList from "./CardList";
import Form from "./Form";

const testData = [
  {
    login: "mojombo",
    id: 1,
    avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
    company: "Facebook",
  },
  {
    login: "defunkt",
    id: 2,
    avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
    company: "Twitter",
  },
  {
    login: "pjhyett",
    id: 3,
    avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
    company: "Avon",
  },
];

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = { profiles: testData };
  // }

  state = { profiles: testData };

  render() {
    return (
      <div>
        <h1 className="App">{this.props.title}</h1>
        <Form />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
