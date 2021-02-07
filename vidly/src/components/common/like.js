import React, { Component } from "react";

class Like extends Component {
  render() {
    let classes = "fa fa-heart";
    if (!this.props.liked) classes += "-o";

    return (
      <i
        onClick={this.props.OnClick}
        style={{ cursor: "pointer" }}
        className={classes}
      />
    );
  }
}

export default Like;
