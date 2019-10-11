import React, { Component } from "react";
import "./App.scss";
import SmurfForm from "./SmurfForm";
import SmurfList from './SmurfList';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Smurf Village!</h1>
      <SmurfForm />
      <SmurfList />
      </div>
    );
  }
}

export default App;
