import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import { actionSetSearchField, actionRequestRobots } from "../actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.reducerSearchRobots.searchField,
    robots: state.reducerRequestRobots.robots,
    isPending: state.reducerRequestRobots.isPending,
    error: state.reducerRequestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) =>
      dispatch(actionSetSearchField(event.target.value)),
    onRequestRobots: () => dispatch(actionRequestRobots()),
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filterRobots = robots.filter((robot) => {
      return robot.name
        .toLocaleLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });

    return isPending ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RobotFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filterRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
