import React, { Component } from "react";
import { render } from 'react-dom'
import "./App.css";
import List from "./List";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: []
    };
  }

  onChange = event => {
    this.setState({ term: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      term: "",
      items: [...this.state.items, this.state.term]
    });
  };

  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>New Task</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}
