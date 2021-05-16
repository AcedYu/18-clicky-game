// Import React
import React from 'react';
//Import Components
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Jumbotron />
        <div className="container card-group row-cols-4">

        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
