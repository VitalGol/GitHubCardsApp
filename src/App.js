import React, { Component } from "react";
import "./App.css";
// import Card from "./Card";
import CardList from "./CardList";

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="App">{this.props.title}</h1>
        <CardList />
      </div>
    );
  }
}

export default App;
