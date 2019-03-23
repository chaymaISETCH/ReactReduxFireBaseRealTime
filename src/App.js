import React from "react";
import Nav from "./components/Nav";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {}

  render() {
    return (
      <div>
        <Nav />
      </div>
    );
  }
}
