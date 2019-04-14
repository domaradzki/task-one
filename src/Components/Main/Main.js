import React, { Component } from "react";
import Navigation from "../Navigation";

class Main extends Component {
  state = {
    week:7
  }
  render() {
    return( 
    <div className="main">
      <Navigation week={this.state.week}/>
    </div>
   );
  }
}

export default Main;
