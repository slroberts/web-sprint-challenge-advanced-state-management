import React, {useEffect} from "react";
import {connect} from "react-redux";

import {fetchData} from "../actions";

import Smurf from "./Smurf";

const SmurfList = (props) => {
  useEffect(() => {
    props.fetchData();
  }, []);
  return props.smurfs.map((smurf) => <Smurf smurf={smurf} key={smurf.id} />);
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    smurfs: state.smurfs,
    error: state.error,
  };
};

export default connect(mapStateToProps, {fetchData})(SmurfList);
