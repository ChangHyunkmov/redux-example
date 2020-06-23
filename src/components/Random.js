import React, { Component } from "react";
import { connect } from "react-redux";

class Random extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>{this.props.number}</p>
        <p>
          {this.props.color[0]} , {this.props.color[1]} , {this.props.color[2]}
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    number: state.counter.number,
    color: state.ui.color,
  };
};

export default connect(mapStateToProps, null)(Random);
