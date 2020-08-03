import React from "react";

import "./App.css";
import SmurfList from "./SmurfList";
import AddSmurfForm from "./AddSmurfForm";

const App = (props) => {
  return (
    <div className="App">
      <h1>Smurf List</h1>
      <AddSmurfForm />
      <SmurfList />
    </div>
  );
};

export default App;
