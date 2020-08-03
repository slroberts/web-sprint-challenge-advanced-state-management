import React, {Component} from "react";
import {connect} from "react-redux";

import {fetchData} from "../actions";

import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, {fetchData})(App);
