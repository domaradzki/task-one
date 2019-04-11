import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
/* <img src={logo} className="App-logo" alt="logo" /> */
class App extends Component {
  render() {
    return (
      <div className="app__wrapper">
      <Header />
      <Main />
      <Footer />
        
      </div>
    );
  }
}

export default App;
