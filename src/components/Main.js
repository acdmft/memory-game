import React from "react"; //

import "./Main.module.css";
import Card from "./Card";
import Reset from "./Reset";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      cardProps: [
        { path: "/images/img1.png", value: "bootstrap" },
        { path: "/images/img2.png", value: "css" },
        { path: "/images/img3.png", value: "html" },
        { path: "/images/img4.png", value: "js" },
        { path: "/images/img5.png", value: "node" },
        { path: "/images/img6.png", value: "python" },
        { path: "/images/img1.png", value: "bootstrap" },
        { path: "/images/img2.png", value: "css" },
        { path: "/images/img3.png", value: "html" },
        { path: "/images/img4.png", value: "js" },
        { path: "/images/img5.png", value: "node" },
        { path: "/images/img6.png", value: "python" },
      ],
      currentValue1: "",
      currentValue2: "",
      matchedCards: 0,
    };
    this.turnTheCard = this.turnTheCard.bind(this);
    this.addMatchedCards = this.addMatchedCards.bind(this);
    this.renderCards = this.renderCards.bind(this);
  }

  addMatchedCards() {
    if (this.state.currentValue1 === this.state.currentValue2) {
      this.setState((prevState) => {
        return { matchedCards: prevState.matchedCards + 1 };
      });
    }
  }

  turnTheCard(cardVal) {
    if (this.state.currentValue1 === "") {
      this.setState({ currentValue1: cardVal });
    } else if (this.state.currentValue2 === "") {
      this.setState({ currentValue2: cardVal });
    }
  }
  componentDidMount() {
    this.state.cardProps.sort(() => Math.random() - 0.5);
  }

  componentDidUpdate() {
    console.log(`currentValue1 :${this.state.currentValue1}`);
    console.log(`currentValue2 :${this.state.currentValue2}`);
    console.log(`MatchedC :${this.state.matchedCards}`);
    if (this.state.currentValue1 !== "" && this.state.currentValue2 !== "") {
      this.addMatchedCards();
      this.setState({ currentValue1: "" });
      this.setState({ currentValue2: "" });
    }

    if (this.state.matchedCards === 6) {
      return this.props.gameOver();
    }
  }

  renderGameOver() {
    if (this.state.matchedCards === 6) {
      return (
        <>
          <div className="gameOver py-5 rounded position-absolute end-0 h-75 mt-3 me-4 w-50" id="gameOver">
            <h2 className="text-center mb-5 px-2">Félicitations vous avez gagné</h2>
            <div className="d-flex justify-content-center mt-3">
              <Reset finish={this.props.finish} />

            </div>
            
          </div>
            
        </>
      );
    }
  }
  // takes index of first and last cards in the rendered row 
  renderCards(firstCard, lastCard) {
    console.log(this.state.cardProps);
    return this.state.cardProps.map((card, i) => {
      if (i >= firstCard && i <= lastCard) {
        console.log(typeof i);
        return (
          <Card
            cardProps={this.state.cardProps[i]}
            onClick={this.turnTheCard}
            currentValue1={this.state.currentValue1}
            currentValue2={this.state.currentValue2}
          />
        );
      } else {
        return null;
      }
    });
  }

  render() {
    return (
      <main>
        <div className="row position-absolute w-50 h-75 end-0" >
          {this.renderGameOver()}
        </div>
        <section className="container-fluid ">
            <div className="row items-between mx-auto mt-3">
              {this.renderCards(0, 3)}
            </div>
            <div className="row items-between mx-auto mt-3">
              {this.renderCards(4, 7)}
            </div>
            <div className="row items-between mx-auto mt-3">
              {this.renderCards(8, 11)}
            </div>
        </section>
      </main>
    );
  }
}

export default Main;
