import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div style={{ width: "2rem", height: "2rem", backgroundColor: "grey" }}>
        {this.props.children}
      </div>
    );
  }
}

export default Card;