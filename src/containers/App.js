import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((users) => this.setState({ robots: users }));
    //.then((users) => this.setState({ robots: [] }));
    console.log("Component Did Mount");
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
    console.log(event.target.value);
  };

  render() {
    const { robots, searchfield } = this.state;
    const filterRobots = robots.filter((robot) => {
      return robot.name
        .toLocaleLowerCase()
        .includes(searchfield.toLocaleLowerCase());
    });
    //console.log(filterRobots);
    return robots.length < 1 ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RobotFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filterRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
