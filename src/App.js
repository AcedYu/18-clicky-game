// Import React
import React from 'react';
//Import Components
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Card from "./components/Card";

const cards = [
  {
    id: 1,
    url: "https://ssb.wiki.gallery/images/thumb/4/44/Mario_SSBU.png/250px-Mario_SSBU.png"
  },
  {
    id: 2,
    url: "https://ssb.wiki.gallery/images/thumb/8/84/Link_SSBU.png/250px-Link_SSBU.png"
  },
  {
    id: 3,
    url: "https://ssb.wiki.gallery/images/thumb/0/03/Samus_SSBU.png/250px-Samus_SSBU.png"
  },
  {
    id: 4,
    url: "https://ssb.wiki.gallery/images/thumb/0/07/Kirby_SSBU.png/250px-Kirby_SSBU.png"
  },
  {
    id: 5,
    url: "https://ssb.wiki.gallery/images/thumb/2/2f/Fox_SSBU.png/250px-Fox_SSBU.png"
  },
  {
    id: 6,
    url: "https://ssb.wiki.gallery/images/thumb/9/93/Pikachu_SSBU.png/250px-Pikachu_SSBU.png"
  },
  {
    id: 7,
    url: "https://ssb.wiki.gallery/images/thumb/d/da/Captain_Falcon_SSBU.png/250px-Captain_Falcon_SSBU.png"
  },
  {
    id: 8,
    url: "https://ssb.wiki.gallery/images/thumb/8/82/Ness_SSBU.png/250px-Ness_SSBU.png"
  },
  {
    id: 9,
    url: "https://ssb.wiki.gallery/images/thumb/e/e9/Marth_SSBU.png/250px-Marth_SSBU.png"
  },
  {
    id: 10,
    url: "https://ssb.wiki.gallery/images/thumb/3/38/Pit_SSBU.png/250px-Pit_SSBU.png"
  },
  {
    id: 11,
    url: "https://ssb.wiki.gallery/images/thumb/6/61/Ryu_SSBU.png/250px-Ryu_SSBU.png"
  },
  {
    id: 12,
    url: "https://ssb.wiki.gallery/images/thumb/b/b3/Cloud_SSBU.png/250px-Cloud_SSBU.png"
  }
]

class App extends React.Component {
  state = {
    score: 0,
    topscore: 0,
    cards: cards,
    tracked: [],
    status: "Click a picture to begin playing!"
  };

  handleGame = (id) => {
    if (this.state.tracked.indexOf(id) !== -1) {
      this.setState(
        { tracked: [],
          status: "You guessed incorrectly!" ,
          score: 0
        }
      );
    } else {
      var newTrack = this.state.tracked;
      newTrack.push(id);
      this.setState({ tracked: newTrack, status: "You guessed correctly!" });
      this.handleScore();
      this.handleTopScore();
      this.shuffle();
    }
  }

  handleScore = () => {
    this.setState({ score: this.state.score + 1 });
  };

  handleTopScore = () => {
    if (this.state.topscore <= this.state.score) {
      this.setState({ topscore: this.state.score + 1});
    }
  }

  shuffle = () => {
    var shuffle = this.state.cards;
    shuffle.sort(() => Math.random() - 0.5);
    this.setState({ cards: shuffle });
  }

  render() {
    return (
      <div className="App">
        <Header
          score={this.state.score}
          topscore={this.state.topscore}
          status={this.state.status}
        />
        <Jumbotron />
        <div className="container card-group row-cols-4">
          {this.state.cards.map(item => (
            <Card
              id={item.id}
              url={item.url}
              onClick={this.handleGame}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
