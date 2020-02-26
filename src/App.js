import React, { Component } from "react";

import "./styles.css";

var pages = {
  start: {
    text: "Welcome, traveler! How would you like to get to your destination?",
    leftLabel: "Train",
    rightLabel: "Ship",
    leftPage: "onthetrain",
    rightPage: "ontheship"
  },
  onthetrain: {
    text:
      "Welcome aboard the choo-choo train! Please make your way to your seat. What's the number?",
    leftLabel: "12E",
    rightLabel: "97C",
    leftPage: "giveupseat",
    rightPage: "sitlittleboy"
  },

  ontheship: {
    text: "Ahoy matey! Feel free to sit anywhere, or stand!",
    leftLabel: "Sit",
    rightLabel: "Stand",
    leftPage: "sitinship",
    rightPage: "standinship"
  },

  giveupseat: {
    text: "Do you mind switching seats? I'd like to sit beside my son.",
    leftLabel: "I mind, very much.",
    rightLabel: "Of course not!",
    leftPage: "yes",
    rightPage: "no"
  },

  sitlittleboy: {
    text:
      "Your neighbor is a little boy reading your favorite book, The Little Prince.",
    leftLabel: "Strike up a conversation",
    rightLabel: "Mind your own business",
    leftPage: "talk",
    rightPage: "myob"
  },

  sitinship: {
    text: "We're now entering a cave.",
    leftLabel: "Take a picture!",
    rightLabel: "Revel in its beauty",
    leftPage: "takepics",
    rightPage: "revel"
  },

  standinship: {
    text: "Waves are getting choppier!",
    leftLabel: "Sit down",
    leftPage: "sitinship"
  },

  yes: {
    text: "All eyes are on you now...",
    leftLabel: "Regret not giving up seat",
    leftPage: "regret"
  },

  no: {
    text:
      "Your new neighbor is a little boy reading your favorite book, The Little Prince.",
    leftLabel: "Strike up a conversation",
    rightLabel: "Mind your own business",
    leftPage: "talk",
    rightPage: "myob"
  },

  takepics: {
    text: "The flash is too jarring! You've woken up a bunch of bats!!",
    leftLabel: "Hide your phone immediately.",
    leftPage: "hidephone"
  },

  revel: {
    text: "Keep this moment in your memory.",
    leftLabel: "See memory",
    leftPage: "seememory"
  },

  talk: {
    text:
      "Your neighbor is a little boy reading your favorite book, The Little Prince.",
    image:
      "https://cdn.quotesgram.com/img/86/5/275244933-the-little-prince-best-quotes-fox.jpg"
  },

  myob: {
    text: "Stare at scenery outside.",
    image: "https://www.japan-guide.com/g18/3965_02.jpg"
  },

  regret: {
    text: "Hide in embarrassment in the bathroom for the rest of the journey.",
    image: "https://i.imgur.com/yfgTJIq.jpg"
  },

  hidephone: {
    text: "Hide in embarrassment in the bathroom for the rest of the journey.",
    image: "https://i.imgur.com/yfgTJIq.jpg"
  },

  seememory: {
    text: "See memory",
    image:
      "https://www.nationalgeographic.com/content/dam/magazine/rights-exempt/2019/03/mulu-caves/mulu-caves-bats-hunt.adapt.1900.1.jpg"
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "start"
    };
  }
  onClick() {
    console.log("hello world");
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  render() {
    var pageData = pages[this.state.page];

    var arrButtons = [];
    var buttonStyle = {
      margin: "10px 10px 10px 0"
    };

    var imageElement = "";
    if (pageData.image) {
      imageElement = <img src={pageData.image} width="800" />;
    }

    return (
      <div className="App">
        <p>
          {pageData.text}
          <br />
          {imageElement}
          <div>{arrButtons}</div>
        </p>
        <button onClick={() => this.goToPage(pageData.leftPage)}>
          {pageData.leftLabel}
        </button>
        <button onClick={() => this.goToPage(pageData.rightPage)}>
          {pageData.rightLabel}
        </button>
      </div>
    );
  }
}

export default App;
