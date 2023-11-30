import React from "react";
import Reset from "./Reset";

class Header extends React.Component {
  renderReset() {
    if (this.props.finish) {
      return null;
    } else {
      return <Reset />;
    }
  }

  render() {
    return (
      <header>
        <h1 className="text-center py-3">Memory game</h1>
        <div className="d-flex w-50 mx-auto justify-content-around align-items-center">
          <div className="col-8">
            <h2>Règle : </h2>
            <p>Trouve les images identiques et c'est gagné!</p>
          </div>
          <div>{this.renderReset()}</div>
        </div>
      </header>
    );
  }
}
export default Header;
